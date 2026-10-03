import { GalleryItem } from '../types';
import { IMAGES } from './images';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'young-learners',
    title: 'Young Learners',
    category: 'academics',
    image: IMAGES.earlyYearsReading,
    description: 'Foundational literacy and book discovery under gentle guidance on the school lawn.'
  },
  {
    id: 'creative-learning',
    title: 'Creative Learning',
    category: 'activities',
    image: IMAGES.creativeHands,
    description: 'Hands-on collaborative learning activities and educational flashcard games.'
  },
  {
    id: 'teamwork-fun',
    title: 'Teamwork & Fun',
    category: 'activities',
    image: IMAGES.teamworkLawn,
    description: 'Cooperative group reading, sharing insights, and building lasting friendships.'
  },
  {
    id: 'school-celebration',
    title: 'School Celebration',
    category: 'celebrations',
    image: IMAGES.montessoriChairs,
    description: 'Vibrant early childhood classroom celebration with playful props and joyful themes.'
  },
  {
    id: 'classroom-activities',
    title: 'Classroom Activities',
    category: 'academics',
    image: IMAGES.middleLab,
    description: 'Interactive STEM and computer lab explorations under supportive teacher mentorship.'
  },
  {
    id: 'campus-activities',
    title: 'Campus Activities',
    category: 'activities',
    image: IMAGES.campusActivities,
    description: 'Engaging outdoor stage performances, character skits, and co-curricular programs.'
  },
  {
    id: 'special-events-adventures',
    title: 'Special Events',
    category: 'events',
    image: IMAGES.stageAdventureSquad,
    description: 'Prince Adventure Squad celebration and stage event encouraging active bravery and fun.'
  },
  {
    id: 'student-participation',
    title: 'Student Participation',
    category: 'celebrations',
    image: IMAGES.pakistanCelebration,
    description: 'Inspiring national unity and joyful participation during national day flag ceremonies.'
  },
  {
    id: 'creative-expression',
    title: 'Creative Expression',
    category: 'activities',
    image: IMAGES.creativeFlagsGirls,
    description: 'Students displaying their handcrafted artwork, badges, and national celebration crafts.'
  },
  {
    id: 'learning-through-play',
    title: 'Learning Through Play',
    category: 'academics',
    image: IMAGES.learningThroughPlay,
    description: 'Active phonics and number recognition games stimulating rapid cognitive retention.'
  },
  {
    id: 'school-environment',
    title: 'School Environment',
    category: 'campus',
    image: IMAGES.welcomeHallway,
    description: 'Welcoming floral petal entrance path celebrating students during orientation days.'
  },
  {
    id: 'results-gathering',
    title: 'Results Gathering',
    category: 'events',
    image: IMAGES.resultsGrandHall,
    description: 'Annual Academic Convocation and distinction ceremonies attended by families in grand hall.'
  },
  {
    id: 'teachers-gathering',
    title: 'Teachers Gathering',
    category: 'campus',
    image: IMAGES.teachersMeeting,
    description: 'Continuous pedagogical training and faculty professional development sessions.'
  },
  {
    id: 'appreciation-award',
    title: 'Appreciation Award',
    category: 'events',
    image: IMAGES.appreciationAward,
    description: 'Recognizing outstanding dedication, teaching excellence, and leadership achievements.'
  },
  {
    id: 'principal-conference',
    title: 'Get-together with Principal',
    category: 'campus',
    image: IMAGES.principalDesk,
    description: 'Administrative leadership conference and strategic planning for student advancement.'
  },
  {
    id: 'morning-assembly',
    title: 'Grand Morning Assembly',
    category: 'campus',
    image: IMAGES.assemblyPanorama,
    description: 'Unified whole-school morning gathering cultivating spiritual reflection and discipline.'
  }
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Moments' },
  { id: 'activities', label: 'Activities' },
  { id: 'events', label: 'Events' },
  { id: 'academics', label: 'Academics' },
  { id: 'celebrations', label: 'Celebrations' },
  { id: 'campus', label: 'Campus Life' },
];
