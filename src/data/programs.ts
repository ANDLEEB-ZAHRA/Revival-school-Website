import { Program } from '../types';
import { IMAGES } from './images';

export const ACADEMIC_PROGRAMS: Program[] = [
  {
    id: 'early-years',
    title: 'Early Years',
    subtitle: 'Nurturing curiosity, sensory development, and foundational joy',
    ageRange: '3 - 5 Years',
    grades: 'Playgroup, Nursery, Kindergarten',
    image: IMAGES.earlyYearsReading,
    shortDesc: 'Building strong foundations through playful learning, basic literacy, numeracy, and social discovery.',
    description: 'Our Early Years curriculum is grounded in proven child-development pedagogy. We create a joyful, safe, and sensory-rich environment where toddlers and young children explore letters, numbers, colors, and the wonders of the physical world through guided play and hands-on materials.',
    badgeText: 'Foundation Stage',
    curriculum: [
      'Phonics & Early English Literacy',
      'Numeracy & Practical Math Concepts',
      'Motor Skills & Sensory Exploration',
      'Islamic Manners & Moral Stories',
      'Creative Art, Music & Movement',
      'Expressive Language & Storytelling'
    ],
    keyOutcomes: [
      'Confidence in verbal communication and self-expression',
      'Early phonics decoding and basic numeracy grasp',
      'Fine and gross motor coordination through playful activity',
      'Sharing, empathy, and social classroom etiquette'
    ],
    features: [
      'Montessori-inspired child-centered learning zones',
      'Dedicated indoor activity & play area',
      'Low student-to-teacher ratio for individualized care',
      'CCTV monitored, safe and hygienic environment'
    ]
  },
  {
    id: 'primary',
    title: 'Primary',
    subtitle: 'Core subject mastery, linguistic fluency, and active inquiry',
    ageRange: '5 - 10 Years',
    grades: 'Grades 1 to 5',
    image: IMAGES.primaryCards,
    shortDesc: 'Core subjects development, active communication, interactive lessons, and character habits in early years.',
    description: 'The Primary School years mark an essential cognitive shift from informal discovery to structured inquiry. Students develop strong academic fluency in languages, mathematics, general sciences, and social studies while cultivating discipline, respect, and collaborative skills.',
    badgeText: 'Grades 1 - 5',
    curriculum: [
      'English Language & Literature Fluency',
      'Urdu Language, Grammar & Comprehension',
      'Mathematics (Conceptual & Practical Problem Solving)',
      'General Science & Nature Discovery',
      'Social Studies & Geography Basics',
      'Computer & Information Literacy',
      'Islamiyat & Moral Character Building'
    ],
    keyOutcomes: [
      'Fluent reading, analytical writing, and clear verbal presentation',
      'Solid arithmetic computation and logical problem-solving',
      'Scientific curiosity supported by interactive demonstration',
      'Strong Islamic values, kindness, and personal responsibility'
    ],
    features: [
      'Interactive smart classroom tools & multimedia',
      'Weekly library reading & vocabulary enrichment periods',
      'Science discovery corners and practical observation kits',
      'Regular continuous assessments and parent feedback loops'
    ]
  },
  {
    id: 'middle',
    title: 'Middle',
    subtitle: 'Critical thinking, advanced sciences, and analytical maturity',
    ageRange: '10 - 13 Years',
    grades: 'Grades 6 to 8',
    image: IMAGES.middleLab,
    shortDesc: 'Broadening knowledge, critical thinking, exploratory science, and computer education.',
    description: 'Middle School bridges elementary concepts and formal board syllabi. We emphasize higher-order thinking skills, experimental inquiry in modern science labs, computer programming literacy, and active debate to cultivate independent, confident learners.',
    badgeText: 'Grades 6 - 8',
    curriculum: [
      'Advanced English (Grammar, Composition, Essay Writing)',
      'Urdu (Literature, Creative Writing & Analysis)',
      'Mathematics (Algebra, Geometry, Data Analysis)',
      'Integrated Science (Physics, Chemistry & Biology Fundamentals)',
      'Computer Science & Basic Coding',
      'Pakistan Studies & World History',
      'Quranic Studies with Translation & Ethics'
    ],
    keyOutcomes: [
      'Ability to formulate hypotheses, analyze data, and summarize findings',
      'Preparedness for rigorous secondary curriculum and board standards',
      'Digital literacy, office tools, and introductory coding concepts',
      'Leadership, team collaboration, and ethical decision-making'
    ],
    features: [
      'Fully equipped Physics, Chemistry, and Biology laboratories',
      'High-speed networked Computer & Robotics Lab',
      'Inter-house academic quizzes, speeches, and science fairs',
      'Structured academic counseling and career orientation'
    ]
  },
  {
    id: 'secondary',
    title: 'Secondary',
    subtitle: 'Board examination excellence and pre-college readiness',
    ageRange: '13 - 16 Years',
    grades: 'Grades 9 & 10 (Matriculation)',
    image: IMAGES.secondaryAssembly,
    shortDesc: 'Rigorous academic preparation for Board examinations with focus on Science and Arts streams.',
    description: 'Our Secondary School prepares students for top-tier results in the Board of Intermediate & Secondary Education (BISE) examinations. Through rigorous testing series, past-paper workshops, individual mentoring, and practical lab work, our students achieve distinguished academic standing.',
    badgeText: 'Matriculation / Board',
    curriculum: [
      'Science Group: Physics, Chemistry, Biology / Computer Science',
      'Humanities / Arts Group: General Science, Civics, Economics',
      'Compulsory Subjects: English Compulsory, Urdu, Pak Studies, Islamiyat',
      'Mathematics (Science & General Streams)',
      'Extensive Board Practical Exam Preparation'
    ],
    keyOutcomes: [
      'Distinction and A+ grades in BISE Board Examinations',
      'Flawless practical lab performance in Science experiments',
      'High readiness for Pre-Medical, Pre-Engineering & ICS intermediate streams',
      'Strong moral character, leadership capability, and civic mindfulness'
    ],
    features: [
      'Dedicated Board exam revision camps & mock test series',
      'One-on-one remediation sessions for conceptual reinforcement',
      'Specialized subject-matter expert faculty members',
      'Proven track record of high matriculation board scores'
    ]
  },
  {
    id: 'activities-program',
    title: 'Activities',
    subtitle: 'Holistic personality development through co-curriculars',
    ageRange: 'All Grades',
    grades: 'All School Levels',
    image: IMAGES.stageAdventureSquad,
    shortDesc: 'Comprehensive co-curricular activities, personality building, sports, and value education.',
    description: 'At Revival School Gujrat, character is forged both inside and outside the classroom. Our vibrant co-curricular program spans competitive sports, public speaking, dramatic performances, community service, and cultural celebrations.',
    badgeText: 'Co-Curriculars',
    curriculum: [
      'Inter-School & Inter-House Sports Tournaments',
      'Bilingual Debates, Declamation & Qirat Contests',
      'Annual Dramatic Performances & Cultural Assemblies',
      'Science & Art Exhibition Showcases',
      'Community Outreach, Tree Plantation & Social Service'
    ],
    keyOutcomes: [
      'Physical agility, resilience, teamwork, and sportsmanship',
      'Confident public speaking and stage presence in front of large audiences',
      'Appreciation of national cultural heritage and ethical responsibility',
      'Well-rounded, cheerful personality poised for global citizenship'
    ],
    features: [
      'Spacious outdoor grass grounds & sports courts',
      'Annual Sports Gala with athletics, cricket, and football',
      'Active Student Council and House Leadership System',
      'Regular educational field trips and adventure tours'
    ]
  }
];
