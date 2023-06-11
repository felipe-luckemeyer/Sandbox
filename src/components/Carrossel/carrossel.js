import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { motion } from 'framer-motion';
import * as s from './styled-carrossel';
const Carrossel = ({ children }) => {
  return (
    <s.Container naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3}>
      <motion.div whileHover={{ x: -5 }}>
        <s.Voltar>voltar</s.Voltar>
      </motion.div>
      <s.SlideContainer>{children}</s.SlideContainer>
      <motion.div whileHover={{ x: 5 }}>
        <s.Proximo>proximo</s.Proximo>
      </motion.div>
    </s.Container>
  );
};

export default Carrossel;
