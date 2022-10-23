import toast from 'react-hot-toast'
import { XButton } from '../../components/ui'

const ToastPage = (props) => {
  const notify = () => toast.success('Here is your toast.')
  const notifyErr = () => toast.error('Here is your toast.')

  return (
    <div className="py-4 px-4 grid">
      <h3 className="text-2xl">react-hot-toast.com</h3>
      <div className="border-b border-gray-200 pb-5"></div>
      <div className="mt-6">
        <div className='bg-green-600'></div>
        <XButton size="sm" variant="solid" color='green' onClick={notify}>
          Toast Success
        </XButton>

        <XButton  className='ml-2' size="sm" variant="solid" color="red" onClick={notifyErr}>
          Toast Error
        </XButton>

        <XButton
          size="sm"
          className='ml-2'
          variant="solid"
          onClick={() => {
            toast.success('Always at the bottom.', {
              position: 'bottom-center',
            })
          }}
        >
          Position bottom-center
        </XButton>
      </div>
    </div>
  )
}

export default ToastPage
