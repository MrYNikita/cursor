import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";

const Main = (props) => {

    return (
        <Wrapper {...props}>
            <Layout>
                {props.children}
            </Layout>
        </Wrapper>
    );

};

export default Main;

const Layout = styled(BLayout)`
`;
const Wrapper = styled(BWrapper)`
z-index: 0;
position: relative;
grid-area: main;
animation: 0.5s hide reverse forwards;
`;