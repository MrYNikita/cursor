import styled from "styled-components";
import BLayout from "./components/basics/BLayout";
import BWrapper from "./components/basics/BWrapper";
import Header from "./components/attachments/Header";
import Footer from "./components/attachments/Footer";
import Main from "./components/attachments/Main";
import Router from "./components/routes/Router";
import Panel from "./components/attachments/Panel";
import { useState } from "react";

function App() {

    const [visPanel, setVisPanel] = useState(false);

    window.addEventListener('beforeunload', e => {



    });

    document.body.addEventListener('keydown', e => {



    });

    return (
        <Wrapper>
            <Layout
                visPanel={visPanel}
            >
                <Header />
                <Main
                    onMouseMove={e => {
                        if (!e.clientX) {
                            setVisPanel(true);
                        }
                    }}
                >
                    <Router />
                </Main>
                <Panel
                    onMouseLeave={e => {
                        if (visPanel) {
                            setVisPanel(false);
                        }
                    }}
                />
                <Footer />
            </Layout>
        </Wrapper>
    );
}

export default App;

const Layout = styled(BLayout)`
display: grid;
grid-template-areas:
    "header header"
    "panel main"
    "footer footer";

${props => props.visPanel ? 'grid-template-columns: 5% 95%;' : 'grid-template-columns: 0% 100%;'}
${props => props.visFooter ? 'grid-template-rows: 10% auto 10%;' : 'grid-template-rows: 10% auto 0%;'}

@media screen && (width <= 800px) {
    ${props => props.visPanel ? 'grid-template-columns: 10% 90%;' : 'grid-template-columns: 0% 100%;'}
}
`;
const Wrapper = styled(BWrapper)`
`;