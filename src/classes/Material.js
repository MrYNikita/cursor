export default class Material {

    /** @type {number} */
    id = null;
    /** @type {string} */
    name = null;
    /** @type {string} */
    description = null;

    /** @arg {Material} t */
    constructor (t) {

        Object.keys(this).forEach(key => {

            if (t[key] !== undefined) {

                this[key] = t[key];

            };

        });

    };

};