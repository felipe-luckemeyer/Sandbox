import React, { useState } from 'react'
import { LinkButton } from "../../components";
import * as s from "./styled-animacoes"

const Animacoes = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <s.Container>
      <LinkButton
        text={"Voltar"}
        path={"/"}
      />

      <s.Box
        whileTap={{ scale: 0.9, x: 200 }}
        transition={{ ease: "easeOut" }}
      >
        <label>
          Tap

        </label>
      </s.Box>

      <s.Box1
        layout
        hovered={hovered}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
      />

      <div style={{ display: "flex" }}>
        <s.Box2
          whileHover={{ y: -20 }}
        />
        <s.Box2
          whileHover={{ y: -20 }}
        />
        <s.Box2
          whileHover={{ y: -20 }}
        />
        <s.Box2
          whileHover={{ y: -20 }}
        />
      </div>
    </s.Container>
  )
}

export default Animacoes
