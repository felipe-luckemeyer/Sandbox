import React from "react";
import * as s from "./styled-link-button";

const MenuButton = ({ text, path, disabled }) => {
  return <s.Button to={path}>{text}</s.Button>;
};

export default MenuButton;