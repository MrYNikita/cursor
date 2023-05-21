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
     * Материалы.
     * ***
     * @type {import('./Material.js').CMaterial[]}
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

    /** @arg {Course} params */
    constructor(params) {

        if (!params.id && params.id !== 0) {

            params.id = Course.count++;

        };
        if (!params.name) {

            params.name = `course-${params.id + '0'.repeat(4 - params.id.toString().length) + Course.name}`;

        };

        Object.keys(this).forEach(key => params[key] !== undefined ? this[key] = params[key] : this[key] ? this[key] : null);

    };

};