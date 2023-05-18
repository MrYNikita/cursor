import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";
import courseManagmentAccounting from "../../courses/managmentAccounting/course";
import CoursePreview from "../UI/CoursePreview";
import CourseMaterials from "../UI/CourseMaretials";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PCourse = () => {

    const urlParams = useParams(window.location);

    const course = useSelector((state) => state.courses.sequence[urlParams.id - 0]);

    return (
        <Wrapper>
            <Layout>
                <CoursePreview {...course} />
                <CourseMaterials materials={course.materials} />
            </Layout>
        </Wrapper>
    );

};

export default PCourse;

const Wrapper = styled(BWrapper)`
`;
const Layout = styled(BLayout)`
overflow-y: visible;
display: grid;
grid-template-areas:
    "preview preview"
    "tasks .";
grid-template-columns: 1fr 3fr;
grid-template-rows: 60vh 70vh;
`;