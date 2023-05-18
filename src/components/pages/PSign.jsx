import styled from "styled-components";
import AuthVK from "../../auth/AuthVK";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";
import BasicTitle from "../basics/BTitle";
import BInput from "../basics/BInput";
import BLine from "../basics/BLine";
import BHr from "../basics/BHr";

const PSign = () => {

    return (
        <Wrapper>
            <Layout as='form'>
                <FieldSet as='fieldset'>
                    <Legend as='legend'>Регистрация</Legend>
                    <Field>
                        <Label>Логин</Label>
                        <Input />
                    </Field>
                    <Field>
                        <Label>Пароль</Label>
                        <Input type='password' />
                    </Field>
                    <Field>
                        <Label>Почта</Label>
                        <Input type='email' />
                    </Field>
                    <Field>
                        <Line>
                            <Label>Дата рождения</Label>
                            <Line columnGap={3}>
                                <Input width={40} maxLength={2} />
                                <Input width={40} maxLength={2} />
                                <Input width={60} maxLength={4} />
                            </Line>
                        </Line>
                    </Field>
                    <Hr />
                    <Field height={30}>
                        <AuthTitle>Варианты входа</AuthTitle>
                        <AuthLine columnGap={3} flexWrap={'wrap'}>
                            <AuthVK />
                        </AuthLine>
                    </Field>
                </FieldSet>
            </Layout>
        </Wrapper>
    );

};

export default PSign;

const Hr = styled(BHr)`
color: var(--color-3);
width: 95%;
height: 1px;
border-width: 1px;
border-style: solid;
border-radius: 12px;
`;
const Layout = styled(BLayout)`
width: 20vw;
height: 80vh;
box-shadow: var(--box-shadow-1);
border-radius: var(--border-radius);
background-color: var(--color-2);

@media screen and (width <= 1100px) {
    width: 250px;
}

`;
const Wrapper = styled(BWrapper)`
`;

const Line = styled(BLine)`
height: auto;
`;
const Label = styled(BasicTitle).attrs(() => ({ as: 'h5' }))`
width: 100%;
text-align: left;
padding-left: 5%;
`;
const Input = styled(BInput)`
width: 100%;

${props => props.width && `width: ${props.width}%;`}
`;
const Field = styled(BLayout).attrs(() => ({ as: 'div' }))`
gap: 1%;
padding-inline: 5%;
flex-direction: column;
justify-content: start;

${props => `height: ${props.height ? props.height : `10`}%;`}
`;
const Legend = styled(BasicTitle)`
padding: 5% 0 5% 0;
`;
const FieldSet = styled(BLayout)`
flex-direction: column;
justify-content: start;
`;

const AuthTitle = styled(BasicTitle).attrs(() => ({ as: 'h5' }))`
padding-top: 5%;
`;
const AuthLine = styled(Line)`
padding: 2%;
border-radius: var(--border-radius);
`;