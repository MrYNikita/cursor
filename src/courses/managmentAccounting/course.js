import Course from "../../classes/Course";
import materail1 from "./materials/material-1";
import materail2 from "./materials/material-2";

const courseManagmentAccounting = new Course({

    id: 2,
    name: 'Управленческий учёт',
    tags: ['Бухгалтерия', 'Баланс', 'Финансы'],
    preview: 'https://proforientator.ru/upload/img/publications/stati/buhgalter1.jpg',
    materials: [

        materail1,
        materail2,

    ],
    description: 'Данный курс предназначен для понимания этапов бухгалтерской отчетности на практических примерах.'

});

/** @type {Course} */
export default courseManagmentAccounting;