import { useState, useRef } from "react";
import { Download, Mail, CheckCircle } from "lucide-react";
import { formSteps } from "../data/siteData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ADMISSIONS_EMAIL = "vidwathtesting@gmail.com";

export default function ApplicationFormPage({ onBack }) {
  useScrollReveal();

  const fileInputRef = useRef(null);
  const formCardRef = useRef(null);

  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoName, setPhotoName] = useState("");
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle | sending | sent
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    applyingClass: "Nursery",
    lastSchool: "",
    fatherName: "",
    motherName: "",
    contactNumber: "",
    email: "",
    consent: false,
  });

  const updateField = (field, value) => {
    setFormData((cur) => ({ ...cur, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const stepDone = [
    !!(
      formData.studentName &&
      formData.dateOfBirth &&
      formData.gender &&
      formData.bloodGroup
    ),
    !!(formData.applyingClass && formData.lastSchool),
    !!(
      formData.fatherName &&
      formData.motherName &&
      formData.contactNumber &&
      formData.email
    ),
    !!(photoPreview && formData.consent),
  ];

  const stepStarted = [
    !!(
      formData.studentName ||
      formData.dateOfBirth ||
      formData.gender ||
      formData.bloodGroup
    ),
    !!(formData.applyingClass !== "Nursery" || formData.lastSchool),
    !!(
      formData.fatherName ||
      formData.motherName ||
      formData.contactNumber ||
      formData.email
    ),
    !!(photoPreview || formData.consent),
  ];

  let currentStep = 0;

  for (let i = 0; i < stepStarted.length; i++) {
    if (stepStarted[i]) currentStep = i;
  }

  const getStepClass = (index) => {
    if (index === currentStep)
      return "application-step application-step--active";

    if (stepDone[index])
      return "application-step application-step--done";

    return "application-step";
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      alert("Please upload JPG or PNG image");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("File size must be under 2MB");
      return;
    }

    setPhotoName(file.name);
    if (errors.photo) setErrors((prev) => ({ ...prev, photo: "" }));

    const reader = new FileReader();

    reader.onload = (ev) => {
      setPhotoPreview(ev.target.result);
    };

    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    setPhotoPreview(null);
    setPhotoName("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.studentName.trim()) newErrors.studentName = "Required";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Required";
    if (!formData.gender) newErrors.gender = "Required";
    if (!formData.bloodGroup.trim()) newErrors.bloodGroup = "Required";
    if (!formData.lastSchool.trim()) newErrors.lastSchool = "Required";
    if (!formData.fatherName.trim()) newErrors.fatherName = "Required";
    if (!formData.motherName.trim()) newErrors.motherName = "Required";
    if (!formData.contactNumber.trim()) newErrors.contactNumber = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!photoPreview) newErrors.photo = "Photo required";
    if (!formData.consent) newErrors.consent = "You must agree";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const emailFilledForm = async () => {
    if (!validateForm()) {
      alert("Please fill all required fields before submitting.");
      return;
    }

    setSubmitStatus("sending");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${ADMISSIONS_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `Admission Application - ${formData.studentName}`,
            "Student Name": formData.studentName,
            "Date of Birth": formData.dateOfBirth,
            Gender: formData.gender,
            "Blood Group": formData.bloodGroup,
            "Applying for Class": formData.applyingClass,
            "Last School Attended": formData.lastSchool,
            "Father's Name": formData.fatherName,
            "Mother's Name": formData.motherName,
            "Contact Number": formData.contactNumber,
            "Email Address": formData.email,
            "Declaration / Consent": "Confirmed",
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("sent");
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      setSubmitStatus("idle");
      alert(
        "Could not send the application. Please check your internet connection and try again."
      );
    }
  };

  const downloadFilledForm = async () => {
    if (!formCardRef.current) return;

    const element = formCardRef.current;

    // Hide buttons before capture
    const controls = element.querySelector(".form-controls");
    if (controls) controls.style.display = "none";

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    // Restore buttons after capture
    if (controls) controls.style.display = "";

    const imgData = canvas.toDataURL("image/png");
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    const pdfWidth = 210;
    const pdfImgWidth = pdfWidth - 20;
    const pdfImgHeight = (imgHeight * pdfImgWidth) / imgWidth;

    const doc = new jsPDF("p", "mm", "a4");
    const pageHeight = doc.internal.pageSize.getHeight() - 20;

    if (pdfImgHeight <= pageHeight) {
      doc.addImage(imgData, "PNG", 10, 10, pdfImgWidth, pdfImgHeight);
    } else {
      let remainingHeight = pdfImgHeight;
      let sourceY = 0;
      const sliceRatio = imgWidth / pdfImgWidth;

      while (remainingHeight > 0) {
        const sliceHeight = Math.min(pageHeight, remainingHeight);
        const sourceSliceHeight = sliceHeight * sliceRatio;

        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = imgWidth;
        pageCanvas.height = sourceSliceHeight;
        const ctx = pageCanvas.getContext("2d");
        ctx.drawImage(canvas, 0, sourceY, imgWidth, sourceSliceHeight, 0, 0, imgWidth, sourceSliceHeight);

        const pageImgData = pageCanvas.toDataURL("image/png");
        doc.addImage(pageImgData, "PNG", 10, 10, pdfImgWidth, sliceHeight);

        remainingHeight -= sliceHeight;
        sourceY += sourceSliceHeight;

        if (remainingHeight > 0) {
          doc.addPage();
        }
      }
    }

    doc.save(`Admission_Application_${formData.studentName || "Form"}.pdf`);
  };

  return (
    <main className="application-page">
      <section className="application-shell">
        <button
          className="application-backlink"
          type="button"
          onClick={onBack}
        >
          <span aria-hidden="true">←</span>
          <span>Back to Admissions</span>
        </button>

        <div className="application-header">
          <div className="application-header__copy">
            <p className="eyebrow">Secure application portal</p>

            <h1>Start Your Application</h1>

            <p>
              Complete the admission request in a few guided steps.
            </p>
          </div>

          <button className="application-status" type="button">
            <span className="application-status__icon">●</span>
            <span>Application progress tracker</span>
          </button>
        </div>

        <div className="application-layout">
          <aside className="application-stepper">
            <div className="application-stepper__inner">
              {formSteps.map((item, index) => (
                <div className={getStepClass(index)} key={item.step}>
                  <div className="application-step__badge">
                    {stepDone[index] ? "✓" : item.step}
                  </div>

                  <div className="application-step__copy">
                    <span>{item.eyebrow}</span>
                    <strong>{item.title}</strong>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <section className="application-form-card" ref={formCardRef}>
            {submitStatus === "sent" && (
              <div className="form-success-banner">
                <CheckCircle size={22} />
                <div>
                  <strong>Application submitted successfully!</strong>
                  <p>Your admission application has been sent to <strong>{ADMISSIONS_EMAIL}</strong>. We will review your application and get back to you shortly.</p>
                </div>
              </div>
            )}

            <div className="application-form">
              <div className="form-section">
                <div className="form-section__title">
                  <span />
                  <h2>Student Identity</h2>
                </div>

                <div className="form-grid form-grid--two">
                  <label className={`form-field ${errors.studentName ? "form-field--error" : ""}`}>
                    <span>Full legal name {errors.studentName && <em className="field-error">*{errors.studentName}</em>}</span>

                    <input
                      type="text"
                      placeholder="As per birth certificate"
                      value={formData.studentName}
                      onChange={(e) =>
                        updateField("studentName", e.target.value)
                      }
                    />
                  </label>

                  <label className={`form-field ${errors.dateOfBirth ? "form-field--error" : ""}`}>
                    <span>Date of birth {errors.dateOfBirth && <em className="field-error">*{errors.dateOfBirth}</em>}</span>

                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        updateField("dateOfBirth", e.target.value)
                      }
                    />
                  </label>

                  <label className={`form-field ${errors.gender ? "form-field--error" : ""}`}>
                    <span>Gender {errors.gender && <em className="field-error">*{errors.gender}</em>}</span>

                    <select
                      value={formData.gender}
                      onChange={(e) =>
                        updateField("gender", e.target.value)
                      }
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </label>

                  <label className={`form-field ${errors.bloodGroup ? "form-field--error" : ""}`}>
                    <span>Blood group {errors.bloodGroup && <em className="field-error">*{errors.bloodGroup}</em>}</span>

                    <input
                      type="text"
                      placeholder="e.g. O+"
                      value={formData.bloodGroup}
                      onChange={(e) =>
                        updateField("bloodGroup", e.target.value)
                      }
                    />
                  </label>
                </div>
              </div>

              <div className="form-section">
                <div className="form-section__title">
                  <span />
                  <h2>Academic Preferences</h2>
                </div>

                <div className="form-grid form-grid--two">
                  <label className="form-field">
                    <span>Applying for class</span>

                    <select
                      value={formData.applyingClass}
                      onChange={(e) =>
                        updateField("applyingClass", e.target.value)
                      }
                    >
                      <option value="Nursery">Nursery</option>
                      <option value="KG">KG</option>
                      <option value="Grade I">Grade I</option>
                    </select>
                  </label>

                  <label className={`form-field ${errors.lastSchool ? "form-field--error" : ""}`}>
                    <span>Last school attended {errors.lastSchool && <em className="field-error">*{errors.lastSchool}</em>}</span>

                    <input
                      type="text"
                      placeholder="Enter school name"
                      value={formData.lastSchool}
                      onChange={(e) =>
                        updateField("lastSchool", e.target.value)
                      }
                    />
                  </label>
                </div>
              </div>

              <div className="form-section">
                <div className="form-section__title">
                  <span />
                  <h2>Parent / Guardian Details</h2>
                </div>

                <div className="form-grid form-grid--guardian">
                  <label className={`form-field ${errors.fatherName ? "form-field--error" : ""}`}>
                    <span>Father's Name {errors.fatherName && <em className="field-error">*{errors.fatherName}</em>}</span>

                    <input
                      type="text"
                      value={formData.fatherName}
                      onChange={(e) =>
                        updateField("fatherName", e.target.value)
                      }
                    />
                  </label>

                  <label className={`form-field ${errors.motherName ? "form-field--error" : ""}`}>
                    <span>Mother's Name {errors.motherName && <em className="field-error">*{errors.motherName}</em>}</span>

                    <input
                      type="text"
                      value={formData.motherName}
                      onChange={(e) =>
                        updateField("motherName", e.target.value)
                      }
                    />
                  </label>

                  <label className={`form-field ${errors.contactNumber ? "form-field--error" : ""}`}>
                    <span>Contact Number {errors.contactNumber && <em className="field-error">*{errors.contactNumber}</em>}</span>

                    <input
                      type="tel"
                      value={formData.contactNumber}
                      onChange={(e) =>
                        updateField("contactNumber", e.target.value)
                      }
                    />
                  </label>

                  <label className={`form-field ${errors.email ? "form-field--error" : ""}`}>
                    <span>Email Address {errors.email && <em className="field-error">*{errors.email}</em>}</span>

                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        updateField("email", e.target.value)
                      }
                    />
                  </label>
                </div>
              </div>

              <div className={`upload-panel ${errors.photo ? "upload-panel--error" : ""}`}>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png"
                  style={{ display: "none" }}
                  onChange={handlePhotoChange}
                />

                <div
                  className="upload-panel__preview"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <span>+</span>
                  )}
                </div>

                <div className="upload-panel__copy">
                  <h3>Student Photograph {errors.photo && <em className="field-error">*{errors.photo}</em>}</h3>

                  <p>Upload JPG or PNG image</p>

                  {photoName && <p>✓ {photoName}</p>}

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      className="upload-button"
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {photoPreview ? "Change Photo" : "Upload File"}
                    </button>

                    {photoPreview && (
                      <button
                        className="upload-button"
                        type="button"
                        onClick={removePhoto}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="form-controls">
                <label className={`form-consent ${errors.consent ? "form-consent--error" : ""}`}>
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) =>
                      updateField("consent", e.target.checked)
                    }
                  />

                  <span>
                    I confirm that the information provided is accurate.
                    {errors.consent && <em className="field-error"> *{errors.consent}</em>}
                  </span>
                </label>

                <p style={{ fontSize: "0.85rem", color: "#888", margin: "0.5rem 0" }}>
                  Form will be sent to: <strong>{ADMISSIONS_EMAIL}</strong>
                </p>

                <div className="form-controls__actions">
                  <button
                    className="form-controls__download"
                    type="button"
                    onClick={downloadFilledForm}
                  >
                    <Download size={18} />
                    <span>Download PDF</span>
                  </button>

                  <button
                    className="form-controls__submit"
                    type="button"
                    onClick={emailFilledForm}
                    disabled={submitStatus === "sending"}
                  >
                    {submitStatus === "sending" ? (
                      <>
                        <span className="spinner" />
                        <span>Sending…</span>
                      </>
                    ) : submitStatus === "sent" ? (
                      <>
                        <CheckCircle size={18} />
                        <span>Sent ✓</span>
                      </>
                    ) : (
                      <>
                        <Mail size={18} />
                        <span>Submit Form</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}