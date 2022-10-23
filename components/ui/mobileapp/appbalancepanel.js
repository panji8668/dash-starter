import { MdAccountBalanceWallet,MdLoyalty } from 'react-icons/md'

const MBalancePanel = (props) => {
  return (
    <div className='border px-2 py-2 mx-2 rounded-md flex justify-between'>
      <div className="flex content-center items-center">
        <MdAccountBalanceWallet className='w-6 h-6 text-blue-700'></MdAccountBalanceWallet>
        <span className="text-sm ml-1 font-medium">1.000</span>
      </div>
      <div className='border-r-2'></div>
        <div className="flex content-center items-center">
        <MdLoyalty className='w-6 h-6 text-blue-700'></MdLoyalty>
        <span className="text-sm mr-2 ml-1">500 pts</span>
      </div>
    </div>
  )
}

export default MBalancePanel
