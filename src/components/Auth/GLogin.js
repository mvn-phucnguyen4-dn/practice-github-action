import React, { useEffect, useState } from "react";
import useHttpClient from "../../hooks/useHttpClient";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const GLogin = (props) => {
  const [showLoginButton, setShowLoginButton] = useState(true);
  const { setError } = useHttpClient();

  // Configure Firebase.
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // ...
  };

  firebase.initializeApp(config);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (user) {
          console.log(user, "user in GLogin");
          props.onLogin(user);
          setShowLoginButton(false);
        } else {
          setError("Login with Google failed. Please try again!", user);
        }
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };
  return (
    <div className="auth__google">
      {(showLoginButton && (<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />))}
    </div>
  );
};

export default GLogin;
