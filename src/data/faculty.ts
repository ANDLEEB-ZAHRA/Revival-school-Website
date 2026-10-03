import { FacultyMember } from '../types';
import { IMAGES } from './images';

export const FACULTY_DATA: FacultyMember[] = [
  {
    id: 'principal',
    name: 'Mrs. Tahira Yasmeen',
    role: 'Principal & Head of Academics',
    department: 'School Leadership',
    qualification: 'M.Phil Educational Leadership & Management, M.A English',
    experience: '22+ Years in Educational Administration',
    bio: 'Dedicated to fostering an inclusive, high-standard learning culture grounded in moral integrity and modern pedagogical best practices.',
    image: IMAGES.principalDesk
  },
  {
    id: 'head-secondary',
    name: 'Mr. Muhammad Rizwan',
    role: 'Head of Secondary Section & Senior Science Lead',
    department: 'Secondary Sciences (Physics & Chemistry)',
    qualification: 'M.Sc Physics, B.Ed',
    experience: '16+ Years Experience in Board Curriculum',
    bio: 'Renowned for conceptual physics teaching and mentoring numerous BISE Gujrat board position holders.',
    image: IMAGES.appreciationAward
  },
  {
    id: 'head-primary',
    name: 'Mrs. Shabana Parveen',
    role: 'Primary Section Coordinator',
    department: 'Primary English & Mathematics',
    qualification: 'M.A English, M.Ed',
    experience: '14+ Years in Primary Education',
    bio: 'Specialist in early literacy phonics instruction and interactive student engagement methodologies.',
    image: IMAGES.teachersMeeting
  },
  {
    id: 'montessori-director',
    name: 'Ms. Hina Fatima',
    role: 'Early Childhood & Montessori Lead',
    department: 'Montessori & Early Years',
    qualification: 'Certified International Montessori Diploma, B.A Psychology',
    experience: '10+ Years in Early Childhood Development',
    bio: 'Passionate about sensory learning environments and child-centered discovery.',
    image: IMAGES.earlyYearsReading
  }
];
