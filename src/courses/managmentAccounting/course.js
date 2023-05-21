import Course from "../../classes/Course";
import materail1 from "./materials/material-1";
import materail2 from "./materials/material-2";

const courseManagmentAccounting = new Course({

    id: 2,
    name: 'Управленческий учёт',
    tags: ['Бухгалтерия', 'Баланс', 'Финансы'],
    preview: 'https://arenda-it.ru/wp-content/uploads/2020/09/hypnocat.png',
    materials: [

        materail1,
        materail2,

    ],
    description: 'Данный курс предназначен для понимания этапов бухгалтерской отчетности на практических примерах.'

});

/** @type {Course} */
export default courseManagmentAccounting;