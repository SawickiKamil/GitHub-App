import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import UserList from './components/Views/UserList'
import UserProfile from './components/Views/UserProfile'

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={UserList} />
      <Route exact path="/user/:username" component={UserProfile} />
    </Switch>
  )
}
