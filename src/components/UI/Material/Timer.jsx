import styled from "styled-components";
import BLayout from "../../basics/BLayout";
import BWrapper from "../../basics/BWrapper";

const Timer = () => {

    return (
        <Wrapper>
            <Layout>
                <Label>00:00:00</Label>
            </Layout>
        </Wrapper>
    );

};

export default Timer;

const Layout = styled(BLayout)`

width: min-content;
height: min-content;
padding: 0.5vh 1vw;
border-radius: var(--border-radius-1);
background-color: var(--color-4);

`;
const Wrapper = styled(BWrapper)`


`;
const Label = styled.p`

font-size: 1.1rem;
font-family: 'Courier New', Courier, monospace;

`;