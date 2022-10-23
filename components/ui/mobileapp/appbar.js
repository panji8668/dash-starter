import { MdShoppingCart, MdChat } from 'react-icons/md'

const MAppBar = (props) => {
  return (
    <div className="mapp-bar  bg-blue-600 h-12 items-center flex justify-between">
      <span className="text-white text-md ml-2 font-medium">AppName</span>
      <div className='flex mr-2'>
        <MdShoppingCart className="text-white w-5 h-5 mr-3"></MdShoppingCart>
        <MdChat className="text-white w-5 h-5"></MdChat>
      </div>
    </div>
  )
}

export default MAppBar
