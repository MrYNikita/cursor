import styled from "styled-components";
import BWrapper from "./BWrapper";
import BLayout from "./BLayout";

const BLabel = ({ text }) => {
    
    return (
        
        <Wrapper>
            <Layout>
                {text}
            </Layout>
        </Wrapper>
    );
    
};

export default BLabel;

const Wrapper = styled(BWrapper)`

top: 7vh;
width: 10vw;
height: min-content;
padding: 1vh 1vw;
position: absolute;
border: var(--border-0);
background-color: var(--color-2);
box-shadow: var(--box-shadow-1);
border-radius: var(--border-radius);
animation: 0.5s hide reverse forwards, 0.5s move;

`;
const Layout = styled(BLayout)`

text-align: center;

`;