import Material from "../../../classes/Material";
import TaskSelect from "../../../classes/TaskSelect";

const materail1 = new Material({

    id: 0,
    name: 'О Курсах',
    tasks: [

        new TaskSelect({

            variates: [

                'Booker',
                'Курсор',
                'React App',

            ],
            answers: [

                '1',

            ],
            condition: 'Как называется этот сайт?',
            description: 'Пройдите тест',

        }),
        new TaskSelect({

            variates: [

                '2020',
                '2021',
                '2022',
                '2023',
                '2024',
                '2025',

            ],
            answers: [

                '3',

            ],
            condition: 'В каком году создан этот сайт?',
            description: 'Пройдите этот тест',

        }),

    ],
    description: 'Данный курс позволит разобраться с тем, как работают курсы, какие они бывают и как они влияют на ваш прогресс.',

});

export default materail1;