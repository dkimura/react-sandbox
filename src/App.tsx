import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'

import { Login } from './pages/LoginPage'

const AppRoute = () => (
  <Route path="/">
    <h1>Hello</h1>
  </Route>
)

const PrivateRoute = withAuthenticationRequired(AppRoute, {
  onRedirecting: () => <Redirect to="/login" />,
})

const App = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute />
    </Switch>
  </Router>
)

export default App
