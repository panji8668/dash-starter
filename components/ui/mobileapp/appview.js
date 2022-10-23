import MBalancePanel from './appbalancepanel'
import MAppBar from './appbar'
import MAppMenuGrid from './appmenugrid'
import MAppNewsPanel from './appnews'
import MAppSlider from './appslider'
import MSystemBar from './appsystembar'
import NavBottom from './navbottom'

const MAppView = (props) => {
  return (
    <div
      style={{ height: '650px','border-width': '10px'  }}
      className="w-80 rounded-lg relative mx-8 my-8 border-gray-900"
    >
    <MSystemBar></MSystemBar>
      <div style={{height:'600px'}}  className="scaffold">
        <MAppBar></MAppBar>
        <MAppSlider></MAppSlider>
        <MBalancePanel></MBalancePanel>
        <div className="mapp-banner"></div>
        <div className="mapp-balance-panel"></div>
        <MAppMenuGrid></MAppMenuGrid>
        <MAppNewsPanel></MAppNewsPanel>
      </div>

      <div className="mapp-footer absolute inset-x-0 bottom-0">
        <NavBottom></NavBottom>
      </div>
    </div>
  )
}

export default MAppView
