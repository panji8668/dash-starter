// **  Next Import
import { Router } from 'next/router'

// ** Loader Import
import NProgress from 'nprogress'

// ** Layout Import
import Layout from '../components/layout'
import '../styles/globals.css'

// ** redux state
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '../store'

import toast, { Toaster } from 'react-hot-toast'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeError', () => {
  NProgress.done()
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
            <Toaster />
          <Layout>
            <Component {...pageProps} />
          </Layout>

      </PersistGate>
    </Provider>
  )
}

export default MyApp
