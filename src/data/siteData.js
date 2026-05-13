export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'documents', label: 'Documents' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'faculty-staff', label: 'Faculty' },
  { id: 'about-us', label: 'About Us' },
  { id: 'contact-us', label: 'Contact Us' }
]

export const achievements = [
  {
    value: '#1',
    title: 'Ranked top day school in the district',
    detail: 'Consistent board results, co-curricular depth, and strong parent trust.',
  },
  { value: '98%', title: 'Board success rate' },
  { value: '45+', title: 'Inter-school awards' },
  { value: '12:1', title: 'Student mentor ratio' },
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
  { name: 'Dr. Rajiv Mehta', role: 'Chairman', tone: 'leader-card--navy' },
  { name: 'Ms. Aditi Sharma', role: 'Principal', tone: 'leader-card--amber' },
  { name: 'Mr. Vivek Suri', role: 'Vice Principal', tone: 'leader-card--slate' },
]

export const repositoryDocuments = [
  {
    tag: 'Legal & Statutory',
    title: 'Affiliation Letter (CBSE)',
    meta: 'Last updated: March 2024',
    size: 'File size: 1.2 MB',
  },
  {
    tag: 'Organization',
    title: 'Trust/Society Registration Certificate',
    meta: 'Valid until: Dec 2028',
    size: 'File size: 850 KB',
  },
  {
    tag: 'Government Approvals',
    title: 'NOC (No Objection Certificate)',
    meta: 'Issued by State Education Dept',
    size: 'File size: 1.1 MB',
  },
  {
    tag: 'Safety & Compliance',
    title: 'Building Safety Certificate',
    meta: 'Renewed for session 2024-25',
    size: 'File size: 940 KB',
  },
]

export const repositorySafety = [
  {
    title: 'Fire Safety Certificate',
    description:
      'Official clearance from the local fire department regarding onsite prevention and response infrastructure.',
    status: 'Expires Jan 2025',
  },
  {
    title: 'Water & Sanitation',
    description:
      'Laboratory test reports for potable water quality and certified health hygiene audit results.',
    status: 'Audited Q4 2023',
  },
]

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
  { grade: 'Nursery', min: '3+', max: '4+' },
  { grade: 'KG', min: '4+', max: '5+' },
  { grade: 'Prep', min: '5+', max: '6+' },
  { grade: 'Grade I', min: '6+', max: '7+' },
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

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'campus', label: 'Campus' },
  { id: 'academics', label: 'Academics' },
  { id: 'events', label: 'Events' },
  { id: 'sports', label: 'Sports' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'arts', label: 'Arts & Culture' },
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
    id: 'prize-ceremony',
    category: 'achievements',
    title: 'Recognition and award moments',
    caption: 'Celebrating effort, excellence, and student achievement across disciplines.',
    size: 'gallery-card--tall',
    tone: 'gallery-card--award',
  },
  {
    id: 'art-wall',
    category: 'arts',
    title: 'Student artwork on display',
    caption: 'Corridor exhibits that turn everyday spaces into living creative galleries.',
    size: 'gallery-card--square',
    tone: 'gallery-card--art',
  },
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