import toast, { Toaster } from 'react-hot-toast'
import { XButton } from '../../components/ui'

const ComponentPage = (props) => {
  const notify = () => toast.success('Here is your toast.')

  return (
    <div className="flex pt-2">
      <h3 className="text-lg"> Component Page</h3>
      <button onClick={notify}>Make me a toast</button>

      <XButton variant="solid" onClick={notify}>Make me a toast</XButton>
      <Toaster position='bobottom-right' />
    </div>
  )
}

export default ComponentPage
