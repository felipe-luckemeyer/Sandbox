import React from 'react'
import { MenuButton } from "../../components"
import * as s from "./styled-menu";

const Menu = () => {
  return (
    <s.Container>
      <s.Menu>
        <MenuButton
          text={"Animacoes"}
          path={"/animacoes"}
        />
      </s.Menu>
    </s.Container>
  )
}

export default Menu