import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWindow from "../basics/PWindow";
import BTitle from "../basics/BTitle";
import FieldInput from "../UI/FieldInput";
import Auth from "../auths/Auth";

const Sign = () => {
    
    
    
    return (
        
        <Wrapper>
            <Layout>
                <Title>Регистрация</Title>
                <FieldInput title={'Email'} />
                <FieldInput title={'Пароль'} type='password' />
                <FieldInput title={'Повторите пароль'} type='password' />
                <Auth />
            </Layout>
        </Wrapper>
    );
    
};

export default Sign;

const Wrapper = styled(BWindow)`
    
    width: 20vw;
    height: 40vh;
    background: #008cff80;
    
`;
const Layout = styled(BLayout).attrs(() => { return { as: 'form' } })`
    
    gap: 1vh 0;
    flex-direction: column;
    justify-content: start;
    
`;
const Title = styled(BTitle)`

`;