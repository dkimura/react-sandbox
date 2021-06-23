import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import { Spinner } from '@chakra-ui/react'

import { Login } from './pages/LoginPage'
import { Top } from './pages/TopPage'

type Props = React.ComponentProps<typeof Route>

const ProtectedRoute: React.FC<Props> = ({ component, path }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Redirect to="/login" />,
    })}
    path={path}
  />
)

const App = () => {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return (
      <Spinner
        color="blue.500"
        emptyColor="gray.200"
        size="xl"
        speed="0.65s"
        thickness="4px"
      />
    )
  }
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoute component={Top} path="/" />
      </Switch>
    </Router>
  )
}

export default App
