import { Activity } from '../types';
import { IMAGES } from './images';

export const ACTIVITIES_DATA: Activity[] = [
  {
    id: 'sports',
    title: 'Sports',
    category: 'Athletics & Physical Fitness',
    image: IMAGES.sportsPerformance,
    description: 'Building teamwork, stamina, confidence, leadership, and healthy lifestyle through engaging sports activities.',
    highlights: [
      'Cricket, Football, Badminton, and Table Tennis coaching',
      'Annual Sports Day with athletic track events and trophy ceremonies',
      'Daily morning physical exercise (PT) and fitness drills',
      'Focus on sportsmanship, healthy competition, and resilience'
    ]
  },
  {
    id: 'green-field',
    title: 'Green Field Event',
    category: 'Outdoor & Assemblies',
    image: IMAGES.secondaryAssembly,
    description: 'Nurturing discipline, togetherness, morning assemblies, open-air presentations, and community events on spacious lush grounds.',
    highlights: [
      'Daily structured morning assemblies with Quranic recitation, thought of the day, and national anthem',
      'Outdoor science experiments and botanical exploration',
      'Open-air thematic exhibitions and student project displays',
      'Inter-house marching parades and discipline ceremonies'
    ]
  },
  {
    id: 'ethics-leadership',
    title: 'Ethics & Leadership',
    category: 'Character & Public Speaking',
    image: IMAGES.appreciationAward,
    description: 'Inspiring moral values, responsibility, communication, and leadership skills.',
    highlights: [
      'Student Prefectorial Board and House Captain leadership roles',
      'Bilingual debate clubs (English & Urdu declamation competitions)',
      'Character-building workshops emphasizing honesty, respect, and kindness',
      'Community service initiatives and environmental cleanliness drives'
    ]
  },
  {
    id: 'arts-creativity',
    title: 'Arts & Creativity',
    category: 'Expression & Innovation',
    image: IMAGES.campusActivities,
    description: 'Encouraging artistic expression, drama, model making, science exhibitions, and imaginative innovation.',
    highlights: [
      'Painting, calligraphy, sketching, and paper-mache craft studios',
      'Annual science model and innovation exhibition fairs',
      'Stage dramas, thematic skits, and character role-plays',
      'National Day celebrations with cultural costume presentations'
    ]
  }
];

export const EXTRA_ACTIVITIES_LIST = [
  {
    title: 'Science & Robotics Club',
    description: 'Hands-on experimentation, circuit building, and practical discovery of STEM fundamentals.',
    icon: 'FlaskConical'
  },
  {
    title: 'Debate & Public Speaking Society',
    description: 'Refining rhetorical skills, argumentation, voice modulation, and stage presence.',
    icon: 'Mic'
  },
  {
    title: 'Islamic Values & Qirat Circle',
    description: 'Tajweed practice, memorization of daily duas, Seerat-un-Nabi seminars, and ethics.',
    icon: 'BookOpen'
  },
  {
    title: 'Visual Arts & Calligraphy Guild',
    description: 'Mastering Arabic and English calligraphy, water coloring, acrylics, and canvas art.',
    icon: 'Palette'
  },
  {
    title: 'Eco & Gardening Club',
    description: 'Promoting campus greening, botanical gardening, tree planting, and recycling awareness.',
    icon: 'Leaf'
  },
  {
    title: 'Digital IT & Coding Lab',
    description: 'Introductory coding, graphic design basics, presentation skills, and safe digital citizenship.',
    icon: 'Laptop'
  }
];
