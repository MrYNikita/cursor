import styled from "styled-components";
import BLayout from "./BLayout";

const BLine = styled(BLayout).attrs(() => ({ as: 'div' }))`

${props => props.flexWrap && `flex-wrap: ${props.flexWrap};`}
${props => props.columnGap && `column-gap: ${props.columnGap}%;`}

&>*{
    width: 100%;
}
`;

export default BLine;