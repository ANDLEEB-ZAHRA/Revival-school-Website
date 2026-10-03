import { SchoolEvent } from '../types';
import { IMAGES } from './images';

export const SCHOOL_EVENTS: SchoolEvent[] = [
  {
    id: 'annual-convocation',
    title: 'Annual Academic Prize Distribution & Convocation',
    date: 'March 28, 2026',
    time: '10:00 AM - 1:30 PM',
    category: 'Academic Honor',
    image: IMAGES.resultsGrandHall,
    location: 'Main Auditorium, Revival Campus',
    description: 'Celebrating high achievers, top position holders in BISE Board exams, and exemplary student conduct with parents and esteemed guests.'
  },
  {
    id: 'sports-gala',
    title: 'Annual Revival Sports Gala & Field Olympics',
    date: 'April 15, 2026',
    time: '8:30 AM - 3:00 PM',
    category: 'Athletics',
    image: IMAGES.sportsPerformance,
    location: 'Revival Sports Grounds, Gujrat',
    description: 'An exciting full-day competition between school houses featuring track events, football finals, gymnastics demonstrations, and march-past.'
  },
  {
    id: 'science-art-exhibition',
    title: 'STEM Innovation & Fine Arts Exhibition',
    date: 'May 10, 2026',
    time: '9:00 AM - 2:00 PM',
    category: 'Innovation & Art',
    image: IMAGES.middleLab,
    location: 'Science Complex & Art Gallery',
    description: 'Showcasing working science models, robotics experiments, digital programming projects, and student art installations.'
  },
  {
    id: 'independence-day',
    title: 'Pakistan National Day & Cultural Assembly',
    date: 'August 14, 2026',
    time: '8:00 AM - 12:00 PM',
    category: 'National Heritage',
    image: IMAGES.pakistanCelebration,
    location: 'Revival Assembly Grounds',
    description: 'Flag hoisting ceremony, national songs choir, historical tableaux, and speeches honoring the heroes of our beloved nation.'
  },
  {
    id: 'parent-teacher-conference',
    title: 'Term-End Parent-Teacher Consultative Conference',
    date: 'October 24, 2026',
    time: '8:30 AM - 2:00 PM',
    category: 'Parent Relations',
    image: IMAGES.teachersMeeting,
    location: 'Respective Campuses',
    description: 'One-on-one progress discussions between parents and faculty members with report card distribution and academic counseling.'
  }
];
