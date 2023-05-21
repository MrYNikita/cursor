import styled from 'styled-components';
import BWrapper from '../../../../basics/BWrapper.jsx';
import BLayout from '../../../../basics/BLayout.jsx';
import { useState, } from 'react';
import TaskSelect from '../../../../../classes/TaskSelect.js';
import CTask from '../component.jsx';

/**
 * Компонент, содержащий задачу, представленную набором ответов, выбрать из которых необходимо один верный ответ.
 * @type {(task:TaskSelect) => JSX.Element}
*/
const CTaskSelect = (props) => {

    const {

        task,

    } = props;

    const {

        result,
        inputs,
        variates,

    } = task;

    const checkFocus = (key) => index === key ? true : false;

    const index = inputs[0] ?? null;
    const [isRender, setRender] = useState(false);

    return (

        <CTask {...props} setRender={setRender} isRender={isRender}>
            <Fieldset>
                <List>
                    {variates.length && variates.map((item, key) => <Item
                    
                        className={`task-item ${checkFocus(key) && 'task-item--focus'}`}
                        key={key}
                        result={result}
                        focus={checkFocus(key)}

                        onClick={() => {
                            task.setInput(key);
                            setRender(!isRender);
                        }}

                    >{item}</Item>)}
                </List>
            </Fieldset>
        </CTask>
    );

};

export default CTaskSelect;

const Item = styled(BLayout)`

    width: 100%;
    height: 5vh;
    border-radius: var(--border-radius-1);
    background-color: var(--color-3);

    &:hover {
        scale: 1.015;
        ${props => `background-color: var(--color-${props.focus ? '1' : '8'});`}
    }
    &.task-item--focus {
        scale: 1.015;
        ${props => `background-color: var(--color-${props.result === 1 ?
            'correct-0' : props.result === -1 ?
            'uncorrect-0' :
            '1'

        });`}
    }

`;
const List = styled(BLayout).attrs(() => { return { as: 'fieldset' } })`

    gap: 1vh 0;
    padding: 1vh 0.5vw;
    flex-direction: column;
    justify-content: start;

`;
const Fieldset = styled(BWrapper).attrs(() => { return { as: 'form' } })`
    
    grid-area: list;

`;