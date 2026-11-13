import heroClassroomImg from '../assets/images/hero_preschool_classroom_1794565056740.jpg';
import aboutLearningImg from '../assets/images/about_kidzee_learning_1794565056015.jpg';
import playgroupCareImg from '../assets/images/programme_playgroup_care_1794565057246.jpg';
import kindergartenClassroomImg from '../assets/images/programme_kindergarten_classroom_1794565057418.jpg';
import teacherTrainingImg from '../assets/images/programme_teacher_training_1794565058024.jpg';
import artCraftImg from '../assets/images/gallery_art_craft_1794565059178.jpg';

export const SCHOOL_INFO = {
  name: 'Kidzee Rangia',
  shortTag: 'Dharampur, Rangia · Early Childhood Education',
  address: 'Near Society Chowk, Dharampur, Rangia, Assam 781354',
  phoneDisplay: '+91 98596 46926',
  phoneHref: 'tel:+919859646926',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Kidzee+Rangia+Near+Society+Chowk+Dharampur+Rangia+Assam+781354',
  hours: 'Monday – Saturday · 8:30 AM – 3:00 PM',
  googleRating: '4.7',
  totalReviews: 65,
};

export const HERO_MEDIA = {
  image: heroClassroomImg,
  alt: 'Teacher sitting with happy preschool children playing with wooden blocks and picture books at Kidzee Rangia',
};

export const ABOUT_MEDIA = {
  image: aboutLearningImg,
  alt: 'Early childhood educator guiding young preschoolers with wooden Montessori puzzles in a sunlit classroom',
};

export interface ProgrammeItem {
  id: string;
  title: string;
  category: 'early-years' | 'care-training';
  meta: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  accentHex: string;
  surfaceTint: string;
  image: string;
  imageAlt: string;
}

export const PROGRAMMES: ProgrammeItem[] = [
  {
    id: 'playgroup',
    title: 'Playgroup',
    category: 'early-years',
    meta: '2 – 3 Years · Sensory & Social Discovery',
    shortDescription:
      'A gentle first step outside home where toddlers explore textures, rhythm, movement, and joyful group routines.',
    fullDescription:
      'Our Playgroup programme helps toddlers transition comfortably into a warm classroom community. Guided by nurturing teachers, children build early language, fine motor coordination, and emotional confidence through guided play.',
    highlights: [
      'Sensory play stations and tactile Montessori materials',
      'Music, movement, and guided story circles',
      'Early sharing habits and comfortable social routines',
    ],
    accentHex: '#F9B233',
    surfaceTint: '#FFFBF0',
    image: playgroupCareImg,
    imageAlt: 'Toddlers sitting on a soft colorful play mat exploring wooden stacking rings and cloth toys',
  },
  {
    id: 'nursery',
    title: 'Nursery',
    category: 'early-years',
    meta: '3 – 4 Years · Language & Creative Curiosity',
    shortDescription:
      'Hands-on storytelling, early phonics, counting games, and imaginative art that spark everyday curiosity.',
    fullDescription:
      'Designed around Kidzee’s research-backed Péntemind pedagogy, Nursery nurtures expression, observation, and foundational literacy and numeracy without academic pressure.',
    highlights: [
      'Interactive phonics readiness and vocabulary building',
      'Hands-on number sense with sorting and pattern games',
      'Daily art, craft, and nature discovery corners',
    ],
    accentHex: '#1B8FD2',
    surfaceTint: '#F2F9FE',
    image: aboutLearningImg,
    imageAlt: 'Teacher guiding nursery children with colorful wooden alphabet and shape puzzles',
  },
  {
    id: 'kindergarten',
    title: 'Kindergarten',
    category: 'early-years',
    meta: '4 – 6 Years · Jr. KG & Sr. KG School Readiness',
    shortDescription:
      'Structured reading, logical thinking, collaborative projects, and confident communication for primary school.',
    fullDescription:
      'Across Junior KG and Senior KG, children develop analytical reasoning, fluent reading habits, joyful writing skills, and teamwork so they step into primary school curious and self-assured.',
    highlights: [
      'Phonics-based reading, sentence building, and comprehension',
      'Logical reasoning, early math concepts, and inquiry projects',
      'Stage confidence, collaborative teamwork, and empathy',
    ],
    accentHex: '#5B2D8E',
    surfaceTint: '#F7F3FB',
    image: kindergartenClassroomImg,
    imageAlt: 'Kindergarten children happily drawing and reading storybooks with their teacher',
  },
  {
    id: 'early-childhood-care',
    title: 'Early Childhood Care',
    category: 'care-training',
    meta: 'Full-Care Support · Safe & Nurturing Routine',
    shortDescription:
      'Warm supervision, balanced quiet time, nutritious meal habits, and engaging afternoon activities for working families.',
    fullDescription:
      'Our Early Childhood Care programme provides a safe, homely extension to preschool hours in Rangia, blending attentive adult supervision with creative play, rest, and gentle habit building.',
    highlights: [
      'Clean, child-safe rooms with continuous attentive supervision',
      'Structured afternoon reading, puzzles, and free play',
      'Consistent communication with parents throughout the day',
    ],
    accentHex: '#E23E57',
    surfaceTint: '#FFF4F6',
    image: heroClassroomImg,
    imageAlt: 'Attentive teacher engaging young children with storybooks and blocks in a bright care room',
  },
  {
    id: 'teacher-training',
    title: 'Teacher Training Programme',
    category: 'care-training',
    meta: 'Educator Certification · Early Years Pedagogy',
    shortDescription:
      'Practical training in early childhood psychology, Montessori tools, and joyful classroom leadership for aspiring teachers.',
    fullDescription:
      'Our Teacher Training Programme equips aspiring preschool educators in and around Rangia with modern child-centric methods, lesson planning skills, phonics instruction, and classroom observation practice.',
    highlights: [
      'Child development fundamentals and Péntemind framework',
      'Practical classroom workshops with teaching aids and phonics',
      'Lesson planning, storytelling, and parent partnership skills',
    ],
    accentHex: '#5B2D8E',
    surfaceTint: '#F7F3FB',
    image: teacherTrainingImg,
    imageAlt: 'Early childhood educators collaborating around phonics flashcards and wooden learning kits',
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classroom Activities' | 'Creative Learning' | 'Kids Playing' | 'Art & Craft' | 'Group Activities';
  caption: string;
  image: string;
  alt: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Interactive Story & Block Circle',
    category: 'Classroom Activities',
    caption: 'Small-group guided play and storytime with attentive teacher support.',
    image: heroClassroomImg,
    alt: 'Preschool teacher reading The Hungry Caterpillar with children building wooden blocks',
  },
  {
    id: 'g2',
    title: 'Paper Folding & Crayon Art',
    category: 'Art & Craft',
    caption: 'Exploring colour, fine motor control, and imagination at the craft table.',
    image: artCraftImg,
    alt: 'Preschoolers smiling while creating colorful origami crafts and drawings together',
  },
  {
    id: 'g3',
    title: 'Sensory Playtime for Toddlers',
    category: 'Kids Playing',
    caption: 'Tactile stacking rings and soft cloth books designed for safe toddler discovery.',
    image: playgroupCareImg,
    alt: 'Two toddlers smiling while playing with colorful wooden rings and fabric sensory toys',
  },
  {
    id: 'g4',
    title: 'Montessori Alphabet & Shape Discovery',
    category: 'Creative Learning',
    caption: 'Hands-on wooden puzzles that build focus and early letter recognition.',
    image: aboutLearningImg,
    alt: 'Teacher guiding two children with wooden alphabet blocks and shape puzzles',
  },
  {
    id: 'g5',
    title: 'Kindergarten Group Studio',
    category: 'Group Activities',
    caption: 'Collaborative drawing and early reading activities in sunny classrooms.',
    image: kindergartenClassroomImg,
    alt: 'Kindergarten classmates happily drawing and reading together at wooden desks',
  },
  {
    id: 'g6',
    title: 'Educator Pedagogy Workshop',
    category: 'Classroom Activities',
    caption: 'Aspiring teachers mastering phonics cards and Montessori classroom tools.',
    image: teacherTrainingImg,
    alt: 'Educators collaborating around flashcards and curriculum materials during teacher training',
  },
];
