import { MdHome, MdInbox, MdAccountBox, MdHistory } from 'react-icons/md'

const NavBottom = (props) => {
  return (
    <div className="flex border-t px-3 py-0 pt-2 pb-1 justify-between bg-gray-50 w-full">
      <div className="grid justify-items-center cursor-pointer">
        <MdHome className="w-6 h-6 text-indigo-500"></MdHome>
        <span className="text-xs">Home</span>
      </div>
      <div className="grid justify-items-center cursor-pointer">
        <MdInbox className="w-6 h-6 text-gray-500"></MdInbox>
        <span className="text-xs">Inbox</span>
      </div>

      <div className="grid justify-items-center cursor-pointer">
        <MdHistory className="w-6 h-6 text-gray-500 content-cente"></MdHistory>
        <span className="text-xs text-center">History</span>
      </div>
      <div className="grid justify-items-center cursor-pointer">
        <MdAccountBox className="w-6 h-6 text-gray-500"></MdAccountBox>
        <span className="text-xs">Account</span>
      </div>
    </div>
  )
}

export default NavBottom
