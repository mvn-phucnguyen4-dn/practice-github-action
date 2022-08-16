import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { GoogleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { auth } from '../../utils/initFirebase'
import { getAuth } from 'firebase/auth'
import useHttpClient from '../../hooks/useHttpClient'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import ErrorModal from '../../components/Modal/ErrorModal'
import { AuthContext } from '../../context/auth'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const GoogleLogin = () => {
  const { sendReq, clearError, setError, error, isLoading, setIsLoading } =
    useHttpClient()
  const { login } = useContext(AuthContext)
  const history = useHistory()
  const signWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const handleSignGoogle = () => {
    setIsLoading(true)
    signWithGoogle()
      .then(async (user) => {
        if (user) {
          const auth = getAuth()
          console.log(auth.currentUser)
          const currentUser = auth.currentUser
          const tokenId = await currentUser.getIdToken()
          // console.log(tokenId)
          const response = await sendReq(
            `${process.env.REACT_APP_BASE_URL}/users/login`,
            'POST',
            JSON.stringify({
              tokenId,
            }),
            {
              'Content-Type': 'application/json',
            },
          )
          if (response.data) {
            const { accessToken, email, displayName, photoURL } = currentUser
            const { refreshToken } = currentUser.stsTokenManager
            login(
              {
                accessToken,
                refreshToken,
                photoURL,
                displayName,
                email,
                id: response.data.id,
              },
              new Date(currentUser.stsTokenManager.expirationTime),
            )
            // history.push('/auth')
          }
        }
      })
      .catch((error) => {
        setError(error.message)
        // history.push('/auth')
      })
  }
  return (
    <>
      <ErrorModal error={error} onClose={clearError} />
      {isLoading ? <LoadingSpinner asOverlay={isLoading} /> : null}
      <Button
        className="btn btn__auth btn__google"
        type="primary"
        onClick={handleSignGoogle}
        icon={<GoogleOutlined style={{ marginRight: '5px' }} />}
      >
        Continue with Google
      </Button>
    </>
  )
}

export default GoogleLogin
