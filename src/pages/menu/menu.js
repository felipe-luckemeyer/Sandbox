import React from 'react';
import { Slide } from 'pure-react-carousel';
import { LinkButton, Carrossel } from '../../components';
import * as s from './styled-menu';

const Menu = () => {
  return (
    <s.Container>
      <s.Menu>
        <div>
          <LinkButton text={'Animacoes'} path={'/animacoes'} />
        </div>
        <Carrossel>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Carrossel>
      </s.Menu>
    </s.Container>
  );
};

export default Menu;
