import styled from "styled-components";

const BText = styled.p.attrs(props => { return { as: props.as ?? 'p' }})`

`;

export default BText;