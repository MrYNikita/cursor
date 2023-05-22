import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";

const AuthItem = ({ Svg }) => {
    
    
    
    return (
        
        <Wrapper>
            <Layout>
                {<Svg/>}
            </Layout>
        </Wrapper>
    );
    
};

export default AuthItem;

const Wrapper = styled(BWrapper)`
    
    
    
`;
const Layout = styled(BLayout)`
    
    width: 2vw;
    height: 3.7vh;
    border: var(--border-0);
    padding: 0.4vh 0.4vw;
    border-radius: 50%;
    background-color: var(--color-8);

    &:hover {
        background-color: var(--color-5);
    }
    
`;