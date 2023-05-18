import { createGlobalStyle } from "styled-components";

const StyleAnimations = createGlobalStyle`:root {

@keyframes move {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0%);
    }
}
@keyframes hide {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

}`;

export default StyleAnimations;