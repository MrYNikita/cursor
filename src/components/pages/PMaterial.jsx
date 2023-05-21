import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";
import Index from "../UI/Material/Index";
import Title from "../UI/Material/Title";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Direction from "../UI/Material/Direction";
import { useState } from "react";

const PMaterial = () => {

    const paramsUrl = useParams();

    const material = useSelector((state) => state.courses.sequence[paramsUrl.idCourse].materials[paramsUrl.idMaterial]);

    const [taskIndex, setTaskIndex] = useState(0);

    const task = material.tasks[taskIndex];
    const Elem = task.component;

    return (

        <Wrapper>
            <Layout>
                <Title material={material} task={task} />
                <Index count={material.tasks.length} index={taskIndex} setTaskIndex={setTaskIndex} />
                <Direction
                    onClick={() => {
                        if (taskIndex > 0) {
                            setTaskIndex(taskIndex - 1);
                        }
                    }}
                />
                <Elem task={task} />
                <Direction right
                    onClick={() => {
                        if (taskIndex < material.tasks.length - 1) {
                            setTaskIndex(taskIndex + 1);
                        }
                    }}
                />
            </Layout>
        </Wrapper>
    );

};

export default PMaterial;

const Layout = styled(BLayout)`
gap: 1vh 1vw;
display: grid;
grid-template-areas:
    "info info info"
    "left task right"
    ". index .";
grid-template-rows: 5vh 1fr 5vh;
grid-template-columns: 5vw 1fr 5vw;
`;
const Wrapper = styled(BWrapper)`

`;