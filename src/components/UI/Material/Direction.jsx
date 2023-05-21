import styled from "styled-components";
import BLayout from "../../basics/BLayout";
import BWrapper from "../../basics/BWrapper";
import { ReactComponent as DirectionSVG } from '../../../svg/symbols/arrow.svg';

const Direction = ({ right, onClick }) => {
    
    
    
    return (
        
        <Wrapper right={right} onClick={onClick}>
            <Layout>
                <Arrow />
            </Layout>
        </Wrapper>
    );
    
};

export default Direction;

const Arrow = styled(DirectionSVG)`

fill: var(--color-4);
border-radius: var(--border-radius-1);
transition: fill 0s, background-color 0.5s !important;

&:hover {
    fill: var(--color-0);
    background-color: var(--color-1);
}

`;
const Wrapper = styled(BWrapper)`

width: 100%;
grid-area: left;

${props => props.right && `rotate: 180deg; grid-area: right;` }

`;
const Layout = styled(BLayout)`



`;