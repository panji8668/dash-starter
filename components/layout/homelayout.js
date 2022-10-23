import Header from '../template/Header'
import SideBar from '../template/SideBar'
import XSideBar from '../template/XSideBar'

const HomeLayout = (props) => {
  return (
    <div className="flex">
      <XSideBar />
      <div className="h-full flex flex-auto flex-col">
        <Header />
        <main className="flex-1">
          <div className="px-4 sm:px-1 md:px-4">{props.children}</div>
        </main>
      </div>
    </div>
  )
}

export default HomeLayout
