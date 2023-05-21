import Course from "../../classes/Course";

const courseTutorialPublisher = new Course({

    id: 1,
    name: 'Обучение - Публикуем свой первый курс',
    tags: ['Курсор'],
    preview: 'https://www.unicraft.org/wp-content/uploads/2022/04/Tiny-screenwriter-sitting-on-retro-typewriter-1568x1045.jpg',
    materials: [



    ],
    description: 'Для тех, кто желает стать автором собственного курса можно ознакомиться с данными материалами!',

});

/** @type {Course} */
export default courseTutorialPublisher;