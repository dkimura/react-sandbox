import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import { Spinner } from '@chakra-ui/react'
import { createBrowserHistory } from 'history'

import { Login } from './pages/LoginPage'
import { Top } from './pages/TopPage'

type Props = React.ComponentProps<typeof Route>

export const history = createBrowserHistory()

const ProtectedRoute: React.FC<Props> = ({ component, ...props }) =>
  component ? (
    <Route
      {...props}
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <span>ログインページへリダイレクトします</span>,
      })}
    />
  ) : null

const AppRoute = () => {
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
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoute component={Top} exact path="/" />
      </Switch>
    </Router>
  )
}

export const App = () => {
  const { getAccessTokenSilently } = useAuth0()

  const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql' })

  const authLink = setContext(async () => {
    const token = await getAccessTokenSilently()

    return {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
  })

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  })

  return (
    <ApolloProvider client={client}>
      <AppRoute />
    </ApolloProvider>
  )
}
