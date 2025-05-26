import {
  Cog,
  GalleryVerticalEnd,
  LayoutDashboard,
  LayoutList,
  LogOut,
  MessageCircle,
  UserRoundPen,
  Wallet,
} from 'lucide-react';

export const sidebarItems = [
  {
    icon: <LayoutDashboard strokeWidth={1.5} />,
    lable: 'Dashboard',
    path: '/',
  },
  {
    icon: <LayoutList strokeWidth={1.5} />,
    lable: 'Projects',
    path: '/projects',
  },
  {
    icon: <MessageCircle strokeWidth={1.5} />,
    lable: 'Chats',
    path: '/chats',
  },
  {
    icon: <GalleryVerticalEnd strokeWidth={1.5} />,
    lable: 'History',
    path: '/history',
  },
  {
    icon: <Wallet strokeWidth={1.5} />,
    lable: 'Earnings',
    path: '/earnings',
  },
  {
    icon: <UserRoundPen strokeWidth={1.5} />,
    lable: 'Profile',
    path: '/profile',
  },
  {
    icon: <Cog strokeWidth={1.5} />,
    lable: 'Settings',
    path: '/settings',
  },
  {
    icon: <LogOut strokeWidth={1.5} />,
    lable: 'Logout',
    path: '/logout',
  },
];
