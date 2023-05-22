import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";
import Login from "../unique/Login";
import { authenticateUser } from "../../scripts/api";

const PLogin = () => {
    
    try {

        const user = authenticateUser('red', 'bad');

        console.log(user);

    } catch (error) {

        console.log(error);

    };

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
