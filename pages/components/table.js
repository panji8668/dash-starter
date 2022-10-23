import { useState,Fragment } from 'react'
import { XButton, XTable } from '../../components/ui'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { MdDelete, MdEdit } from 'react-icons/md'
import { IoMdEye } from 'react-icons/io'
const TablePageComponent = () => {
  const [isload, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const handleItemClick = (row) => {
    alert('oke bos: ' + row.name)
  }

  const headerlist = [
    {
      label: 'Name',
      key: 'name',
      class: 'bg-green-500',
      render: (row) => {
        return (
          <td className="text-gray-600 text-sm px-4 py-2 flex items-center">
            <Image
              alt="ok"
              width="48"
              height="48"
              className="rounded-full"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            ></Image>

            <span className="ml-2">{row.name}</span>
          </td>
        )
      },
    },
    { label: 'Price', key: 'amount', class: 'bg-green-100 text-right' },
    { label: 'Code', key: 'dnmcode' },
    { label: 'type', key: 'type' },
    { label: 'SubType', key: 'subtype' },
    {
      label: 'Action',
      key: 'subtype',
      render: (row) => {
        return (
          <td className="py-3 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">
            <Menu as="div" className="">
              <div>
                <Menu.Button className="inline-flex w-22 justify-center rounded-md bg-white bg-opacity-20 px-4 py-2 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Actions
                  <ChevronDownIcon
                    className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
                 <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
       
              <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-100' : ''
                        } group flex w-full items-center py-2 text-sm`}
                      >
                      
                          <IoMdEye
                            className="mr-2 h-5 w-5 ml-2"
                            aria-hidden="true"
                          />
                        
                        View
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-100' : ''
                        } group flex w-full items-center py-2 text-sm`}
                      >
                    
                          <MdEdit className="mr-2 ml-2 h-5 w-5" aria-hidden="true" />
                        
                        Edit
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => handleItemClick(row)}
                        className={`${
                          active ? 'bg-gray-100 ' : ''
                        } group flex w-full items-center py-2 text-sm`}
                      >
                         
                          <MdDelete
                            className="mr-2 ml-2 h-5 w-5 text-red-400"
                            aria-hidden="true"
                          />
                        
                        Delete
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
              </Menu>
          </td>
        )
      },
    },
  ]
  //
  const datalist = [
    {
      name: 'Denom 5K',
      amount: '5,750',
      discntamount: null,
      discntamountnew: null,
      dnmcode: '393',
      type: 'RELOAD',
      subtype: 'Regular',
      frpkg: '0',
      typeid: '1',
      issplpkg: '0',
      strikeout: 0,
      detail_benefit: '5000',
      disclaimer: 'Price before discount.',
    },
    {
      name: 'Denom 10K',
      amount: '10,750',
      discntamount: null,
      discntamountnew: null,
      dnmcode: '400',
      type: 'RELOAD',
      subtype: 'Regular',
      frpkg: '0',
      typeid: '1',
      issplpkg: '0',
      strikeout: 0,
      detail_benefit: '10000',
      disclaimer: 'Price before discount.',
    },
    {
      name: 'Denom 15K',
      amount: '14,775',
      discntamount: null,
      discntamountnew: null,
      dnmcode: '398',
      type: 'RELOAD',
      subtype: 'Regular',
      frpkg: '0',
      typeid: '1',
      issplpkg: '0',
      strikeout: 0,
      detail_benefit: '15000',
      disclaimer: 'Price before discount.',
    },
    {
      name: 'Denom 20K',
      amount: '19,700',
      discntamount: null,
      discntamountnew: null,
      dnmcode: '404',
      type: 'RELOAD',
      subtype: 'Regular',
      frpkg: '0',
      typeid: '1',
      issplpkg: '0',
      strikeout: 0,
      detail_benefit: '20000',
      disclaimer: 'Price before discount.',
    },
    {
      name: 'Denom 25K',
      amount: '24,625',
      discntamount: null,
      discntamountnew: null,
      dnmcode: '391',
      type: 'RELOAD',
      subtype: 'Regular',
      frpkg: '1',
      typeid: '1',
      issplpkg: '0',
      strikeout: 0,
      detail_benefit: '25000',
      disclaimer: 'Price before discount.',
    },
    {
      name: 'Denom 30K',
      amount: '29,400',
      discntamount: null,
      discntamountnew: null,
      dnmcode: '396',
      type: 'RELOAD',
      subtype: 'Regular',
      frpkg: '0',
      typeid: '1',
      issplpkg: '0',
      strikeout: 0,
      detail_benefit: '30000',
      disclaimer: 'Price before discount.',
    },
    {
      name: 'Denom 40K',
      amount: '39,200',
      discntamount: null,
      discntamountnew: null,
      dnmcode: '394',
      type: 'RELOAD',
      subtype: 'Regular',
      frpkg: '0',
      typeid: '1',
      issplpkg: '0',
      strikeout: 0,
      detail_benefit: '40000',
      disclaimer: 'Price before discount.',
    },
    {
      name: 'Denom 50K',
      amount: '49,000',
      discntamount: null,
      discntamountnew: null,
      dnmcode: '392',
      type: 'RELOAD',
      subtype: 'Regular',
      frpkg: '1',
      typeid: '1',
      issplpkg: '0',
      strikeout: 0,
      detail_benefit: '50000',
      disclaimer: 'Price before discount.',
    },
    {
      name: 'Denom 60K',
      amount: '58,800',
      discntamount: null,
      discntamountnew: null,
      dnmcode: '399',
      type: 'RELOAD',
      subtype: 'Regular',
      frpkg: '0',
      typeid: '1',
      issplpkg: '0',
      strikeout: 0,
      detail_benefit: '60000',
      disclaimer: 'Price before discount.',
    },
    {
      name: 'Denom 80K',
      amount: '77,600',
      discntamount: null,
      discntamountnew: null,
      dnmcode: '395',
      type: 'RELOAD',
      subtype: 'Regular',
      frpkg: '0',
      typeid: '1',
      issplpkg: '0',
      strikeout: 0,
      detail_benefit: '80000',
      disclaimer: 'Price before discount.',
    },
    {
      name: 'Denom 100K',
      amount: '97,000',
      discntamount: null,
      discntamountnew: null,
      dnmcode: '397',
      type: 'RELOAD',
      subtype: 'Regular',
      frpkg: '0',
      typeid: '1',
      issplpkg: '0',
      strikeout: 0,
      detail_benefit: '100000',
      disclaimer: 'Price before discount.',
    },
    {
      name: 'Denom 300K',
      amount: '288,000',
      discntamount: null,
      discntamountnew: null,
      dnmcode: '402',
      type: 'RELOAD',
      subtype: 'Regular',
      frpkg: '0',
      typeid: '1',
      issplpkg: '0',
      strikeout: 0,
      detail_benefit: '300000',
      disclaimer: 'Price before discount.',
    },
    {
      name: 'Denom 400K',
      amount: '380,000',
      discntamount: null,
      discntamountnew: null,
      dnmcode: '403',
      type: 'RELOAD',
      subtype: 'Regular',
      frpkg: '0',
      typeid: '1',
      issplpkg: '0',
      strikeout: 0,
      detail_benefit: '400000',
      disclaimer: 'Price before discount.',
    },
    {
      name: 'Denom 500K',
      amount: '470,000',
      discntamount: null,
      discntamountnew: null,
      dnmcode: '401',
      type: 'RELOAD',
      subtype: 'Regular',
      frpkg: '0',
      typeid: '1',
      issplpkg: '0',
      strikeout: 0,
      detail_benefit: '500000',
      disclaimer: 'Price before discount.',
    },
    {
      name: 'Obrol Seharian ke Semua Operator',
      amount: '3,448',
      discntamount: null,
      discntamountnew: null,
      dnmcode: '174',
      type: 'DATA PACKAGE',
      subtype: 'Paket Lainnya',
      frpkg: '0',
      typeid: '2',
      issplpkg: '0',
      strikeout: 0,
      detail_benefit: 'Obrol Seharian ke Semua Operator',
      disclaimer: 'Price before discount.',
    },
  ]

  return (
    <div className="mb-10">
      <div className="border-b border-gray-200 bg-white py-5">
        <div className="flex flex-wrap items-center justify-between ">
          <div className="ml-4 mt-2">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Job Postings
            </h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <button
              onClick={() => handleClick()}
              type="button"
              className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create new
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <XTable
          loading={isload}
          data={datalist}
          headers={headerlist}
          totaldata={1500}
        ></XTable>
      </div>
    </div>
  )
}

export default TablePageComponent
