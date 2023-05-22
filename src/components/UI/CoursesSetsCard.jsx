import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWindow from "../basics/PWindow";

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
`;
const Wrapper = styled(BWindow)`
grid-area: sets;
background-color: var(--color-transparent-1);
`;