import { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
// import Course from "../../classes/Course";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";

const PTest = () => {

    const text = useRef('');
    /** @type {Course} */
    const test = useSelector((state) => state.course) ?? null;
    // const dispatch = useDispatch();

    console.log(test);

    return (
        <Wrapper>
            <Layout>
                <p>{test.course.name}</p>
                <Field contentEditable
                    onInput={(e) => {

                        let string = text.current = e.target.innerText;
                        
                        const rows = string.split('\n').map(row => {

                            return row.split(' ').map(word => {

                                if (word === 'name') {

                                    word = `<span style="color: red;">${word}</span>`;

                                };

                                return word;

                            }).join(' ');

                        }).join('\n');

                        e.target.innerHTML = rows;

                    }}
                    onKeyDown={(e) => {

                        

                    }}
                >
                </Field>
            </Layout>
        </Wrapper>
    );

};

export default PTest;

const Layout = styled(BLayout)`
`;
const Wrapper = styled(BWrapper)`
`;
const Field = styled.div`
color: black;
width: 20vw;
height: 20vh;
border: 5px solid black;
resize: both;
transition: none !important;

&>span {
    color: black;
}
`;