import styled from "styled-components"
import { Colors } from "./../../utils/styled-global"
import { motion } from "framer-motion"

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: #ededed;
`;

export const Box = styled(motion.div)`
border-radius: 2px;
    height: 100px;
    width: 100px;
    background: ${Colors.verde};
`;