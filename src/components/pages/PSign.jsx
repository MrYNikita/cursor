import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";
import Sign from "../unique/Sign";

const PSign = () => {

    return (
        <Wrapper>
            <Layout>
                <Sign />
            </Layout>
        </Wrapper>
    );

};

export default PSign;

const Wrapper = styled(BWrapper)`
`;
const Layout = styled(BLayout)`
`;