import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";

const Lista = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      opacity: 0.5,
      x: 20,
      transition: { delay: i * 0.3 },
    }))
  }, [controls])

  return (
    <ul>
      <motion.li custom={0} animate={controls}>ahh</motion.li>
      <motion.li custom={1} animate={controls}>ahh</motion.li>
      <motion.li custom={2} animate={controls}>ahh</motion.li>
    </ul>
  )
}

export default Lista
