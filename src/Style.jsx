import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`
    
html, body, #root {
    width: 100%;
    height: 100%;
}
:not(#root, body, html) {
    transition: all 0.5s;
}

img {
    object-fit: cover;
}

`;