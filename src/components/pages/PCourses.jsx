import { useState } from "react";
import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";
import CoursesCard from "../UI/CoursesCard";
import CoursesSetsCard from "../UI/CoursesSetsCard";
import CoursesSearchPanel from "../UI/CoursesSearchPanel";

// Курсы
import { useDispatch, useSelector } from "react-redux";

const PCourses = () => {

    const [cardsAll, setCardsAll] = useState(useSelector((state) => state.courses.sequence));

    const [cards, setCards] = useState([...cardsAll]);

    const getCardsByTags = (tags) => {

        return tags.length ? cardsAll.filter(card => card.tags.length && tags.every(tag => card.tags.includes(tag))) : cardsAll;

    };
    const handleChangeSearch = (name, tags) => {

        const cardsActual = getCardsByTags(tags);

        if (name) {

            setCards(cardsActual.filter(card => card.name.startsWith(name)));

        } else {

            setCards(cardsActual);

        };

    };

    return (
        <Wrapper>
            <Layout>
                <CoursesSearchPanel
                    handleChangeSearch={handleChangeSearch}
                />
                <CoursesSetsCard>
                    {cards.map((card, key) => <CoursesCard {...card} key={key} />)}
                </CoursesSetsCard>
            </Layout>
        </Wrapper>
    );

};

export default PCourses;

const Layout = styled(BLayout)`
display: grid;
grid-template-areas: "sets panel";
grid-template-columns: 80% 20%;
`;
const Wrapper = styled(BWrapper)`
padding: 0.25% 0.25% 0.25% 0.25%;
`;