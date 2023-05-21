// import { useState } from 'react';
// import vkConnect from '@vkontakte/vk-bridge';
import styled from 'styled-components';
import BWrapper from '../basics/BWrapper';
import {ReactComponent as SvgVK} from '../../svg/brands/vk.svg';

const AuthVK = () => {

    // const [userData, setUserData] = useState(null);
    // const [handleRegisterError, setHandleRegisterError] = useState(null);

    // const handleRegister = async () => {
    //     try {
    //         const data = await vkConnect.send('VKWebAppGetUserInfo');
    //         setUserData(data);
    //     } catch (e) {
    //         setHandleRegisterError(e);
    //     };
    // };

    // onClick={handleRegister}

    return (
        <Wrapper>
            <Icon width={'30px'} height={'30px'} />
        </Wrapper>
    );

};

const Icon = styled(SvgVK)`
fill: #fff;

&:hover{
    background-color: var(--color-1);
}
`;
const Wrapper = styled(BWrapper)`
width: 30px !important;
height: 30px;
padding: 2%;
border-radius: 50%;
background-color: var(--color-4);

&:hover{
    background-color: var(--color-1);
}
`;

export default AuthVK;