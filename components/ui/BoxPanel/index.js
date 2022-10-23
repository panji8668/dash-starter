import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const BoxPanel = React.forwardRef(({ title, description,children,className }, ref) => {

    const defaultclass= 'border rounded-lg'

  return (
    <div className={classNames(defaultclass,className)}>
      <div className="border-b border-gray-200 px-4 py-4 sm:px-4">
        <div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="">
            <h3 className="text-lg leading-6">
              {title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className=''>
            {children}
      </div>
    </div>
  )
})

BoxPanel.displayName = 'BoxPanel'
BoxPanel.propTypes = {
      title: PropTypes.string,
  description: PropTypes.string,
}
BoxPanel.defaultProps = {
  title: 'title',
  description: 'description',
}
export default BoxPanel
