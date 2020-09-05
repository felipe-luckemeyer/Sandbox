import React from 'react'
import { Switch, Route } from "react-router-dom";
import { GlobalStyled } from "./utils/styled-global"
import { Menu, Animacoes } from "./pages/"

const Routes = () => {
  return (
    <>
      <GlobalStyled />
      <Switch>
        <Route path="/animacoes">
          <Animacoes />
        </Route>
        <Route path="/">
          <Menu />
        </Route>
      </Switch>
    </>
  )
}

export default Routes
