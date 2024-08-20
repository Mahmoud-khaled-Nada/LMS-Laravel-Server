import { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { Transition } from '@windmill/react-ui';
import { Link, usePage } from '@inertiajs/react';
import { Route } from '@/types';
import { GoDotFill } from 'react-icons/go';

interface SidebarSubmenuProps {
    route: Route;
}

const  SidebarSubmenu = ({ route }: SidebarSubmenuProps) => {
    const { url: location } = usePage();
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const toggleDropdownMenu = () => {
        setIsDropdownMenuOpen(prev => !prev);
    };

    useEffect(() => {
        const isActive = route.routes?.some(subRoute => subRoute.path === location);
        setIsDropdownMenuOpen(isActive || false);
    }, [location, route.routes]);

    return (
        <li className="relative px-6 py-3">
            <button
                className="flex items-center justify-between w-full py-2 text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                onClick={toggleDropdownMenu}
                aria-haspopup="true"
                aria-expanded={isDropdownMenuOpen}
            >
                <span className="flex items-center">
                    {route.icon}
                    <span className="ml-4">{route.name}</span>
                </span>
                <FaAngleDown
                    className={`w-4 h-4 transition-transform ${isDropdownMenuOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                />
            </button>
            <Transition
                show={isDropdownMenuOpen}
                enter="transition-all ease-in-out duration-300"
                enterFrom="opacity-25 max-h-0"
                enterTo="opacity-100 max-h-xl"
                leave="transition-all ease-in-out duration-300"
                leaveFrom="opacity-100 max-h-xl"
                leaveTo="opacity-0 max-h-0"
            >
                <ul
                    className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                    aria-label="submenu"
                >
                    {route.routes?.map(subRoute => (
                        <li
                            className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                            key={subRoute.name}
                        >
                            <Link
                                href={subRoute.path || '/'}
                                className="flex items-center w-full"
                            >
                                {subRoute.icon || <GoDotFill className="w-4 h-4" />}
                                <span className="ml-4">{subRoute.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Transition>
        </li>
    );
}

export default SidebarSubmenu;
