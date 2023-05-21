import { useState } from "react";
import styled from "styled-components";
import BInput1 from "../basics/BInput1";
import BLayout from "../basics/BLayout";
import BP from "../basics/BP";
import BWrapper from "../basics/BWrapper";

const CoursesSearchPanel = (props) => {

    const {

        handleChangeSearch,

    } = props;

    const [name, setName] = useState('');
    const [tags, setTags] = useState([]);

    return (
       <Wrapper>
            <Layout>
                <Input
                    onChange={e => {
                        handleChangeSearch(e.target.value, tags);
                        setName(e.target.value);
                    }}
                    placeholder='Поиск курса'
                />
                <Input
                    onKeyDown={e => {
                        if (e.code === 'Enter') {
                            const tagsNew = [...new Set([...tags, e.target.value].sort((p, c) => p.length - c.length))];
                            
                            e.target.value = '';

                            setTags(tagsNew);
                            handleChangeSearch(name, tagsNew);
                        };
                    }}
                    placeholder='Теги'
                />
                <TagList>
                    {tags.map((tag, key) =>
                        <Tag
                            key={key}
                            onClick={() => {
                                const tagsNew = tags.filter(tagNow => tagNow !== tag);

                                handleChangeSearch(name, tagsNew);
                                setTags(tagsNew);
                            }}
                        >{tag}</Tag>
                    )}
                </TagList>
            </Layout>
       </Wrapper> 
    );

};

export default CoursesSearchPanel;

const Input = styled(BInput1)`
width: 100%;
height: 2.5vh;
`;
const Layout = styled(BLayout)`
row-gap: 1%;
padding: 5%;
border-radius: var(--border-radius);
flex-direction: column;
justify-content: start;
background-color: var(--color-2);
`;
const Wrapper = styled(BWrapper)`
position: relative;
grid-area: panel;
`;
const Tag = styled(BP).attrs(() => ({ as: 'div' }))`
height: 3vh;
padding: 1%;
border-radius: var(--border-radius);
background-color: var(--color-4);

&:hover {
    background-color: var(--color-hover-delete)
}
`;
const TagList = styled(BLayout)`
gap: 4% 2%;
height: 20%;
padding: 2%;
flex-wrap: wrap;
overflow-y: auto;
align-content: flex-start;
align-items: start;
border-radius: var(--border-radius);
justify-content: start;
background-color: var(--color-3);
`;