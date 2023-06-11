import styled from 'styled-components';
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';

export const Container = styled(CarouselProvider)`
  display: flex;
  align-items: center;
`;
export const SlideContainer = styled(Slider)`
  height: 100px;
  width: 200px;
`;
export const Voltar = styled(ButtonBack)`
  height: 50px;
  width: 50px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: none;
`;
export const Proximo = styled(ButtonNext)`
  height: 50px;
  width: 50px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: none;
`;
