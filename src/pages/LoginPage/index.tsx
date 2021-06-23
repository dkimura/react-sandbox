import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { LoginPage } from '../../components/pages/LoginPage'

export const Login = () => {
  const { loginWithRedirect } = useAuth0()

  const onSigninClick: React.ComponentProps<typeof LoginPage>['onSigninClick'] =
    React.useCallback(
      () => loginWithRedirect({ redirectUri: window.location.origin }),
      [loginWithRedirect]
    )

  return <LoginPage onSigninClick={onSigninClick} />
}
