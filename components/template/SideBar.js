
import {Logo} from '../../components/ui'
import Link from 'next/link'

import { useSelector,useDispatch } from 'react-redux'
import { setSideNavCollapse } from '../../store/theme/themeSlice'
import SideBarMobile from './SideBarMobile'

import navigation from '../../config/navigationmenu'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {

  const dispatch = useDispatch()
  const sideNavCollapse = useSelector(
    (state) => state.theme.layout.sideNavCollapse,
  )

	const onCollapse = () => {
		dispatch(setSideNavCollapse(!sideNavCollapse))
	}

  return (
    <>
      <SideBarMobile></SideBarMobile>
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-grow flex-col overflow-y-auto bg-white border pt-5">
          <div className="flex flex-shrink-0 items-center px-4">
            <Logo />
          </div>
          <div className="mt-5 flex flex-1 flex-col">
            <nav className="flex-1 space-y-1 px-2 pb-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className={classNames(
                      item.current
                        ? 'bg-indigo-800 text-white'
                        : 'text-black hover:bg-indigo-600 hover:text-white',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                    )}
                  >
                    <item.icon
                      className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
