import styled from "styled-components";

const BTitle1 = styled.h6.attrs(props => ({ as: props.as ?? 'h6' }))`
font-weight: bold;
`;

export default BTitle1;