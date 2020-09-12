import React from 'react'
import { LinkButton } from "../../components"
import * as s from "./styled-menu";

const Menu = () => {
  return (
    <s.Container>
      <s.Menu>
        <div>
          <LinkButton
            text={"Animacoes"}
            path={"/animacoes"}
          />
        </div>
      </s.Menu>
    </s.Container>
  )
}

export default Menu