export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about-us', label: 'About Us' },
  { id: 'academics', label: 'Academics' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'facilities', label: 'Infrastructure' },
  { id: 'gallery', label: 'Gallery' },
  // { id: 'faculty-staff', label: 'Faculty' },
  { id: 'documents', label: 'Mandatory Disclosure' },
  { id: 'contact-us', label: 'Contact Us' }
]

export const achievements = [
  {
    value: '#1',
    title: 'Ranked top day school in the district',
    detail: 'Consistent board results, co-curricular depth, and strong parent trust.',
  },
  { value: '100%', title: 'Board success rate' },
  { value: '90+', title: 'Inter-school awards' },
  { value: '1:20', title: 'Teacher-Student Ratio' },
]

export const facilities = [
  {
    icon: '🚌',
    title: 'Safe transport',
    detail: 'GPS-enabled routes and verified staff support.',
  },
  {
    icon: '🧪',
    title: 'STEM labs',
    detail: 'Hands-on science, coding, and maker learning.',
  },
  {
    icon: '📚',
    title: 'Library culture',
    detail: 'Curated reading spaces that support independent learning.',
  },
  {
    icon: '⚽',
    title: 'Active campus',
    detail: 'Sports, performing arts, and student-led clubs.',
  },
]

export const leaders = [
  { name: 'Sri N. Sachiddananda Murthy', role: 'Chairman', tone: 'leader-card--navy' },
  { name: 'Sri R. Anand', role: 'Secretary', tone: 'leader-card--amber' },
  { name: 'Smt Jayashree S. Murthy', role: 'C.E.O', tone: 'leader-card--slate' },
  { name: 'Smt Dr. Kavya Shree Basappa', role: 'Principal', tone: 'leader-card--slate' },
]

export const mandatoryDisclosure = {
  generalInformation: [
    { label: 'Name of the School', value: 'Dayananda Arya Vidya Public School' },
    { label: 'Affiliation No.', value: '830243' },
    { label: 'School Code', value: '41063' },
    { label: 'Complete Address', value: 'Mananthavadi Rd, Industrial Suburb, Vishweshwaranagar, III Stage, Vidyaranyapura, Visveshwara Nagar, Mysuru 570008' },
    { label: 'Principal Name & Qualification', value: 'Smt. Kavya Shree Basappa, P.hD' },
    { label: 'School Email ID', value: 'dav_mysore@rediffmail.com' },
    { label: 'Contact Details', value: '0821 248 8429' }
  ],
  documents: [
    { sl: 1, title: 'Mandatory Disclosure  CBSE SARAS', link: '#' },
    { sl: 2, title: 'Copies of affiliation / upgradation letter and recent extension of affiliation, if any', link: '/pdf/Affiliation_Certificate___1_.pdf' },
    { sl: 3, title: 'Copies of Societies / Trust registration/ renewal certificate as applicable', link: '/pdf/Deed-of-amendment-of-trust.pdf' },
    { sl: 4, title: 'Copy of No Objection Certificate issued, if applicable by the state Govt', link: '/pdf/NOC.pdf' },
    { sl: 5, title: 'Copies of Recognition Certificate under RTE Act, 2009 and its renewal, if applicable', link: '#' },
    { sl: 6, title: 'Copy of Valid Building Safety Certificate as per the National Building Code', link: '/pdf/Building-Safety-Certificate_2024__1___1__2026.pdf' },
    { sl: 7, title: 'Copy of valid Fire Safety Certificate issued by the Competent Authority', link: '/pdf/fire_safety_new_2026_.pdf' },
    { sl: 8, title: 'Copy of the DEO Certificate submitted by the school for affiliation/ upgradation/extension of affiliation or self-certification by school', link: '#' },
    { sl: 9, title: 'Copies of valid Water, Health and Sanitation Certificates', link: '/pdf/SAFE_DRINKING_WATER_AND_SANITARY_2025-26.pdf' },
    { sl: 10, title: 'Self Certification Affiliation/Upgradation/Extension of Affiliation', link: '/pdf/Extension-of-provisional-affiliation.pdf' },
    { sl: 11, title: 'Land Certificate', link: '/pdf/land_certificate_26-27_new.pdf' },
    // { sl: 12, title: 'Fee Structure', link: '#' },
    { sl: 13, title: 'Academic Calendar', link: '#' },
    { sl: 14, title: 'TC-FORMAT', link: '/pdf/TC-FORMAT__1_2026.pdf' }
  ],
  resultsAndAcademics: [
    {
      sl: 1,
      title: 'Last three-year result of the Board Examinations as per applicability',
      path: '2022 – 23 : 100%\n2023 – 24 : 97.95%\n2024 – 25 : 100%'
    },
    {
      sl: 2,
      title: 'RESULTS OF CLASS X: – Annual Report 2024 – 25',
      path: '100%'
    },
    {
      sl: 3,
      title: 'RESULTS OF CLASS X: – Annual Report 2025 – 26',
      path: '100%'
    }
  ],
  staff: [
    { label: 'Principal', value: '1' },
    { label: 'Total No. of Teachers', value: '45' },
    { label: 'PGT', value: '0' },
    { label: 'TGT', value: '18' },
    { label: 'PRT', value: '22' },
    { label: 'Teachers Section Ratio', value: '1:1.5' },
    { label: 'Details of Special Educator', value: 'Smt. Roopa S' },
    { label: 'Details of Counsellor and Wellness Teacher', value: 'Smt. Deepa M' }
  ],
  infrastructure: [
    { label: 'Total Campus Area (in sq. mtrs.)', value: '11891.589 Sq meters' },
    { label: 'Built-up Area (in sq. mtrs.)', value: '4500 Sq meters (Approx.)' },
    { label: 'No. and Size of Class Rooms (in sq. mtrs.)', value: '64 Classrooms' },
    { label: 'Laboratories Available', value: 'Physics, Chemistry, Biology & Computer Labs (Fully Equipped)' },
    { label: 'Library Details (No. of Books)', value: 'Available with vast collection' },
    { label: 'Sports Facilities', value: 'Volleyball, Cricket, Badminton, Basketball, Swimming, Athletics, Kho-Kho, Kabbadi, Chess, Yoga, Archery, Rifle shooting' },
    { label: 'Transport Facilities', value: 'Yes (Safe & GPS Enabled)' },
    { label: 'Internet Facility (Y/N)', value: 'Yes' },
    { label: 'No. of Girls Toilets', value: '25' },
    { label: 'No. of Boys Toilets', value: '25' },
    { label: 'Link of YouTube Video of the Inspection of School Covering the Infrastructure of the School', value: 'https://youtube.com/davmysuru' }
  ]
}

export const admissionJourney = [
  {
    step: '01',
    title: 'Registration',
    description:
      'Submit the online inquiry form and register your ward for the upcoming session.',
  },
  {
    step: '02',
    title: 'Entrance Test',
    description:
      "A comprehensive evaluation of the student's current academic proficiency and potential.",
  },
  {
    step: '03',
    title: 'Interaction',
    description:
      'A personal dialogue between the faculty, the applicant, and the parents.',
  },
  {
    step: '04',
    title: 'Admission',
    description:
      'Completion of formalities, document verification, and fee submission.',
  },
]

export const keyDates = [
  { month: 'Jan', day: '12', title: 'Registrations Open', meta: 'Online applications begin' },
  { month: 'Feb', day: '03', title: 'Entrance Test', meta: 'Assessment on campus' },
  { month: 'Feb', day: '10', title: 'Interaction Round', meta: 'Student and parent meeting' },
  { month: 'Feb', day: '17', title: 'Final Admission', meta: 'Document verification and fee' },
]

export const eligibilityRows = [
  { grade: 'Nursery', min: '3 and 3+', max: '4 and 4+' },
  { grade: 'KG', min: '4 and 4+', max: '5 and 5+' },
  { grade: 'Prep', min: '5 and 5+', max: '6 and 6+' },
  { grade: 'Grade I', min: '6 and 6+', max: '7 and 7+' },
]

export const mandatoryDocuments = [
  {
    title: 'Birth Certificate',
    description:
      'Original and self-attested copy issued by the Municipal Corporation or competent authority.',
    note: 'Required for all grades',
    tone: 'document-card--feature',
  },
  {
    title: 'Photographs',
    description: 'Recent passport-size photographs of the student and both parents.',
  },
  {
    title: 'Aadhaar Copy',
    description: 'Self-attested identification copy for student record verification.',
  },
  {
    title: 'Report Card',
    description: 'Previous academic session report card from the current school.',
  },
  {
    title: 'Digital Portal',
    description:
      'All documents must be scanned in PDF format (max 2MB per file) for the online application process.',
    tone: 'document-card--portal',
  },
  {
    title: 'Transfer Certificate',
    description: 'Mandatory for students applying to Grade II and above.',
  },
]

export const formSteps = [
  { step: '01', eyebrow: 'Current', title: 'Student Identity' },
  { step: '02', eyebrow: 'Next', title: 'Academics' },
  { step: '03', eyebrow: 'Then', title: 'Parents' },
  { step: '04', eyebrow: 'Finally', title: 'Upload' },
]

export const academicOverview = {
  classesOffered: 'Pre-KG to Grade X',
  streams: 'General Schooling (Integrated Curriculum)',
  subjects: [
    'English', 'Hindi', 'Kannada', 'Mathematics',
    'Science', 'Social Science', 'Artificial Intelligence'
  ],
  examinationSystem: 'As per the CBSE Board Pattern'
}

export const academicSections = [
  {
    id: 'methodology',
    title: 'Teaching Methodology & Faculty',
    description: 'Our educators employ dynamic, student-centric strategies to ensure every learner remains engaged, inspired, and intellectually challenged.',
    points: [
      'Innovative activity-based teaching methods that stimulate creativity and imagination.',
      'A team of well qualified, enthusiastic, and energetic teachers.',
      'Continuous orientation and training programmes to enhance teaching skills.',
      'Regular vocational workshops for professional development.'
    ]
  },
  {
    id: 'support',
    title: 'Infrastructure & Student Support',
    description: 'We provide a safe, modern environment equipped with high-tech tools that facilitate both collaborative and independent learning.',
    points: [
      'Well-equipped classrooms with smart boards.',
      'Limited student strength in each section to ensure individual attention.',
      'Remedial classes and thorough revision sessions for students requiring additional support.',
      'Specialised language teachers to strengthen spoken and written communication skills.'
    ]
  },
  {
    id: 'holistic',
    title: 'Holistic Development',
    description: 'Education at DAV extends beyond textbooks, focusing on character building, physical fitness, and cultural appreciation.',
    points: [
      'Encouragement of individual talents and group activities to promote teamwork.',
      'Educational field trips and excursions.',
      'Active participation in interschool and interstate competitions.',
      'Celebration of National and Regional festivals, highlighting their cultural significance.',
      '"No Bag Day" on Saturdays for Nursery students to promote joyful learning.'
    ]
  },
  {
    id: 'partnership',
    title: 'Parent-Teacher Partnership',
    description: 'We believe in a strong collaborative bond between home and school to ensure the holistic growth of every child.',
    points: [
      'Continuous feedback through daily after-school teacher-parent interactions.',
      'Regular Parent-Teacher Meetings (PTMs) to monitor and review student progress.'
    ]
  }
]

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'campus', label: 'Campus' },
  { id: 'events', label: 'Events' },
  { id: 'sports', label: 'Sports' },
  { id: 'achievements', label: 'Achievements' },
  {
    id: 'arts',
    label: 'Arts & Culture',

  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    description: 'D.A.V. Public School provides a safe, modern, and well-equipped learning environment that supports academic excellence, physical development, and creative growth.'
  },
]

export const galleryItems = [
  {
    id: 'morning-assembly',
    category: 'events',
    title: 'Morning assembly at the central court',
    caption: 'A shared moment of discipline, energy, and school spirit before the day begins.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--sunrise',
  },
  {
    id: 'science-lab',
    category: 'academics',
    title: 'Hands-on science exploration',
    caption: 'Students working through experiments in guided lab sessions.',
    size: 'gallery-card--tall',
    tone: 'gallery-card--lab',
  },
  {
    id: 'library-hour',
    category: 'academics',
    title: 'Independent reading and research',
    caption: 'Quiet corners and shared tables that support focused study habits.',
    size: 'gallery-card--square',
    tone: 'gallery-card--library',
  },
  {
    id: 'campus-corridor',
    category: 'campus',
    title: 'The main academic block',
    caption: 'Clean, structured architecture that gives the campus its calm identity.',
    size: 'gallery-card--square',
    tone: 'gallery-card--stone',
  },
  {
    id: 'sports-day',
    category: 'sports',
    title: 'Sports day in motion',
    caption: 'House spirit, teamwork, and movement-driven confidence on the field.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--field',
  },
  {
    id: 'music-room',
    category: 'arts',
    title: 'Music and performance practice',
    caption: 'Creative spaces where expression, rhythm, and confidence grow together.',
    size: 'gallery-card--square',
    tone: 'gallery-card--music',
  },
  {
    id: 'achievements1',
    category: 'achievements',
    title: 'Recognition and award moments',
    caption: 'Celebrating effort, excellence, and student achievement across disciplines.',
    size: 'gallery-card--tall',
    tone: 'gallery-card--award',
  },
  {
    id: 'achievements2',
    category: 'achievements',
    title: 'Recognition and award moments',
    caption: 'Celebrating effort, excellence, and student achievement across disciplines.',
    size: 'gallery-card--tall',
    tone: 'gallery-card--award',
  },
  {
    id: 'achievements3',
    category: 'achievements',
    title: 'Recognition and award moments',
    caption: 'Celebrating effort, excellence, and student achievement across disciplines.',
    size: 'gallery-card--tall',
    tone: 'gallery-card--award',
  },
  {
    id: 'achievements4',
    category: 'achievements',
    title: 'Recognition and award moments',
    caption: 'Celebrating effort, excellence, and student achievement across disciplines.',
    size: 'gallery-card--tall',
    tone: 'gallery-card--award',
  },

  // {
  //   id: 'art-wall',
  //   category: 'arts',
  //   title: 'Student artwork on display',
  //   caption: 'Corridor exhibits that turn everyday spaces into living creative galleries.',
  //   size: 'gallery-card--square',
  //   tone: 'gallery-card--art',
  // },
  {
    id: 'green-court',
    category: 'campus',
    title: 'Open courtyards and community spaces',
    caption: 'Landscape pockets that make the campus feel breathable and student-friendly.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--garden',
  },
  {
    id: 'classroom-discussion',
    category: 'academics',
    title: 'Interactive classroom learning',
    caption: 'Teacher-led discussion and collaborative learning across grade levels.',
    size: 'gallery-card--square',
    tone: 'gallery-card--classroom',
  },
  {
    id: 'annual-function',
    category: 'events',
    title: 'Annual function stage moments',
    caption: 'Performance, celebration, and shared memories that define school life.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--stage',
  },
  {
    id: 'team-huddle',
    category: 'sports',
    title: 'Team huddle before the game',
    caption: 'Preparation, motivation, and belonging built through sport.',
    size: 'gallery-card--square',
    tone: 'gallery-card--team',
  },
  {
    id: 'sports1',
    category: 'sports',
    title: 'Sports day in motion',
    caption: 'House spirit, teamwork, and movement-driven confidence on the field.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--field',
  },
  {
    id: 'sports2',
    category: 'sports',
    title: 'Sports day in motion',
    caption: 'House spirit, teamwork, and movement-driven confidence on the field.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--field',
  },
  {
    id: 'sports3',
    category: 'sports',
    title: 'Sports day in motion',
    caption: 'House spirit, teamwork, and movement-driven confidence on the field.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--field',
  },
  {
    id: 'sports4',
    category: 'sports',
    title: 'Sports day in motion',
    caption: 'House spirit, teamwork, and movement-driven confidence on the field.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--field',
  },
  {
    id: 'sports5',
    category: 'sports',
    title: 'Sports day in motion',
    caption: 'House spirit, teamwork, and movement-driven confidence on the field.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--field',
  },
  {
    id: 'sports6',
    category: 'sports',
    title: 'Sports day in motion',
    caption: 'House spirit, teamwork, and movement-driven confidence on the field.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--field',
  },
  {
    id: 'sports7',
    category: 'sports',
    title: 'Sports day in motion',
    caption: 'House spirit, teamwork, and movement-driven confidence on the field.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--field',
  },
  {
    id: 'sports8',
    category: 'sports',
    title: 'Sports day in motion',
    caption: 'House spirit, teamwork, and movement-driven confidence on the field.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--field',
  },
  {
    id: 'sports9',
    category: 'sports',
    title: 'Sports day in motion',
    caption: 'House spirit, teamwork, and movement-driven confidence on the field.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--field',
  },
  {
    id: 'campus-entrance',
    category: 'infrastructure',
    title: 'Main Campus Entrance',
    caption:
      'Welcoming entrance designed with modern architecture, accessibility, and enhanced safety features. CCTV-enabled campus ensuring a secure and safe environment for students and staff',
    size: 'gallery-card--square',
    tone: 'gallery-card--stone',
  },

  {
    id: 'lab-facility',
    category: 'infrastructure',
    title: 'Advanced Lab Facility',
    caption:
      'Well-equipped laboratories supporting practical and experimental learning.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--lab',
  },
  {
    id: 'lab-room',
    category: 'infrastructure',
    title: 'Science Practical Room',
    caption:
      'Dedicated practical learning spaces for student experiments and activities.',
    size: 'gallery-card--square',
    tone: 'gallery-card--lab',
  },
  {
    id: 'lab-advanced',
    category: 'infrastructure',
    title: 'Modern Research Lab',
    caption:
      'Fully equipped Science Laboratory to promote practical learning and experimentation.',
    size: 'gallery-card--tall',
    tone: 'gallery-card--tech',
  },
  {
    id: 'science-lab-infra',
    category: 'infrastructure',
    title: 'Modern Science Laboratory',
    caption:
      'Fully equipped Science Laboratory to promote practical learning and experimentation.',
    size: 'gallery-card--tall',
    tone: 'gallery-card--lab',
  },
  {
    id: 'computer-lab',
    category: 'infrastructure',
    title: 'Modern Computer Laboratory',
    caption:
      'Modern Computer Laboratory with updated systems and internet facilities.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--tech',
  },
  {
    id: 'school-transport',
    category: 'infrastructure',
    title: 'Safe Transport Fleet',
    caption:
      'Our GPS-enabled buses ensure a safe and comfortable commute for every student.',
    size: 'gallery-card--square',
    tone: 'gallery-card--bus',
  },
  {
    id: 'playground',
    category: 'infrastructure',
    title: 'Student Playground',
    caption:
      'Spacious Playground for outdoor games and physical activities.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--field',
  },
  {
    id: 'sports-stadium',
    category: 'infrastructure',
    title: 'Sports Stadium',
    caption:
      'Indoor and Outdoor Volleyball Courts and a dedicated Sports Stadium.',
    size: 'gallery-card--wide',
    tone: 'gallery-card--team',
  },
  {
    id: 'dance-studio',
    category: 'infrastructure',
    title: 'Dance & Activity Studio',
    caption:
      'State-of-the-art Dance Studio for creative expression and performing arts.',
    size: 'gallery-card--square',
    tone: 'gallery-card--music',
  },
  {
    id: 'yoga-activity',
    category: 'infrastructure',
    title: 'Yoga Activity Hall',
    caption:
      'Yoga Centre to promote physical, mental, and emotional well-being.',
    size: 'gallery-card--square',
    tone: 'gallery-card--garden',
  },
  {
    id: 'karate-activity',
    category: 'infrastructure',
    title: 'Karate Training Sessions',
    caption:
      'Karate Hall for self-discipline, fitness, and self-defense training.',
    size: 'gallery-card--square',
    tone: 'gallery-card--team',
  },
  {
    id: 'auditorium',
    category: 'infrastructure',
    title: 'Music and performance practice',
    caption: 'Creative spaces where expression, rhythm, and confidence grow together.',
    size: 'gallery-card--square',
    tone: 'gallery-card--music',
  },

  {
    id: 'library',
    category: 'infrastructure',
    title: 'Library Collections',
    caption: 'Well-stocked and regularly updated Library to encourage reading and research habits.',
    size: 'gallery-card--square',
    tone: 'gallery-card--library',
  },
  {
    id: 'culture1',
    category: 'arts',
    title: 'Cultural Events',
    caption: 'Corridor exhibits that turn everyday spaces into living creative galleries.',
    size: 'gallery-card--square',
    tone: 'gallery-card--culture',
  },
  {
    id: 'culture2',
    category: 'arts',
    title: 'Cultural Events',
    caption: 'Corridor exhibits that turn everyday spaces into living creative galleries.',
    size: 'gallery-card--square',
    tone: 'gallery-card--culture',
  },
  {
    id: 'culture3',
    category: 'arts',
    title: 'Cultural Events',
    caption: 'Corridor exhibits that turn everyday spaces into living creative galleries.',
    size: 'gallery-card--square',
    tone: 'gallery-card--culture',
  },
  {
    id: 'culture4',
    category: 'arts',
    title: 'Cultural Events',
    caption: 'Cultural events held at DAV Public School.',
    size: 'gallery-card--square',
    tone: 'gallery-card--culture',
  },
  {
    id: 'culture5',
    category: 'arts',
    title: 'Cultural Events',
    caption: 'Cultural events held at DAV Public School.',
    size: 'gallery-card--square',
    tone: 'gallery-card--culture',
  },
  {
    id: 'culture6',
    category: 'arts',
    title: 'Cultural Events',
    caption: 'Cultural events held at DAV Public School.',
    size: 'gallery-card--square',
    tone: 'gallery-card--culture',
  },
  {
    id: 'culture7',
    category: 'arts',
    title: 'Cultural Events',
    caption: 'Cultural events held at DAV Public School.',
    size: 'gallery-card--square',
    tone: 'gallery-card--culture',
  },
]




export const facultyDepartments = [
  {
    id: 'all',
    label: 'All'
  },
  {
    id: 'science',
    label: 'Science'
  },
  {
    id: 'mathematics',
    label: 'Mathematics'
  },
  {
    id: 'languages',
    label: 'Languages'
  },
  {
    id: 'sports',
    label: 'Sports'
  }
]

export const facultyMembers = [
  {
    id: 1,
    name: 'Dr. Anjali Sharma',
    designation: 'Head of Science Department',
    department: 'science',
    bio: 'Experienced educator focused on practical STEM learning.'
  },

  {
    id: 2,
    name: 'Mr. Ravi Kumar',
    designation: 'Senior Mathematics Teacher',
    department: 'mathematics',
    bio: 'Passionate about analytical thinking and problem solving.'
  },

  {
    id: 3,
    name: 'Ms. Priya Nair',
    designation: 'English Faculty',
    department: 'languages',
    bio: 'Encourages communication, creativity, and reading culture.'
  },

  {
    id: 4,
    name: 'Coach Arjun',
    designation: 'Physical Education Trainer',
    department: 'sports',
    bio: 'Builds discipline, teamwork, and physical confidence.'
  }
]