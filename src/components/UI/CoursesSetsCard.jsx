import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";

const CoursesSetsCard = (props) => {

    const {

        children,

    } = props;

    return (
        <Wrapper>
            <Layout>
                {children}
            </Layout>
        </Wrapper>
    );

};

export default CoursesSetsCard;

const Layout = styled(BLayout)`
gap: 2% 1%;
padding: 1%;
flex-wrap: wrap;
overflow-y: auto;
align-items: start;
align-content: flex-start;
border-radius: var(--border-radius);
justify-content: start;
background-color: var(--color-3);
`;
const Wrapper = styled(BWrapper)`
padding: 0 0.45% 0 0;
grid-area: sets;
`;