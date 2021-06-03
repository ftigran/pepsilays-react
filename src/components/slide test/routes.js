import React from 'react'
import {Route, Switch} from 'react-router-dom'
import useReactRouter from 'use-react-router'
import P1 from './page1'
import P2 from './page2'
const Routes = ({}) => {
  const {location} = useReactRouter()
  const {search} = location

  return (
    <>
      <Switch location={location}>
        <Route key="index" path="/" render={() => <P1 location={location} />} exact />
        <Route key="faq" path={`${basename}/faq`} render={() => <P2 location={location} />} exact />
      </Switch>
    </>
  )
}

export default Routes
