import { createGlobalStyle } from "styled-components";

const StyleBorders = createGlobalStyle`:root {

--border-size: 0.1vw;

--border-0: var(--border-size) solid var(--color-9);

--border-correct-0: var(--border-size) solid var(--color-correct-0);

--border-uncorrect-0: var(--border-size) solid var(--color-uncorrect-0);

--border-radius: 3px;
--border-radius-1: 5px;
--border-radius-2: 9px;
--border-radius-3: 13px;
--border-radius-icon: 50%;
--border-radius-interact: 5px;

}`;

export default StyleBorders;