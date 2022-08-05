import React, { useEffect } from 'react'
import useHttpClient from '../../hooks/useHttpClient'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { getAuth } from 'firebase/auth'

const GLogin = (props) => {
  const { setError } = useHttpClient()

  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  }

  firebase.initializeApp(config)

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (user) {
          const auth = getAuth()
          const currentUser = auth.currentUser
          console.log(currentUser)
          props.onLogin(currentUser)
        } else {
          setError('Login with Google failed. Please try again!', user)
        }
      })
    return () => unregisterAuthObserver()
  }, [])

  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/auth',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  }
  return (
    <div className="auth__google">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  )
}

export default GLogin
