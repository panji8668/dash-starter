import { useState } from 'react'
import { XButton, XDialog } from '../../components/ui'
import { ConfimDialog } from '../../components/ui/ConfmDialog'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

const DialogPage = (props) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogConfmOpen, setConfmDialogOpen] = useState(false)

  const handleClick = () => {
    ConfimDialog({
      title: 'Yakin akan hapus?',
      message: 'Are you sure to do this.',
      iconcolor: 'green',
      icon: ExclamationTriangleIcon,
      buttons: [
        {
          label: 'Ya,Hapus',
          color: 'red', 
          onClick: () => {
            toast.success('Always at the bottom.', {
              position: 'bottom-center',
            })
          },
        },
        {
          label: 'Got it, thanks!',
          color: 'indigo',
          onClick: () => {
            toast.error('Always at the bottom.', {
              position: 'bottom-center',
            })
          },
        },
      ],
    })
  }

  return (
    <div className='py-4 px-4 grid'>
       <h3 className="text-2xl">Dialog Page</h3>
        <div className="border-b border-gray-200 pb-5"></div>
      <div className='mt-4'>
            <XButton variant="solid" className='bg-indigo-500' onClick={() => setDialogOpen(true)}>
        Open Dialog
      </XButton>
      <XDialog
        isOpen={dialogOpen}
        onClosed={() => setDialogOpen(false)}
      ></XDialog>
      <XButton className='ml-2 bg-red-500' variant="solid" onClick={() => handleClick()}>
        Confm Dialog
      </XButton>
      </div>
    </div>
  )
}

export default DialogPage
