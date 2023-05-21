import styled from "styled-components";
import BText from "./BText";

const BTitle = styled(BText).attrs(() => ({ as: 'h3' }))`
    
    font-weight: bold;
    font-family: "Times New Roman", Times, serif;
    letter-spacing: 3px;

`;

export default BTitle;