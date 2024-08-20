import { Link } from '@inertiajs/react';
import { FiHome, FiChevronRight } from 'react-icons/fi';

type Props = {
  currentPage: string;
};

function Breadcrumb({ currentPage }: Props) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <FiHome className="w-3 h-3 me-2.5" />
            Home
          </Link>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <FiChevronRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{currentPage}</span>
          </div>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
