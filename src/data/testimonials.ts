import { Testimonial } from '../types';
import { IMAGES } from './images';

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: 'The level of care, quality of teaching and supportive environment offers my child a confident and motivated start to their education.',
    parentName: 'Mrs. Ayesha Khan',
    studentInfo: 'Parent of Grade 5 Student',
    avatar: IMAGES.ayeshaKhan,
    rating: 5
  },
  {
    id: 't2',
    quote: 'We appreciate the emphasis given to both academic learning and character development. Our child has grown so much in communication, responsibility, and moral values.',
    parentName: 'Mr. Ali Hassan',
    studentInfo: 'Parent of Grade 7 Student',
    avatar: IMAGES.aliHassan,
    rating: 5
  },
  {
    id: 't3',
    quote: 'The teachers are dedicated and supportive, and the school provides students with many opportunities to develop discipline and strong ethical principles. We are so happy with our choice!',
    parentName: 'Mrs. Sana Sajid',
    studentInfo: 'Parent of Grade 3 Student',
    avatar: IMAGES.sanaIqbal,
    rating: 5
  },
  {
    id: 't4',
    quote: 'From early Montessori years to Secondary board preparations, Revival School has given my son unmatched conceptual clarity and confidence to excel on every platform.',
    parentName: 'Dr. Tariq Mehmood',
    studentInfo: 'Parent of Matric High Achiever',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5
  }
];

export const KEY_METRICS = [
  { label: 'Qualified Faculty Members', value: '50+' },
  { label: 'Happy Enrolled Students', value: '1,000+' },
  { label: 'Matric Board A+ Results', value: '98%' },
  { label: 'Campus Acres & Grounds', value: '3.5+' },
];
