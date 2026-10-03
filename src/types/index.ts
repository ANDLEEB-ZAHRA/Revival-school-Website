export interface NavItem {
  name: string;
  href: string;
  children?: {
    name: string;
    href: string;
    description?: string;
  }[];
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  ageRange: string;
  grades: string;
  image: string;
  shortDesc: string;
  description: string;
  curriculum: string[];
  keyOutcomes: string[];
  features: string[];
  badgeText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'activities' | 'events' | 'academics' | 'celebrations' | 'campus';
  image: string;
  description: string;
  date?: string;
}

export interface Activity {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
  icon?: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
  location: string;
  time?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  parentName: string;
  studentInfo: string;
  avatar: string;
  rating: number;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  department: string;
  qualification: string;
  experience: string;
  bio: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'admissions' | 'academics' | 'facilities' | 'general';
}

export interface AdmissionFormData {
  studentName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other' | '';
  applyingGrade: string;
  campusPreference: 'boys' | 'girls' | 'either';
  parentName: string;
  relationship: string;
  phone: string;
  email: string;
  address: string;
  previousSchool: string;
  message: string;
  agreeToTerms: boolean;
}
