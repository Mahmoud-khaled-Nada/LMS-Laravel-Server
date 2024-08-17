import { useContext } from 'react';
import { IoSearch, IoMoonSharp, IoSunny, IoMenu } from 'react-icons/io5';

import { Input, WindmillContext } from '@windmill/react-ui';
import { useSidebarContext } from '@/utils/context/useSidebarContext';
import { ProfileMenu } from './dropdown/ProfileMenu';
import { Notifications } from './dropdown/Notifications';

function Header() {
  const { mode, toggleMode } = useContext(WindmillContext);
  const { toggleSidebar } = useSidebarContext();

  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <IoMenu className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <IoSearch className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input className="pl-8 text-gray-700" placeholder="Search for projects" aria-label="Search" />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === 'dark' ? (
                <IoSunny className="w-5 h-5" aria-hidden="true" />
              ) : (
                <IoMoonSharp className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </li>
          {/* <!-- Notifications menu --> */}
          <Notifications />
          {/* <!-- Profile menu --> */}
          <ProfileMenu />
        </ul>
      </div>
    </header>
  );
}

export default Header;
