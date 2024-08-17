import { Link } from '@inertiajs/react';
import CoverOne from '@/assets/images/cover-01.png';
import userSix from '@/assets/images/user-06.png';
import { MainLayout } from '@/Layouts/MainLayout';
import Toolbar from '@/components/ui/toolbar/Toolbar';
import { IoCameraOutline } from 'react-icons/io5';

const Profile = () => {
  return (
    <MainLayout>
      <Toolbar routeCreate="auth/login" currentPage={'dashboard'} />
      <div className="overflow-hidden rounded-sm border border-neutral-200 mb-[35px] bg-neutral-100 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
          <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
            <label
              htmlFor="cover"
              className="flex cursor-pointer items-center justify-center gap-2 rounded bg-purple-600 py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90 xsm:px-4"
            >
              <input type="file" name="cover" id="cover" className="sr-only" />
              <span>
                <IoCameraOutline className="fill-current" />
              </span>
              <span>Edit</span>
            </label>
          </div>
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5 bg-gray-800">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-neutral-200 p-1 backdrop-blur-sm sm:h-44 sm:max-w-44 sm:p-3 dark:bg-neutral-700">
            <div className="relative drop-shadow-md">
              <img src={userSix} alt="profile" />
              <label
                htmlFor="profile"
                className="absolute bottom-0 right-0 flex h-8.5 w-8.5 p-2 cursor-pointer items-center justify-center rounded-full bg-purple-600 text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
              >
                <IoCameraOutline className="fill-current" />
                <input type="file" name="profile" id="profile" className="sr-only" />
              </label>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-neutral-800 text-white text-lg">Mahmoud Khaled Nada</h3>
            <p className="font-medium text-neutral-600 text-white text-base">PHP Instructor</p>
            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-neutral-800 text-white text-base">About Me</h4>
              <p className="mt-4.5 text-neutral-700 text-white text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu
                condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel
                aliquet libero. Nunc a augue fermentum, pharetra ligula sed, aliquam lacus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
