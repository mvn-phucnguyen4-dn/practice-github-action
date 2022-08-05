import React, { useContext, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth'
import { useHttpClient } from '../../hooks/useHttpClient'
import GLogin from '../../components/Auth/GLogin'
import useForm from '../../hooks/useForm'
import { loginForm, signupForm } from '../../utils/formConfig'
import { appendData } from '../../utils'
import Welcome from '../../components/Auth/Welcome'
import './Auth.css'
import ErrorModal from '../../components/Modal/ErrorModal'

const Auth = ({ newUser }) => {
  const { renderFormInputs, renderFormValues, isFormValid, setForm } =
    useForm(signupForm)

  useEffect(() => {
    if (!newUser) {
      setForm(loginForm)
    } else {
      setForm(signupForm)
    }
  }, [newUser, setForm])

  const formValues = renderFormValues()
  const formInputs = renderFormInputs()

  const { login } = useContext(AuthContext)
  const history = useHistory()

  const { sendReq, error, clearError } = useHttpClient()

  //handle google auth
  const handleGoogleAuth = async (user) => {
    const tokenId = await user.getIdToken()
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
      const { accessToken, email, displayName, photoURL } = user
      const { refreshToken } = user.stsTokenManager
      login(
        {
          accessToken,
          refreshToken,
          photoURL,
          displayName,
          email,
          id: response.data.id,
        },
        new Date(user.stsTokenManager.expirationTime),
      )
      history.push('/')
    }
  }

  const handleAuthSubmit = async (evt) => {
    evt.preventDefault()
    try {
      let responseData
      if (newUser) {
        const formData = appendData(formValues)
        responseData = await sendReq(
          `${process.env.REACT_APP_BASE_URL}/users/signup`,
          'POST',
          formData,
        )
      } else {
        responseData = await sendReq(
          `${process.env.REACT_APP_BASE_URL}/users/login`,
          'POST',
          JSON.stringify(formValues),
          {
            'Content-Type': 'application/json',
          },
        )
      }
      login(responseData.user)
      history.push('/')
    } catch (err) {}
  }

  return (
    <>
      <ErrorModal error={error} onClose={clearError} />
      <div className="container container-auth">
        <Welcome />
        <div className="auth__social">
          <GLogin onLogin={handleGoogleAuth} />
        </div>

        <form className="form__auth">
          <div className="form__options">
            <p>Or</p>
            <h2>
              {newUser
                ? 'Create a New Account'
                : 'Log in using an Existing Account'}
            </h2>
            {formInputs}

            <button
              onClick={handleAuthSubmit}
              className="btn btn__auth btn__auth--mode"
              disabled={!isFormValid()}
            >
              {newUser ? 'Create account' : 'Login'}
            </button>
            <Link
              className="btn btn__auth btn__auth--switch"
              to={newUser ? '/auth' : '/auth/new-user'}
            >
              {newUser ? 'Login' : 'Create account'}
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Auth
