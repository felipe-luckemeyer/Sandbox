import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../utils/styled-global"

export const Button = styled(Link)`
  background: ${Colors.azul};
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  transition: background 0.2s, color 0.2s;
  font-family: Hammersmith One;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  border: 0;
  cursor: pointer;
  padding: 0px 16px;

  :hover {
    background: white;
    color:  ${Colors.azul};
  }
`;