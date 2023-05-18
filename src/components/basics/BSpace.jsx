import styled from "styled-components";

const BSpace = styled.div`

${props => props.vis ? `background-color: red;` : ``}
${props => props.width ? `width: ${props.width};` : `width: 100%;`}
${props => props.height ? `height: ${props.height};` : `height: 100%;`}

`;

export default BSpace;