import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BTitle from "../basics/BTitle";
import FieldInput from "../UI/FieldInput";
import Auth from "../auths/Auth";
import BWindow from "../basics/PWindow";

const Login = () => {
    
    
    
    return (
        
        <Wrapper>
            <Layout>
                <Title>Авторизация</Title>
                <FieldInput title={'Логин'} />
                <FieldInput title={'Пароль'} type='password' />
                <Auth/>
            </Layout>
        </Wrapper>
    );
    
};

export default Login;

const Wrapper = styled(BWindow)`

    width: 20vw;
    height: 40vh;

`;
const Layout = styled(BLayout).attrs(() => { return { as: 'form' } })`

    gap: 1vh 0;
    flex-direction: column;
    justify-content: start;

`;
const Title = styled(BTitle)`

`;