import styled from "styled-components";

const BasicTitle = styled.h6.attrs(props => ({ as: props.as ?? 'h6' }))`
font-weight: bold;
`;

export default BasicTitle;