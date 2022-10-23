import Image from 'next/image'

const MAppSlider = (props) => {
  return (
    <div className='py-2 px-2 rounded'>
      <Image
        height="175"
        width='500'
        alt="x"
        className='rounded-md'
        src="https://cdn.irscloud.id/templateimg/banner.png"
      ></Image>
    </div>
  )
}

export default MAppSlider
