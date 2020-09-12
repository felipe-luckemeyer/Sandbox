import styled from "styled-components"
import { Colors } from "./../../utils/styled-global"
import { motion } from "framer-motion"

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: #ededed;
`;

export const Box = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 2px;
    height: 70px;
    width: 70px;
    background: ${Colors.verde};
`;