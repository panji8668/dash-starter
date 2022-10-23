import Image from 'next/image'

const newslist = [
  {
    id: 2,
    title: 'kidal',
    subtitle: 'kidal',
    status: 1,
    content: '<p>user kidal</p>',
    tumb: '',
    image:
      'https://res.cloudinary.com/dragnade/image/upload/v1648995618/ynczdnvfttag2l2xyxhg.jpg',
  },
  {
    id: 1,
    title: 'IRS Mendunia',
    subtitle: 'IRSX',
    status: 1,
    content: '',
    tumb: '',
    image:
      'https://res.cloudinary.com/dragnade/image/upload/v1652848988/swm1rsa3ikko5yikgiap.jpg',
  },
]

const MAppNewsPanel = (props) => {
  return (
    <div className="px-2 py-2">
      <h3 className='text-lg text-gray-700'>News</h3>
      <div className="flex">
        {newslist.map((news, index) => {
          return (
            <div key={news.id} className="border rounded-md mx-1 overflow-hidden">
            <div className='overflow-hidden'>
               <Image
                width="150"
                height="80"
                layout='fixed'
                className=''
                alt={news.title}
                src={news.image}
              />
            </div>
              <span className='text-sm px-2'>{news.title}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MAppNewsPanel
