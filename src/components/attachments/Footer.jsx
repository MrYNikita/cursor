import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";

const Footer = () => {

    return (
        <Wrapper>
            <Layout>

            </Layout>
        </Wrapper>
    );

};

export default Footer;

const Layout = styled(BLayout)`
`;
const Wrapper = styled(BWrapper)`
grid-area: footer;
background-color: var(--color-3);
`;