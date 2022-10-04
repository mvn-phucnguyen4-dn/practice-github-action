import React, { useContext } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import MainNavigation from './components/MainNavigation/MainNavigation.js'
import Footer from './components/Footer/Footer'
import { AuthContext } from './context/auth'
import { BrowserRouter as Router } from 'react-router-dom'
import Topic from './pages/Topic/Topic'
import EditTopic from './pages/EditTopic/EditTopic'

const MainRouter = ({ token }) => {
  let routes
  const { isLoggedIn } = useContext(AuthContext)
  if (isLoggedIn) {
    routes = (
      <>
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/topic/:topicId" exact>
            <Topic />
          </Route>
          <Route path="/topics/:id" exact>
            <EditTopic />
          </Route>
          <Redirect to="/auth" />
        </Switch>
        <Footer />
      </>
    )
  } else {
    routes = (
      <>
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/topic/:topicId" exact>
            <Topic />
          </Route>
          <Route path="/auth" exact>
            <Auth newUser={false} />
          </Route>
          <Route path="/auth/new-user" exact>
            <Auth newUser={true} />
          </Route>
          <Route path="/topics/:id" exact>
            <EditTopic />
          </Route>
          <Redirect to="/auth" />
        </Switch>
        <Footer />
      </>
    )
  }

  return <Router>{routes}</Router>
}

export default MainRouter
