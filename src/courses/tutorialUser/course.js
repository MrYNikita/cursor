import Course from "../../classes/Course";
import materail1 from "./materials/material-1";
import materail2 from "./materials/material-2";

const courseTutorial = new Course({

    id: 0,
    name: 'Обучение - Первые шаги',
    tags: ['Курсор'],
    preview: 'https://thumb.tildacdn.com/tild3161-3332-4461-a138-326561396432/-/resize/824x/-/format/webp/1615.png',
    materials: [

        materail1,
        materail2,

    ],
    description: 'Обучение позволит вам ознакомиться с приложением и разобраться в нём!',

});

/** @type {Course} */
export default courseTutorial;