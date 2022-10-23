import { XButton } from '../../ui'
import BoxPanel from '../../ui/BoxPanel'

const SecurityPanel = (props) => {
  return (
    <div>
      <BoxPanel
        title="Change Password"
        description="This information will be displayed"
        className=""
      >
        <form className="px-4 py-4">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700"
          >
            Current Password
          </label>
          <input
            type="password"
            placeholder="type current password"
            className="mt-2 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm sm:text-sm"
          ></input>
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700 mt-2"
          >
            New Password
          </label>
          <input
            type="password"
            placeholder="type current password"
            className="mt-2 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm sm:text-sm"
          ></input>
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700 mt-2"
          >
            Confm New Password
          </label>
          <input
            type="password"
            placeholder="type current password"
            className="mt-2 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm sm:text-sm"
          ></input>
            <div className='mt-4 relative h-8'>
                 <XButton variant="solid" type="submit" size="md" shape="round" className='absolute right-0'>Change Password</XButton>
            </div>
        </form>
      </BoxPanel>
      <BoxPanel
        title="Two-step verification"
        description="Keep your account secure with authentication step."
        className="mt-4"
      >
        BoxPanel
      </BoxPanel>
    </div>
  )
}

export default SecurityPanel
