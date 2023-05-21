import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";
import Login from "../unique/Login";
import FieldInput from "../UI/FieldInput";

const PLogin = () => {
    
    
    
    return (
        
        <Wrapper>
            <Layout>
                <Login />
            </Layout>
        </Wrapper>
    );
    
};

export default PLogin;

const Wrapper = styled(BWrapper)`



`;
const Layout = styled(BLayout)`



`;
