import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";
import BInput from "../basics/BInput";
import BSubTitle from "../basics/BSubTitle";
import { ReactComponent as ButtonEyeSvg } from '../../svg/symbols/eye.svg';
import { ReactComponent as ButtonCloseSvg } from '../../svg/symbols/close.svg';
import { useState } from "react";

const FieldInput = ({ title, type = 'text', placeholder }) => {

    const [login, setLogin] = useState('');
    const [focus, setFocus] = useState(false);
    const [showPass, setShowPass] = useState(false);

    return (

        <Wrapper>
            <Layout>
                <Title>{title}</Title>
                <Line
                    focus={focus}
                    onBlur={() => {
                        setFocus(false);
                        setShowPass(false);
                    }}
                    onFocus={() => setFocus(true)}
                >
                    <Input
                        type={type === 'password' ? showPass ? 'text' : type : type}
                        autoComplete="new-password"
                        value={login}
                        placeholder={placeholder ?? ''}
                        onChange={(e) => {
                            setLogin(e.target.value);
                        }}
                    />
                    {type === 'password' && <Button
                        onClick={(e) => {
                            setShowPass(!showPass);
                            e.preventDefault();
                        }}
                    >
                        <SvgEye />
                    </Button>}
                    <Button
                        onClick={(e) => {
                            setLogin('');
                            e.preventDefault();
                        }}
                    >
                        <SvgClear />
                    </Button>
                </Line>
            </Layout>
        </Wrapper>
    );

};

export default FieldInput;

const Wrapper = styled(BWrapper)`
    
    width: 100%;
    height: min-content;
    
`;
const Layout = styled(BLayout)`
    
    gap: 0.3vh 1vw;
    flex-direction: column;
    
`;
const Input = styled(BInput)`

    height: 2vh;

`;
const Title = styled(BSubTitle)`
    


`;
const Line = styled(BLayout)`

    width: 100%;
    height: 2vh;
    display: grid;
    grid-template-areas: 'input button';

    ${props => `gap: ${props.focus ? '0 0.5vw' : '0 0'};`}
    ${props => `grid-template-columns: ${props.focus ? '4fr 1fr 1fr' : '1fr 0fr 0fr'};`}

`;
const SvgEye = styled(ButtonEyeSvg)`
    
    

`;
const SvgClear = styled(ButtonCloseSvg)`

    

`;
const Button = styled.button`

    height: inherit;
    background-color: var(--color-8);
    border-radius: var(--border-radius-1);

    & > * {
        width: 100%;
        height: inherit;
        border-radius: var(--border-radius-1);

        &:hover {
            background-color: var(--color-5);
        }

    }

`;