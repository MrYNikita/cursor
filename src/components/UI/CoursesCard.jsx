import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BTitle1 from "../basics/BTitle";
import BWrapper from "../basics/BWrapper";
import { useDispatch } from "react-redux";
import { setCourse } from "../../stores/slices/courses";

const CoursesCard = (props) => {

    const {

        id,
        name,
        preview,

    } = props;

    const dispatch = useDispatch();

    return (
        <Wrapper
            onClick={e => {
                window.location = `course/${id}`;
            }}
        >
            <Layout>
                <Preview src={preview} />
                <Footer>
                    <Title>{name}</Title>
                </Footer>
            </Layout>
        </Wrapper>
    );

};

export default CoursesCard;

const Preview = styled.img`
width: 100%;
height: 100%;
`;
const Title = styled(BTitle1)`
color: var(--color-8);
font-size: 15px;
`;
const Footer = styled(BLayout)`
height: 50%;
padding: 3%;
align-items: start;
flex-direction: row;
justify-content: start;
`;
const Layout = styled(BLayout)`
align-items: start;
justify-content: start;
flex-direction: column;
border-radius: var(--border-radius-3);
background-size: cover;
background-color: #fff;

${props => props.preview && `background-image: url('${props.preview}')`}
`;
const Wrapper = styled(BWrapper)`
width: 24.2%;
height: 40vh;

&:hover {
    transform: scale(1.025);
}
`;