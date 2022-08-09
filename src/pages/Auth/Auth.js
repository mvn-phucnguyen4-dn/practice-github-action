import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import 'firebase/compat/auth'
import 'firebaseui/dist/firebaseui.css'
import { Button } from 'antd'
import Welcome from '../../components/Auth/Welcome'
import useForm from '../../hooks/useForm'
import { loginForm } from '../../utils/formConfig'
import './Auth.css'

import GoogleLogin from '../../components/Auth/GoogleLogin'

const Auth = () => {
  const { renderFormInputs } = useForm(loginForm)
  const formInputs = renderFormInputs()

  return (
    <>
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

            <Button className="btn btn__auth btn__auth--mode">Login</Button>
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
