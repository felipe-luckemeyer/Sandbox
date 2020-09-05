import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../utils/styled-global"

export const Button = styled(Link)`
  width: 150px;
  height: 40px;
  background: ${Colors.azul};
  border: 0;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  transition: background 0.2s, color 0.2s;
  display: grid;
  place-items: center;
  font-family: Hammersmith One;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  :hover {
    background: white;
    color:  ${Colors.azul};
  }
`;