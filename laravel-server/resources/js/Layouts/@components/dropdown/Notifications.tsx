import { FaRegBell } from 'react-icons/fa';

import { Badge, Dropdown, DropdownItem } from '@windmill/react-ui';
import { useState } from 'react';
import { router } from '@inertiajs/react';

export const Notifications = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <li className="relative">
      <button
        className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
        onClick={() => setIsNotificationsOpen(true)}
        aria-label="Notifications"
        aria-haspopup="true"
      >
        <FaRegBell className="w-5 h-5" aria-hidden="true" />
        {/* <!-- Notification badge --> */}
        <span
          aria-hidden="true"
          className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
        ></span>
      </button>

      <Dropdown align="right" isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)}>
        <DropdownItem onClick={() => router.get('/messages')} className="justify-between">
          <span>Messages</span>
          <Badge type="danger">13</Badge>
        </DropdownItem>
        <DropdownItem tag="a" href="#" className="justify-between">
          <span>Sales</span>
          <Badge type="danger">2</Badge>
        </DropdownItem>
        <DropdownItem onClick={() => alert('Alerts!')}>
          <span>Alerts</span>
        </DropdownItem>
      </Dropdown>
    </li>
  );
};
