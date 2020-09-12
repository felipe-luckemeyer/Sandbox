import React from 'react'
import { LinkButton, Lista } from "../../components";
import * as s from "./styled-animacoes"
// import { motion } from "framer-motion"

const Animacoes = () => {

  return (
    <s.Container>
      <LinkButton
        text={"Voltar"}
        path={"/"}
      />

      <s.Box
        whileTap={{ scale: 0.9, x: 200 }}
      >
        Tap
      </s.Box>
      <s.Box
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
      />
      <s.Box
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
      />
      <Lista />
    </s.Container>
  )
}

export default Animacoes
