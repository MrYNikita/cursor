import styled from "styled-components";
import BWrapper from "./BWrapper";

const BLayout = styled(BWrapper).attrs(props => ({ as: props.as ?? 'section' }))`
text-align: center;
`;

export default BLayout;