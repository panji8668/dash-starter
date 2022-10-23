import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Loading from '../../shared/Loading'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const XTable = (props) => {
  const { data, totaldata, limitview, headers, loading } = props

  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-md">
      <Loading loading={loading} type="cover">
        <table className="min-w-full table-fixed divide-y divide-gray-300">
          <thead className="bg-gray-50">
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                {header.label}
              </th>
            ))}
          </thead>

          <tbody
            className={`${
              data.length > 0 ? 'divide-y divide-gray-200' : ''
            } bg-white`}
          >
            {!data ||
              (data.length == 0 && (
                <>
                  <tr>
                    <td colSpan={headers.length}>
                      <p className="text-sm text-gray-500 py-2 text-center"></p>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={headers.length}>
                      <p className="text-sm text-gray-500 py-4 text-center">
                        No Data to Display
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={headers.length}>
                      <p className="text-sm text-gray-500 py-2 text-center"></p>
                    </td>
                  </tr>
                </>
              ))}

            {data.map((dat, index) => (
              <tr key={index} className="hover:bg-gray-100">
                {headers.map((header, i) => (
                  <>
                    {header.render && header.render(dat)}
                    {!header.render && (
                      <td
                        key={i}
                        className={classNames(
                          header.class,
                          `whitespace-nowrap py-3 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6`,
                        )}
                      >
                        {dat[header.key]}
                      </td>
                    )}
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Loading>
      <div
        className={`${
          data.length == 0 ? 'hidden' : ''
        }  flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6`}
      >
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">10</span> of{' '}
              <span className="font-medium">{totaldata}</span> results
            </p>
          </div>
          <div className="flex flex-1 justify-between sm:justify-end">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500  focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

XTable.defaultProps = {
  loading: false,
  headers: [],
  class: '',
  data: [],
  totaldata: 0,
  limitview: 10,
}

XTable.propTypes = {
  class: PropTypes.string,
  loading: PropTypes.bool,
  totaldata: PropTypes.number,
  limitview: PropTypes.number,
  data: PropTypes.array,
  headers: PropTypes.array,
}

export default XTable
