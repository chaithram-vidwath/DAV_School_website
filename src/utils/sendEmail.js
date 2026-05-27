// src/utils/sendEmail.js
import emailjs from '@emailjs/browser';

export function sendApplicationEmail(formData) {
  // You must configure these in your EmailJS dashboard
  const SERVICE_ID = '';
  const TEMPLATE_ID = '';
  const USER_ID = '';

  // Map formData to template params
  const templateParams = {
    student_name: formData.studentName,
    date_of_birth: formData.dateOfBirth,
    gender: formData.gender,
    blood_group: formData.bloodGroup,
    applying_class: formData.applyingClass,
    last_school: formData.lastSchool,
    father_name: formData.fatherName,
    mother_name: formData.motherName,
    contact_number: formData.contactNumber,
    email: formData.email,
    consent: formData.consent ? 'Yes' : 'No',
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
}
