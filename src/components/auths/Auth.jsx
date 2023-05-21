import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";

import { ReactComponent as SvgVk } from '../../svg/brands/vk.svg';
import { ReactComponent as SvgHh } from '../../svg/brands/hh.svg';
import BSubTitle from "../basics/BSubTitle";
import AuthItem from "./AuthItem";

const Auth = () => {



    return (

        <Wrapper>
            <Layout>
                <Title>Варианты</Title>
                <SetIcons>
                    <AuthItem Svg={SvgVk} />
                    <AuthItem Svg={SvgHh} />
                </SetIcons>
            </Layout>
        </Wrapper>
    );

};

export default Auth;

const Wrapper = styled(BWrapper)`
    
    height: min-content;
    
`;
const Layout = styled(BLayout)`
    
    gap: 1vh 0;
    height: inherit;
    padding: 1vh 1vw;
    flex-direction: column;
    
`;
const Title = styled(BSubTitle)`



`;
const SetIcons = styled(BLayout)`
    
    gap: 1vh 1vw;
    width: min-content;
    padding: 1vh 1vw;
    box-shadow: var(--box-shadow-1);
    background-color: var(--color-3);

`;