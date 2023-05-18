import Course from "../../classes/Course";
import materail1 from "./materials/material-1";
import materail2 from "./materials/material-2";

const courseTutorial = new Course({

    id: 0,
    name: 'Обучение - Как пользоваться?',
    tags: ['Курсор'],
    preview: 'https://i0.wp.com/antitreningi.ru/info/wp-content/uploads/2021/03/%D0%98%D0%BD%D0%B4%D0%B8%D0%B2%D0%B8%D0%B4%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5.jpg?fit=1000%2C500&ssl=1',
    materials: [

        materail1,
        materail2,

    ],
    description: 'Обучение позволит вам ознакомиться с приложением и разобраться в нём!',

});

/** @type {Course} */
export default courseTutorial;