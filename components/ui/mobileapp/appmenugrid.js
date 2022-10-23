import Image from 'next/image'

const menulist = [
  {
    id: 9,
    nama: 'Produk Digital',
    icon: '',
    home: 1,
    status: 1,
    menulist: [
      {
        id: 1,
        label: 'Pulsa',
        tipe: 3,
        status: 1,
        idoperator: '8,10,13,14,24,25,32',
        idproduk: '',
        icon:
          'https://res.cloudinary.com/dragnade/image/upload/v1665389884/z8ctgd8lailrfvhftocg.png',
        url: '',
        home: 1,
        needkyc: 0,
        createat: '10/10/2022 3:18:10 PM',
        updateat: '10/12/2022 11:34:16 AM',
      },
      {
        id: 2,
        label: 'HP Pasca',
        tipe: 3,
        status: 1,
        idoperator: '13,14,24,25',
        idproduk: '',
        icon:
          'https://res.cloudinary.com/dragnade/image/upload/v1665389932/lhmy4e31k9bsdre4q6co.png',
        url: '',
        home: 1,
        needkyc: 0,
        createat: '10/10/2022 3:18:41 PM',
        updateat: '10/12/2022 11:34:32 AM',
      },
      {
        id: 3,
        label: 'Paket Data',
        tipe: 3,
        status: 1,
        idoperator: '13,14,24,25',
        idproduk: '',
        icon:
          'https://res.cloudinary.com/dragnade/image/upload/v1665389972/hdvh2icgh3hlaq6rd1be.png',
        url: '',
        home: 1,
        needkyc: 0,
        createat: '10/10/2022 3:19:34 PM',
        updateat: '10/12/2022 11:35:02 AM',
      },
      {
        id: 4,
        label: 'Paket SMS',
        tipe: 3,
        status: 1,
        idoperator: '13,14,24',
        idproduk: '',
        icon:
          'https://res.cloudinary.com/dragnade/image/upload/v1665390065/jnjvan23haaub6zakeml.png',
        url: '',
        home: 1,
        needkyc: 0,
        createat: '10/10/2022 3:21:13 PM',
        updateat: '10/12/2022 11:35:21 AM',
      },
      {
        id: 5,
        label: 'Paket Telepon',
        tipe: 3,
        status: 1,
        idoperator: '13,14,24,25',
        idproduk: '',
        icon:
          'https://res.cloudinary.com/dragnade/image/upload/v1665390117/nyyegigviarn9img5fek.png',
        url: '',
        home: 1,
        needkyc: 0,
        createat: '10/10/2022 3:22:00 PM',
        updateat: '10/12/2022 11:35:33 AM',
      },
      {
        id: 6,
        label: 'PGN',
        tipe: 3,
        status: 1,
        idoperator: '14,24,13,10',
        idproduk: '',
        icon:
          'https://res.cloudinary.com/dragnade/image/upload/v1665390165/jyb16wsgs99cfxm1wqve.png',
        url: '',
        home: 1,
        needkyc: 0,
        createat: '10/10/2022 3:22:34 PM',
        updateat: '10/12/2022 11:35:49 AM',
      },
      {
        id: 7,
        label: 'PLN',
        tipe: 4,
        status: 1,
        idoperator: '',
        idproduk: 'PLN',
        icon:
          'https://res.cloudinary.com/dragnade/image/upload/v1665390268/jdntyd8ptkgowusuwai5.png',
        url: '',
        home: 1,
        needkyc: 0,
        createat: '10/10/2022 3:24:31 PM',
        updateat: '10/10/2022 3:24:31 PM',
      },
      {
        id: 8,
        label: 'Lainnya',
        tipe: 10,
        status: 1,
        idoperator: '',
        idproduk: '',
        icon:
          'https://res.cloudinary.com/dragnade/image/upload/v1665390316/ccgyfqdk0vmaunwhklfb.png',
        url: '',
        home: 1,
        needkyc: 0,
        createat: '10/10/2022 3:25:25 PM',
        updateat: '10/10/2022 3:40:40 PM',
      },
    ],
  },
]

const MAppMenuGrid = (props) => {
  return (
    <div className="px-2 pt-2">
      {menulist.map((grup, gindex) => {
        return (
          <div key={grup.id} className=''>
            <div className="text-gray-700 text-md">
              <span>{grup.nama}</span>
            </div>
            <div className='grid grid-cols-4 mt-2'>
              {grup.menulist.map((menu) => {
                return (
                  <div key={menu.id} className="grid justify-items-center cursor-pointer">
                
                      <Image
                        alt={menu.label}
                        src={menu.icon}
                        width="48"
                        height="48"
                      ></Image>
               
                    <span className="text-gray-900 text-xs text-center">{menu.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MAppMenuGrid
