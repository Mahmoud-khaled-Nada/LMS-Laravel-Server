import { MdOutlinePerson } from 'react-icons/md';
import { HiOutlineCog } from 'react-icons/hi';
import { AiOutlineLogout } from 'react-icons/ai';

import { Avatar, Dropdown, DropdownItem } from '@windmill/react-ui';
import { useState } from 'react';
import { router, useForm } from '@inertiajs/react';

export const ProfileMenu = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const { post } = useForm();

  const logout = () => {
    post('/logout', {
      onFinish: () => router.get('/login'),
    });
  };

  return (
    <li className="relative">
      <button
        className="rounded-full focus:shadow-outline-purple focus:outline-none"
        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
        aria-label="Account"
        aria-haspopup="true"
      >
        <Avatar
          className="align-middle"
          src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
          alt=""
          aria-hidden="true"
        />
      </button>
      <Dropdown align="right" isOpen={isProfileMenuOpen} onClose={() => setIsProfileMenuOpen(false)}>
        <DropdownItem onClick={() => router.get('/profile')}>
          <MdOutlinePerson className="w-4 h-4 mr-3" />
          <span>Profile</span>
        </DropdownItem>
        <DropdownItem tag="a" href="#">
          <HiOutlineCog className="w-4 h-4 mr-3" aria-hidden="true" />
          <span>Settings</span>
        </DropdownItem>
        <DropdownItem onClick={logout}>
          <AiOutlineLogout className="w-4 h-4 mr-3" />
          <span>Log out</span>
        </DropdownItem>
      </Dropdown>
    </li>
  );
};
