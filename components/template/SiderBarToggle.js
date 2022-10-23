import { useSelector, useDispatch } from 'react-redux'
import { setOpenDrawer } from '../../store/sidebar/sidebarSlice'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'

const SideBarToggle = (props) => {
const {draweropen } = useSelector((state) => state.sidebar)
  const dispatch = useDispatch()

  const onCollape = () => {
    dispatch(setOpenDrawer(!draweropen))
  }

  return (
    <>

        <button
          type="button"
          className=" border-gray-200 px-4 text-gray-500 focus:outline-none"
          onClick={onCollape}
        > 
          <span className="sr-only">Open sidebar</span>
          <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
        </button>

    </>
  )
}

export default SideBarToggle
