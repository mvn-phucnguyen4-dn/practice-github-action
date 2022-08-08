import React from 'react'
import { Link } from 'react-router-dom'
import 'firebase/compat/auth'
import 'firebaseui/dist/firebaseui.css'
import { Button } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'
import Welcome from '../../components/Auth/Welcome'
import useForm from '../../hooks/useForm'
import { loginForm } from '../../utils/formConfig'
import './Auth.css'

const Auth = () => {
  const { renderFormInputs } = useForm(loginForm)
  const formInputs = renderFormInputs()
  return (
    <>
      <div className="container container-auth">
        <Welcome />
        <form className="form__auth">
          <Button
            className="btn btn__auth btn__google"
            type="primary"
            icon={<GoogleOutlined style={{ marginRight: '5px' }} />}
          >
            Continue with Google
          </Button>
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
