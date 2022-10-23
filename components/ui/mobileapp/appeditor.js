import { Switch } from '@headlessui/react'
import classNames from 'classnames'
import { useState } from 'react'
import XButton from '../button'
import { MdSave } from 'react-icons/md'

import { Tab } from '@headlessui/react'

const AppEditor = (props) => {
  const [regonline, setRegOnline] = useState(true)

  const classtabheaader = (selected) => {
    return classNames(
      'w-full duration-300 rounded-md py-2.5 text-sm font-medium px-2',
      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400',
      selected ? 'bg-blue-400 text-white' : 'text-blue-400 hover:bg-white/[0.12]',
    )
  }

  return (
    <div className="flex-auto h-full">
      <Tab.Group>
        <Tab.List className="flex space-x-1 p-1">
          <Tab className={({ selected }) => classtabheaader(selected)}>
            General
          </Tab>

          <Tab className={({ selected }) => classtabheaader(selected)}>
            PlugIn
          </Tab>
          <Tab className={({ selected }) => classtabheaader(selected)}>
            Menu
          </Tab>
                    <Tab className={({ selected }) => classtabheaader(selected)}>
            Slider
          </Tab>
                              <Tab className={({ selected }) => classtabheaader(selected)}>
            Image Popup
          </Tab>
                              <Tab className={({ selected }) => classtabheaader(selected)}>
            Running Text
          </Tab>
          <Tab className={({ selected }) => classtabheaader(selected)}>
            Builder
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className='duration-500'>
            <div className="border rounded-md overflow-hidden mt-2">
              <div className="mt-6">
                <form className="space-y-2 px-3">
                  <div className="grid">
                    <label htmlFor="appname" className="text-sm text-gray-500">
                      AppName
                    </label>
                    <input
                      id="appname"
                      type="text"
                      className="rounded border-gray-300 mt-2"
                    ></input>
                  </div>
                  <div className="flex">
                    <div className="grid">
                      <label
                        htmlFor="appprimarycolor"
                        className="text-sm text-gray-500"
                      >
                        Primary Color
                      </label>
                      <input
                        id="appprimarycolor"
                        type="color"
                        className="rounded border-gray-300"
                      ></input>
                    </div>
                    <div className="grid ml-4">
                      <label
                        htmlFor="apppsecondarycolor"
                        className="text-sm text-gray-500"
                      >
                        Primary Color
                      </label>
                      <input
                        id="apppsecondarycolor"
                        type="color"
                        className="rounded border-gray-300"
                      ></input>
                    </div>
                  </div>
                  <div className="grid">
                    <label htmlFor="appname" className="text-sm text-gray-500">
                      Number of Column Menu
                    </label>
                    <input
                      id="appname"
                      type="number"
                      className="rounded border-gray-300 mt-2"
                      value={4}
                    ></input>
                  </div>
                  <div className="grid">
                    <label htmlFor="appname" className="text-sm text-gray-500">
                      SignUp
                    </label>
                    <Switch
                      id="regonline"
                      checked={regonline}
                      onChange={setRegOnline}
                      className={`${
                        regonline ? 'bg-indigo-900' : 'bg-indigo-700'
                      }
          mt-1 relative inline-flex h-[30px] w-[66px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`${
                          regonline ? 'translate-x-9' : 'translate-x-0'
                        }
            pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch>
                  </div>
                  <div className="flex">
                    <div className="grid mt-2 clas">
                      <label
                        htmlFor="appname"
                        className="text-sm text-gray-500"
                      >
                        Version Number
                      </label>
                      <input
                        id="appname"
                        type="number"
                        className="rounded border-gray-300 mt-2 w-[150px]"
                        value={4}
                      ></input>
                    </div>
                    <div className="grid mt-2 ml-2">
                      <label
                        htmlFor="appname"
                        className="text-sm text-gray-500"
                      >
                        Version Code
                      </label>
                      <input
                        id="appname"
                        type="text"
                        className="rounded border-gray-300 mt-2 w-[150px]"
                        value={4}
                      ></input>
                    </div>
                  </div>
                </form>
                <div className="inset-x-0 mt-10 bottom-0 bg-gray-100 px-4 py-2 border-t">
                  <div className="flex justify-between">
                    <div></div>
                    <XButton
                      size="sm"
                      icon={<MdSave></MdSave>}
                      className="float-left"
                      variant="solid"
                    >
                      Save
                    </XButton>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
           <Tab.Panel>
                        PlugIn
           </Tab.Panel>      
                      <Tab.Panel>
                        Menu
           </Tab.Panel>  
                      <Tab.Panel>
                        Builder
           </Tab.Panel>         
          </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default AppEditor
