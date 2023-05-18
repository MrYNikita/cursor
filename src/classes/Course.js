export default class Course {

    /**
     * @type {number?}
    */
    id = null;

    /**
     * @type {string[]}
    */
    tags = [];
    /**
     * Это ключевые теги, которые могут быть указаны в количестве 3 штук для обычных курсов и 5 для премиальных.
     * ***
     * @type {string[]}
    */
    tagsKey = [];

    /**
     * Пока-что здесь будут храниться задачи.
    */
    tasks = [];
    /**
     * Материалы.
     * ***
     * @type {import('./Material.js').default[]}
    */
    materials = [];
    /**
     * Справочник
    */
    directory = null;

    /**
     * Навыки, которые развивает курс.
     * ***
     * @type {string[]}
    */
    skills = [];
    /**
     * Кол-во последователей данного курса.
     * ***
     * @type {number}
    */
    followers = 0;
    /**
     * Приоритет определяет важность отображения данного курса среди прочих курсов.
     * ***
     * @type {number}
    */
    priority = 0;
    /**
     * @type {string}
    */
    name = null;
    /**
     * Разовая покупка курса.
     * *** 
     * @type {number?}
    */
    price = null;
    /**
     * @type {string[]}
    */
    photos = [];
    /**
     * @type {string?}
    */
    preview = null;
    /**
     * @type {number?}
    */
    discount = null;
    /**
     * 
     * @type {string?}
    */
    description = null;
    /**
     * Стоимость подписки на курс.
     * ***
     * @type {number?}
    */
    subscription = null;

    /** @arg {Course} t */
    constructor(t) {

        if (!t.id && t.id !== 0) {

            t.id = Course.count++;

        };
        if (!t.name) {

            t.name = `course-${t.id + '0'.repeat(4 - t.id.toString().length) + Course.name}`;

        };

        Object.keys(this).forEach(key => {

            if (t[key] !== undefined) {

                this[key] = t[key];

            };

        });

    };

};