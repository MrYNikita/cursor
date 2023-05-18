import styled from "styled-components";

const BP = styled.p.attrs(props => ({ as: props.as ?? 'p' }))`
color: #fff;
`;

export default BP;