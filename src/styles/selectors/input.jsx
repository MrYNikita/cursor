import { createGlobalStyle } from "styled-components";

const StyleInput = createGlobalStyle`

input[type="password"]::-ms-reveal,
input[type="password"]::-ms-clear {
    display: none;
}

`;

export default StyleInput;