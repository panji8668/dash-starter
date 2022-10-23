import { useSelector, useDispatch } from 'react-redux'
import { setUser, initialState } from '../../store/auth/userSlice'
import {
  onSignInSuccess,
  onSignOutSuccess,
} from '../../store/auth/sessionSlice'
import { useRouter } from 'next/router'
import appConfig from '../../config/app.config'

function useAuth() {
  const router = useRouter()
  const dispatch = useDispatch()

  const { token, signedIn } = useSelector((state) => state.auth.session)

  const signIn = async ({ email, password }) => {
    console.log(email, password)
    setTimeout(() => {
      dispatch(onSignInSuccess('dummytoken'))
      dispatch(
        setUser({
          avatar: '',
          username: 'panjipramana',
          email: 'panji@aviana.co.id',
          role: ['admin'],
        }),
      )
      router.push(appConfig.authenticatedEntryPath)
    }, 1000)
  }
  const handleSignOut = () => {
    dispatch(onSignOutSuccess())
    dispatch(setUser(initialState))
    router.push(appConfig.unAuthenticatedEntryPath)
  }
  const signOut = async () => {
    handleSignOut()
  }

  return {
    authenticated: token && signedIn,
    signIn,
    signOut,
  }
}

export default useAuth
