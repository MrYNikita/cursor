import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BP from "../basics/BP";
import BTitle1 from "../basics/BTitle";
import BWrapper from "../basics/BWrapper";

const CoursePreview = (props) => {

    const {

        name,
        preview,
        description,

    } = props;

    return (
        <Wrapper preview={preview}>
            <Layout>
                <Title>{name}</Title>
                <Description>{description}</Description>
            </Layout>
        </Wrapper>
    );

};

export default CoursePreview;

const Title = styled(BTitle1)`
padding: 0.5vh;
font-size: 1.25rem;
grid-area: 'title';
text-align: left;
text-shadow: 1px 1px 0 #000;
background-color: var(--color-3);
border-radius: var(--border-radius-1);
white-space: nowrap;
`;
const Description = styled(BP)`
grid-area: description;
padding: 1% 1.25%;
border-radius: var(--border-radius-2);
background-color: #214e6a8e;
`;
const Layout = styled(BLayout)`
display: grid;
padding: 0% 1%;
grid-template-areas: 
    "title ."
    "description .";
grid-template-rows: 7vh 15vh;
border-bottom: 1px solid var(--color-2);
grid-template-columns: min-content 1fr;
`;
const Wrapper = styled(BWrapper)`
grid-area: preview;
background-size: 60% 100%;
background-repeat: no-repeat;
background-position: center center;

${props => props.preview && (`background-image: url(${props.preview});`)}
`;