import React, { memo, useMemo, lazy, Suspense } from 'react'
import useAuth from '../../utils/hooks/useAuth'
import Loading from '../shared/Loading'

const Layout = (props) => {
  const { authenticated } = useAuth()

  const AppLayout = useMemo(() => {
    if (authenticated) {
      return lazy(() => import('./homelayout'))
    }
    return lazy(() => import('./authlayout'))
  }, [authenticated])

  return (
    <Suspense
      fallback={
        <div className="flex flex-auto flex-col h-[100vh]">
            <Loading loading={true} />
        </div>
      }
    >
      <AppLayout>
        {props.children}
      </AppLayout>
    </Suspense>
  )
}

export default memo(Layout)
