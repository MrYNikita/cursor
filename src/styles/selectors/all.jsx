import { createGlobalStyle } from "styled-components";

const StyleAll = createGlobalStyle`

* {
    color: var(--color-text);
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    overflow: hidden;
    box-sizing: border-box;
    user-select: none;
    font-family: Arial, Helvetica, sans-serif;
}
*::selection {
    color: var(--color-text-selection);
    caret-color: var(--color-text-input);
    background-color: var(--color-text-selection-background);
}

`;

export default StyleAll;