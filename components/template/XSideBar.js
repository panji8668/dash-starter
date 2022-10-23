import { useState } from 'react'

import { Logo } from '../ui'
import navigation from '../../config/navigationmenu'
import { BsChevronDown } from 'react-icons/bs'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import {
  setActiveMenuKey,
  setOpenSideBar,setExpandedKey
} from '../../store/sidebar/sidebarSlice'

const XSideBar = (props) => {
  const dispatch = useDispatch()
  const [subMenuOpen, setsubMenuOpen] = useState(false)

  const { activemenukey, sidebaropen,expandedkey,draweropen } = useSelector((state) => state.sidebar)

  function handleSubMenu(val) {
    setsubMenuOpen(!subMenuOpen)
  }
  function isExpanded(val){
    return val.name === expandedkey
  }
  function handleClickMenu(val) {
    if (val.submenu) {
      dispatch(setExpandedKey(val.name))
      setsubMenuOpen(!subMenuOpen)
    } else {
      dispatch(setActiveMenuKey(val.name))
      Router.push(val.href)
    }
  }

  const selectedClass = 'bg-gray-200 rounded-br-xl rounded-tr-xl'
  const unselectedClass =
    'bg-white bg-white hover:bg-gray-100 rounded-br-xl rounded-tr-xl'

  function isActive(val) {
    return val.name === activemenukey
  }

  function isNeedExpand(val){
    return val.name === expandedkey
  }

  function getBaseClass(val) {
    return isActive(val) ? selectedClass : unselectedClass
  }

  function isCanRotate(val){

  }

  return (
    <div className={`${draweropen? "w-72":"w-16"} h-screen border relative duration-500`}>
      <Logo className="bg-white"></Logo>
      
      <ul className="pr-2">
        {navigation.map((item, index) => (
          <div key={index}>
            <li
              className={classNames(
                getBaseClass(item),
                'flex px-3 py-2 items-center cursor-pointer',
              )}
              key={index}
              onClick={() => handleClickMenu(item)}
            >
              <span className="text-2xl float-left block">
                <item.icon className="h-6 w-6 mr-2"></item.icon>
              </span>
              <span className={`flex-1 text-gray-700 ${!draweropen && "hidden"}`}>
                {item.name}
              </span>
              {item.submenu && (
                <BsChevronDown
                  className={`${
                    isNeedExpand(item) ? 'duration-300' : 'rotate-180 duration-300'
                  }`}
                  onClick={() => {
                    //  handleSubMenu(!subMenuOpen)
                  }}
                />
              )}
            </li>
            {item.submenu && isNeedExpand(item) && (
              <ul className="duration-500">
                {item.submenu.map((submenu, sindex) => (
                  <li
                    key={sindex}
                    className={classNames(
                      getBaseClass(submenu),
                      `${!draweropen && "hidden"}`,
                      'flex px-2 py-2 pl-11 items-center cursor-pointer text-gray-700',
                    )}
                    onClick={() => handleClickMenu(submenu)}
                  >
                    <span className="">{submenu.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </div>
  )
}

export default XSideBar
