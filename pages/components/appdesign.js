import {
  MAppBar,
  MAppSlider,
  NavBottom,
  MBalancePanel,
  MSystemBar,
  MAppMenuGrid,
  MAppView,
  AppEditor,
} from '../../components/ui'

const AppDesignPage = () => {
  return (
    <div className="">
      <h1 className="text-2xl text-gray-700 mt-2">Mobile App Editor</h1>
      <div className="flex justify-between mt-2">
                <AppEditor></AppEditor>

                  <MAppView></MAppView>

      </div>
    </div>
  )
}

export default AppDesignPage
