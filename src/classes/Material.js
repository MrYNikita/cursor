import Task from "./Task";

export default class Material {

    /** @type {number} */
    id = null;
    /** @type {string} */
    name = null;
    /** @type {number} */
    time;
    /** @type {Task[]} */
    tasks = [];
    /** @type {string} */
    description = null;

    /** @arg {Material} params */
    constructor (params) {

        Object.keys(this).forEach(key => params[key] !== undefined ? this[key] = params[key] : this[key] ? this[key] : null);

    };

};