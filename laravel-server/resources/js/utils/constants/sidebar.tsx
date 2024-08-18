import { RoutesType } from '@/types';
import { BiSolidCategory } from "react-icons/bi";
import { RiAdminFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";

export const routes: RoutesType = [
  {
    path: '/',
    icon: <FaHome className="w-6 h-4" />,
    name: 'Dashboard',
  },
  {
    path: '/admins',
    icon: <RiAdminFill className="w-6 h-4" />,
    name: 'Admins',
  },
  {
    name: 'Departments',
    icon: <BiSolidCategory className="w-6 h-4" />,
    routes: [
      {
        path: '/categories',
        name: 'Categories',
      },
      {
        path: '/courses',
        name: 'Courses',
      },
    ],
  },
];
