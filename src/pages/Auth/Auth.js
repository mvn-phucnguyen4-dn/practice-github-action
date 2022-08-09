import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import 'firebase/compat/auth'
import 'firebaseui/dist/firebaseui.css'
import { Button } from 'antd'
import Welcome from '../../components/Auth/Welcome'
import useForm from '../../hooks/useForm'
import { loginForm } from '../../utils/formConfig'
import { auth } from '../../utils/initFirebase'
import { getAuth } from 'firebase/auth'
import useHttpClient from '../../hooks/useHttpClient'
import { signInWithEmailAndPassword } from 'firebase/auth'
import ErrorModal from '../../components/Modal/ErrorModal'
import { AuthContext } from '../../context/auth'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import './Auth.css'

import GoogleLogin from '../../components/Auth/GoogleLogin'

const Auth = () => {
  const { renderFormInputs, renderFormValues, isFormValid } = useForm(loginForm)
  const { login } = useContext(AuthContext)
  const formInputs = renderFormInputs()
  const formValues = renderFormValues()
  const history = useHistory()
  const { sendReq, error, clearError, setError, isLoading, setIsLoading } =
    useHttpClient()

  const loginWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const handleAuthSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = formValues
    setIsLoading(true)
    loginWithEmailPassword(email, password)
      .then(async (user) => {
        if (user) {
          const auth = getAuth()
          const currentUser = auth.currentUser
          const tokenId = await currentUser.getIdToken()
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
            history.push('/')
          }
        }
      })
      .catch((error) => {
        setIsLoading(false)
        setError(error.message)
        history.push('/auth')
      })
  }

  return (
    <>
      <ErrorModal error={error} onClose={clearError} />
      {isLoading ? <LoadingSpinner asOverlay={isLoading} /> : null}
      <div className="container container-auth">
        <Welcome />
        <form className="form__auth">
          <GoogleLogin />
          <div className="form__options">
            <div className="registration__hr">
              <span className="registration__hr-label">
                Have a password? Continue with your email address
              </span>
            </div>
            {formInputs}

            <Button
              className="btn btn__auth btn__auth--mode"
              onClick={handleAuthSubmit}
            >
              Login
            </Button>
            <Link className="btn btn__auth btn__auth--switch">
              I forgot my password
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Auth
