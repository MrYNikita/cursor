import styled from "styled-components";
import BLayout from "../../../components/basics/BLayout";
import BWrapper from "../../../components/basics/BWrapper";

const Menu = () => {

    return (
        <Wrapper>
            <Layout>
                <Point>Профиль</Point>
                <Point>Настройки</Point>
                <PointLast onClick={() => window.location = '/sign'}>Выход</PointLast>
            </Layout>
        </Wrapper>
    );

};

export default Menu;

const Point = styled.button`
width: 100%;
height: 4vh;
background-color: var(--color-2);
border-bottom: 0.1vh solid var(--color-9);

&:hover{
    background-color: var(--color-5);
}
`;
const PointLast = styled(Point)`
border-bottom: none;
`;
const Layout = styled(BLayout)`
display: flex;
text-align: center;
justify-content: start;
flex-direction: column;
`;
const Wrapper = styled(BWrapper)`
top: 9vh;
right: 2vw;
height: min-content;
width: 7vw;
position: absolute;
animation: 0.5s hide reverse forwards, 0.5s move;
box-shadow: var(--box-shadow-1);
border-radius: var(--border-radius);
background-color: var(--color-4);
border: 0.1vw solid var(--color-9);
`;