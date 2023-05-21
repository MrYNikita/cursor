import styled from "styled-components";
import BLayout from "../../basics/BLayout";
import BWrapper from "../../basics/BWrapper";

const Index = ({ count, index, setTaskIndex }) => {

    const points = new Array(count).fill(0).map((point, key) => <Point
    
        key={key}
        active={index === key ? true : false}
        onClick={() => setTaskIndex(key)}
        
    />);

    return (
        <Wrapper>
            <Layout>
                {points.length && points}
            </Layout>
        </Wrapper>
    );

};

export default Index;

const Point = styled.div`

    width: 1vw;
    height: 1.9vh;
    border-radius: 50%;

    ${props => props.active ? `background-color: var(--color-5);` : `background-color: var(--color-0);`}

    &:hover {
        background-color: var(--color-8);
    }

`;
const Layout = styled(BLayout)`
gap: 0 1vw;
border: var(--border-0);
box-shadow: var(--box-shadow-1);
border-radius: var(--border-radius-1);
background-color: var(--color-3);
`;
const Wrapper = styled(BWrapper)`
padding: 1vh 30vw 1vh;
grid-area: index;
`;