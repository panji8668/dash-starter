import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import Image from 'next/image'
import BillingPanel from '../../components/widget/profile/BillingPanel'
import GeneralPanel from '../../components/widget/profile/Generalpanel'
import SecurityPanel from '../../components/widget/profile/SecurityPanel'
import TeamPanel from '../../components/widget/profile/TeamPanel'

const profileList = [
  { id: 1, title: 'Overview' },
  { id: 2, title: 'Teams' },
  { id: 3, title: 'Security' },
  { id: 4, title: 'Billing' },
]

const ProfilePage = (props) => {
  return (
    <div className="flex flex-wrap py-4">
      <div className="rounded-lg border h-full m-1 w-80">

        <div className='text-center items-center px-4 mt-11 mb-4'>
              <Image
            width="125"
            height="125"
            className="rounded-lg mx-4 my-4"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
           <p>Panji Pramana</p> 
          </div>
           
      </div>
      <div className='flex-1 p-1 m-1 rounded'>
        <Tab.Group>
          <Tab.List className="flex space-x-1">
            {profileList.map((item) => (
              <Tab
                key={item.id}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm font-medium leading-5 text-indigo-700',
                    'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white border-indigo-500 border-b  '
                      : 'text-gray-500 hover:bg-white/[0.12] hover:text-grey border-gray-500',
                  )
                }
              >
                {item.title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels
            className={classNames(
              ' bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            )}
          >
            <Tab.Panel><GeneralPanel/></Tab.Panel>
            <Tab.Panel><TeamPanel/></Tab.Panel>
            <Tab.Panel><SecurityPanel/></Tab.Panel>
             <Tab.Panel><BillingPanel/></Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

export default ProfilePage
