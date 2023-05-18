import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";

const CourseMaterial = ({ id, name }) => {

    return (
        <Wrapper>
            <Layout
                onClick={() => {
                    window.location += `/material/${id}`;
                }}
            >
                {name}
            </Layout>
        </Wrapper>
    );

};

export default CourseMaterial;

const Layout = styled(BLayout)`
background-color: var(--color-2);
border-radius: var(--border-radius-1);

&:hover {
    background-color: var(--color-6);
}
`;
const Wrapper = styled(BWrapper)`
height: 5vh;
padding: 1% 10%;
`;