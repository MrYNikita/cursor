import { useState } from "react";
import styled from "styled-components";
import BLayout from "../../basics/BLayout";
import BWrapper from "../../basics/BWrapper";
// import BLabel from "../../basics/BLabel";
import InfoToogle from "./InfoToogle";

const Info = (props) => {

    const [isToogle, setToogle] = useState(true);

    return (
        <Wrapper>
            <Layout
                onClick={() => {
                    setToogle(!isToogle);
                }}
            >
                Информация
                {isToogle && <InfoToogle {...props} />}
            </Layout>
        </Wrapper>
    );

};

export default Info;

const Layout = styled(BLayout)`
width: min-content;
height: min-content;
padding: 0.5vh 1vw;
border-radius: var(--border-radius-1);
background-color: var(--color-4);

&:hover {
    background-color: var(--color-1);
}
`;
const Wrapper = styled(BWrapper)`
`;