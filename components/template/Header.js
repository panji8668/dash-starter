import React, { Fragment, useState, useEffect } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Bars3BottomLeftIcon, BellIcon,XMarkIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { GiHamburgerMenu } from 'react-icons/gi'
import classNames from 'classnames'
import useAuth from '../../utils/hooks/useAuth'
import SideBarToggle from './SiderBarToggle'
import UserProfileMenu from './UserProfileMenu'

const userNavigation = [
  { name: 'Your Profile', href: '/user/profile' },
  { name: 'Settings', href: '/account/settings' },
  { name: 'Sign out', href: '/account/login' },
]

const Header = (props) => {

  const { signOut } = useAuth()

  const handleclick = async () => {
    await signOut()
  }

  return (
    <>

    <div className='flex flex-1 flex-col'>
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">

      <SideBarToggle></SideBarToggle>

      <div className="flex flex-1 justify-between px-4">
        <div className="flex flex-1">
          <form className="flex w-full md:ml-0" action="#" method="GET">
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="e absolute inset-y-0 left-0 flex items-center">
               
              </div>
            </div>
          </form>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
          <UserProfileMenu/>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Header
