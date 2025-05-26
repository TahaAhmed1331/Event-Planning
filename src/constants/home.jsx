import { BookmarkCheck, LandPlot, LandPlotIcon, Send } from 'lucide-react';

export const ProgressBar_Dashboard = [
  {
    label: 'task',
    total: 80,
    obtain: 20,
  },
  {
    label: 'history',
    total: 100,
    obtain: 70,
  },
];

export const markedDates = {
  '2025-05-08': { project: 'Website Redesign' },
  '2025-05-15': { project: 'App Launch' },
  '2025-05-20': { project: 'Marketing Review' },
};

export const reviews = [
  {
    id: '1',
    name: 'Amanda',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3urYz7Hs_zc1-x3eJi82OeHqWxDkFP_d4w&s',
    rating: 5,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci harum ratione quos facere nisi quis delectus dolore, reprehenderit.',
  },
  {
    id: '2',
    name: 'James',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
    description:
      'Excellent product quality. Delivery was on time. Would definitely recommend to others.',
  },
  {
    id: '3',
    name: 'Sofia',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 3,
    description:
      'Good service overall. The packaging could be improved, but I’m satisfied with the purchase.',
  },
  {
    id: '4',
    name: 'Liam',
    avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
    rating: 4,
    description:
      'User-friendly website and great customer support. Had a slight issue but they resolved it quickly.',
  },
  {
    id: '5',
    name: 'Emily',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    rating: 5,
    description:
      'This is by far the best experience I’ve had shopping online. Highly recommended!',
  },
];

export const dashboardActivity = [
  {
    id: '1',
    icon: (
      <BookmarkCheck
        size={40}
        strokeWidth={1.5}
      />
    ),
    value: 45,
    title: 'Completion Count',
  },
  {
    id: '2',
    icon: (
      <Send
        size={40}
        strokeWidth={1.5}
      />
    ),
    value: 102,
    title: 'Proposal Count',
  },
  {
    id: '3',
    icon: (
      <LandPlotIcon
        size={40}
        strokeWidth={1.5}
      />
    ),
    value: 40,
    title: 'Success Rate',
  },
];

export const projectData = [
  {
    id: 1,
    refernceImage: 'assets/1_dEo8x5swSiuFVp4VYsCGKg.webp',
    projectTitle: 'Elegant Wedding Setup',
    userName: 'Aarav Mehta',
    budget: 120000,
    eventDate: '2025-07-20',
    noOfPeople: 200,
    eventType: 'Wedding',
  },
  {
    id: 1,
    refernceImage: 'assets/1_dEo8x5swSiuFVp4VYsCGKg.webp',
    projectTitle: 'Elegant Wedding Setup',
    userName: 'Aarav Mehta',
    budget: 120000,
    eventDate: '2025-07-20',
    noOfPeople: 200,
    eventType: 'Wedding',
  },
  {
    id: 1,
    refernceImage: 'assets/1_dEo8x5swSiuFVp4VYsCGKg.webp',
    projectTitle: 'Elegant Wedding Setup',
    userName: 'Aarav Mehta',
    budget: 120000,
    eventDate: '2025-07-20',
    noOfPeople: 200,
    eventType: 'Wedding',
  },
  {
    id: 1,
    refernceImage: 'assets/1_dEo8x5swSiuFVp4VYsCGKg.webp',
    projectTitle: 'Elegant Wedding Setup',
    userName: 'Aarav Mehta',
    budget: 120000,
    eventDate: '2025-07-20',
    noOfPeople: 200,
    eventType: 'Wedding',
  },
];
