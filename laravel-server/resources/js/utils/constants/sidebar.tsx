import { RoutesType } from '@/types';
import { TiHomeOutline } from 'react-icons/ti';
import { SiPowerpages } from 'react-icons/si';
import { RiAdminLine } from 'react-icons/ri';
import { FaUnlockKeyhole } from 'react-icons/fa6';
import { BiCategory } from 'react-icons/bi';

// import { useTranslation } from "react-i18next";
// const { t } = useTranslation();
export const routes: RoutesType = [
  {
    path: '/',
    icon: <TiHomeOutline className="w-6 h-4" />,
    name: 'Dashboard',
  },
  {
    path: '/admins',
    icon: <RiAdminLine className="w-6 h-4" />,
    name: 'Admins',
  },
  {
    path: '/categories',
    icon: <BiCategory className="w-6 h-4" />,
    name: 'Categories',
  },
  {
    path: '/app/buttons',
    icon: <TiHomeOutline className="w-6 h-4" />,
    name: 'Buttons',
  },
  {
    path: '/app/modals',
    icon: <TiHomeOutline className="w-6 h-4" />,
    name: 'Modals',
  },
  {
    path: '/app/tables',
    icon: <TiHomeOutline className="w-6 h-4" />,
    name: 'Tables',
  },
  {
    icon: <SiPowerpages />,
    name: 'Pages',
    routes: [
      {
        path: '/login',
        name: 'Login',
      },
      {
        path: '/register',
        name: 'Create account',
      },
      {
        path: '/forgot-password',
        name: 'Forgot password',
      },
      {
        path: '/404',
        name: '404',
      },
    ],
  },
];
