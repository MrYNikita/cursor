import styled from "styled-components";
import BLayout from "../../basics/BLayout";
import BWrapper from "../../basics/BWrapper";
import BSpace from "../../basics/BSpace";
import Info from "./Info";
import Timer from "./Timer";

const Title = ({ material, task }) => {



    return (

        <Wrapper>
            <Layout>
                <Info material={material} task={task} />
                <Timer />
                <Space />
            </Layout>
        </Wrapper>
    );

};

export default Title;

const Space = styled(BSpace)`
`;
const Layout = styled(BLayout)`
`;
const Wrapper = styled(BWrapper)`
grid-area: info;
background-color: var(--color-3);
`;