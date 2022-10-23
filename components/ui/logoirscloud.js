import Image from 'next/image'
import React, { useState, useEffect } from 'react'

function LogoIRSCloud(props) {
  const [state, setState] = useState('')

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Image
        width="200"
        height="87"
        className="mx-auto h-12 w-auto"
        src="https://dash.irscloud.id/_nuxt/img/logoirscloud.f9d6644.png"
        alt="Your Company"
      />
    </div>
  )
}

export default LogoIRSCloud
