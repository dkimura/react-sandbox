import React from 'react'
import ReactDOM from 'react-dom'
import { AppState, Auth0Provider } from '@auth0/auth0-react'
import { ChakraProvider } from '@chakra-ui/react'

import { App, history } from './App'

const onRedirectCallback = (appState: AppState) =>
  history.replace(appState?.returnTo || window.location.pathname)

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      onRedirectCallback={onRedirectCallback}
      redirectUri={window.location.origin}
    >
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
