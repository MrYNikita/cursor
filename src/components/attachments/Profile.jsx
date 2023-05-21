import { useState } from "react";
import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";
import { ReactComponent as SVGTriangle } from '../../svg/symbols/triangle-1-fill.svg';
import Menu from "./Menu";

const Profile = () => {

    const [toogle, setToogle] = useState(false);

    return (
        <Wrapper>
            <Layout>
                <Toogle
                    onClick={e => {
                        setToogle(!toogle);
                    }}
                >
                    <Avatar src={'https://avatars.githubusercontent.com/u/86610604?v=4'} />
                    <Trinagle toogle={toogle.toString()} />
                </Toogle>
                {toogle && <Menu />}
            </Layout>
        </Wrapper>
    );

};

export default Profile;

const Avatar = styled.img`
width: 2vw;
border: 0.1vw solid var(--color-1);
border-radius: 50%;

@media screen and (width <= 749px) {
    width: 7vw;
}
@media screen and (width > 749px) and (width <= 1140px) {
    width: 5vw;
}
`;
const Toogle = styled(BLayout)`
column-gap: 4%;
&:hover {
    background-color: var(--color-5);
}
`;
const Trinagle = styled(SVGTriangle)`
width: 0.95vw;
height: 1.2vh;
position: relative;

@media screen and (width <= 1200px) {
    width: 2vw;
}

${props => props.toogle === 'true' ? `rotate: 180deg;` : ''}

`;

const Layout = styled(BLayout)`
gap: 5%;
border-radius: var(--border-radius);
`;
const Wrapper = styled(BWrapper)`
width: 10vw;
height: 6vh;
z-index: 1;

@media screen and (width <= 1200px) {
    width: 30vw;
}
`;