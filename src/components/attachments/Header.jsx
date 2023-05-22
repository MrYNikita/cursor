import styled from "styled-components";
import BSpace from "../basics/BSpace";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";
import Profile from "./Profile";

const Header = () => {

    return (
        <Wrapper>
            <Layout>
                <Links>
                    <Brand onClick={() => window.location = '/'}>Курсор</Brand>
                    <Link href="/contacts">Контакты</Link>
                    <Link href="/news">Новости</Link>
                    <Link href="/about">Сводка</Link>
                    <Link href="/courses">Курсы</Link>
                    <Link href="/test">Тестирование</Link>
                </Links>
                <BSpace />
                <Profile />
            </Layout>
        </Wrapper>
    );

};

export default Header;

const Layout = styled(BLayout)`
justify-content: space-between;
`;
const Wrapper = styled(BWrapper)`
grid-area: header;
padding-inline: 1%;
background-color: var(--color-transparent-3);
`;
const Brand = styled.h3`
padding: 3%;
border-radius: 12px;

&:hover {
    background-color: var(--color-5) !important;
}

`;
const Links = styled(BLayout)`
gap: 1%;
width: 80%;
`;
const Link = styled.a`
color: #fff;
padding: 1%;
border-radius: 12px;
text-decoration: underline;

&:hover {
    background-color: var(--color-5);
    text-decoration: none;
}

`;