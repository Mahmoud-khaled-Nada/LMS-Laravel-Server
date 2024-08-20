import { routes } from '@/utils/constants/sidebar';
import SidebarSubmenu from './SidebarSubmenu';
import { Link, usePage } from '@inertiajs/react';
import {  Route } from '@/types';

function SidebarContent() {
  const { url: location } = usePage();

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <Link href="/" className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200">
        LMS System
      </Link>
      <ul className="mt-6">
        {routes.map((route: Route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <Link
                href={route.path || '/'}
                className={`
                  inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                    location === route.path ? 'text-gray-800 dark:text-gray-100' : ''
                  }`}
              >
                <span
                  className={`${
                    location === route.path
                      ? 'absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'
                      : 'absolute inset-y-0 left-0 w-1'
                  }`}
                ></span>
                <span>{route.icon}</span>
                <span className="ml-4">{route.name}</span>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default SidebarContent;
