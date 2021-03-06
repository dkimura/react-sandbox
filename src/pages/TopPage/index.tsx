import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { TopPage } from '../../components/pages/TopPage'

export const Top = () => {
  const { logout, user } = useAuth0()

  const onClickLogout: React.ComponentProps<typeof TopPage>['onLogoutClick'] =
    React.useCallback(
      () => logout({ returnTo: `${window.location.origin}/login` }),
      [logout]
    )

  return <TopPage onLogoutClick={onClickLogout} user={user} />
}
