import {
  MdWifi,
  MdSignalCellular2Bar,
  MdBatteryCharging80,
} from 'react-icons/md'

const MSystemBar = (props) => {
  return (
    <div className="h-5 py-1 bg-blue-700 items-center flex justify-between px-2">
      <span className="text-white text-xs">10:10</span>
      <div className="flex">
        <MdWifi className="text-white"></MdWifi>
        <MdSignalCellular2Bar className="text-white"></MdSignalCellular2Bar>
        <MdBatteryCharging80 className="text-white"></MdBatteryCharging80>
      </div>
    </div>
  )
}

export default MSystemBar
