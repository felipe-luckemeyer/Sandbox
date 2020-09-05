import React from 'react'
import { MenuButton } from "../../components";
import * as s from "./styled-animacoes"


const Animacoes = () => {
  return (
    <s.Container>
      <MenuButton
        text={"Voltar"}
        path={"/"}
      />

      <s.Box
        animate={{ x: 20 }}
      />

    </s.Container>
  )
}

export default Animacoes
