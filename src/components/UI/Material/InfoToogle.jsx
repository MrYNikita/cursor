import styled from "styled-components";
import BLayout from "../../basics/BLayout";
import BWrapper from "../../basics/BWrapper";
import BSpace from "../../basics/BSpace";

const InfoToogle = ({ material, task, }) => {

    const {

        name,
        description,

    } = material;

    return (
        
        <Wrapper>
            <Layout>
                <Title>"{name}"</Title>
                <BSpace height={'2vh'} />
                <Description>{description}</Description>
                <BSpace height={'2vh'} />
                <SubTitle>Задача</SubTitle>
                <BSpace height={'1vh'} />
                <Target>{task.description}</Target>
            </Layout>
        </Wrapper>
    );
    
};

export default InfoToogle;

const Wrapper = styled(BWrapper)`

top: 7vh;
width: 10vw;
height: min-content;
border: var(--border-0);
padding: 1vh 1vw;
position: absolute;
animation: 0.5s hide reverse forwards, 0.5s move;
box-shadow: var(--box-shadow-1);
border-radius: var(--border-radius);
background-color: var(--color-2);

`;
const Layout = styled(BLayout)`

flex-direction: column;
justify-content: left;

`;
const Title = styled.h3`

width: 100%;
text-align: center;

`;
const SubTitle = styled.h4`

width: 100%;
text-align: center;

`;
const Target = styled.p`

text-align: center;

`;
const Description = styled.p`

text-align: left;

`;