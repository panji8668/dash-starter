import { XButton } from '../../ui'

const GeneralPanel = (props) => {
  return (
    <div className="border rounded">
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Profile Overview
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <form action="#" method="POST" className="space-y-6 mt-4">
          <div className="sm:overflow-hidden sm:rounded-md">
            <div className="grid grid-cols-1 gap-1 px-6">
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="cc-given-name"
                  className="mt-2 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm sm:text-sm"
                />
              </div>
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="cc-given-name"
                  className="mt-2 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm sm:text-sm"
                />
              </div>
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="cc-given-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm sm:text-sm"
                />
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 mt-4">
              <XButton variant="solid" type="submit" size="md" shape="round">
                Save
              </XButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default GeneralPanel
