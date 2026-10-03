import { NavItem } from '../types';

export const NAVIGATION_LINKS: NavItem[] = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    children: [
      { name: 'Our Story & Heritage', href: '/about', description: 'Our history and educational foundation' },
      { name: 'Leadership & Faculty', href: '/teachers', description: 'Meet our experienced academic leaders' },
    ]
  },
  { 
    name: 'Academics', 
    href: '/academics',
    children: [
      { name: 'Academic Overview', href: '/academics', description: 'Pedagogy, approach and learning system' },
      { name: 'Early Years / Montessori', href: '/montessori', description: 'Playful foundation & sensory discovery' },
      { name: 'Primary School (Grades 1-5)', href: '/programs#primary', description: 'Core knowledge, confidence & skills' },
      { name: 'Middle School (Grades 6-8)', href: '/programs#middle', description: 'Critical thinking & scientific inquiry' },
      { name: 'Secondary School (Matric/FBISE)', href: '/programs#secondary', description: 'Board examination rigor & streams' },
    ]
  },
  { 
    name: 'Activities', 
    href: '/activities',
    children: [
      { name: 'Co-Curriculars & Sports', href: '/activities', description: 'Athletics, tournaments & health' },
      { name: 'Upcoming Events', href: '/events', description: 'School calendar, sports day & celebrations' },
    ]
  },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Contact', href: '/contact' },
];

export const CAMPUS_INFO = {
  name: 'Revival School Gujrat',
  system: 'Revival Education System',
  motto: 'Inspiring Learning, Building Futures',
  tagline: 'Education | Character | A Brighter Future',
  phone: '+92 300 6222449',
  phoneAlt: '+92 333 8400000',
  email: 'info@revivalschool.edu.pk',
  admissionsEmail: 'admissions@revivalschool.edu.pk',
  address: 'Grand Trunk Road near Gorali, Gujrat, Punjab, Pakistan',
  officeHours: 'Monday – Saturday, 8:00 am – 2:00 pm',
  campuses: [
    {
      name: 'Boys Campus',
      address: 'Grand Trunk Road, Gujrat',
      grades: 'Grades 5 to 10 (Secondary)',
      contact: '+92 300 6222449'
    },
    {
      name: 'Girls Campus',
      address: 'Campus Enclave, GT Road, Gujrat',
      grades: 'Montessori to Grade 10',
      contact: '+92 300 6222449'
    }
  ]
};
