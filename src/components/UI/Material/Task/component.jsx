import styled from "styled-components";
import BWrapper from "../../../basics/BWrapper";
import BLayout from "../../../basics/BLayout";
import { ReactComponent as DoneSvg } from '../../../../svg/symbols/done.svg';
import { ReactComponent as InfoSvg } from '../../../../svg/symbols/info.svg';
import Task from "../../../../classes/Task";
import { createContext } from "react";

const CTask = (props) => {

    /** @type {Task} */
    const task = props.task;

    const {

        isRender,
        setRender,

    } = props;

    const {

        result,
        condition,

    } = task;

    const TaskContext = createContext({});

    const check = () => {

        let result = 1;

        for (const index in task.answers) {

            const input = task.inputs[index];
            const answer = task.answers[index];

            if (input.toString() !== answer.toString()) {

                result = -1;
                break;

            };

        };
        
        task.result = result;
        setRender(!isRender);

    };
    
    return (

        <Wrapper>
            <Layout result={result}>
                <Title>{condition}</Title>
                <TaskContext.Provider value={task}>
                    {props.children}
                </TaskContext.Provider>
                <Panel result={result}>
                    <ButtonWrapper border result={result}
                        onClick={check}
                    >
                        <ButtonDone />
                    </ButtonWrapper>
                    <ButtonWrapper result={result}>
                        <ButtonInfo />
                    </ButtonWrapper>
                </Panel>
            </Layout>
        </Wrapper>
    );

};

export default CTask;

const Wrapper = styled(BWrapper)`

    grid-area: task;
    padding: 1vh 30vw;

`;
const Layout = styled(BLayout)`

    box-shadow: var(--box-shadow-1);
    border-radius: var(--border-radius-1);
    background-color: var(--color-2);
    display: grid;
    grid-template-areas:
        'title'
        'list'
        'panel';
    grid-template-rows: min-content 1fr min-content;
    grid-template-columns: 1fr;

    ${props => `border: var(--border-${props.result === 1 ?
    
        `correct-0` : props.result === -1 ?
        `uncorrect-0` :
        `0`
    

    })`}


`;
const Title = styled.h3`

grid-area: title;
padding: 1vh 0;
color: var(--color-0);
width: 100%;
border-bottom: var(--border-0);
background-color: var(--color-3);

`;

const Panel = styled(BLayout)`

height: 5vh;
border-top: var(--border-0);
grid-area: panel;
background-color: var(--color-3);

& > * {

    &:hover {
        background-color: var(--color-1);
    }
}

`;
const ButtonInfo = styled(InfoSvg)`


`;
const ButtonDone = styled(DoneSvg)`



`;
const ButtonWrapper = styled(BLayout)`

& > * {
    height: 3vh;
}

${props => props.border && `border-right: var(--border-0);`}

`;