export default class Task {

    /** @type {number} */
    id = null;
    /** @type {number} */
    result = 0;
    /** @type {(string|number)[]?} */
    inputs = [];
    /** @type {string[]?} */
    answers = [];
    /** @type {string[]?} */
    prompts = [];
    /** @type {() => JSX.Element} */
    component = null;
    /** @type {string?} */
    condition = null;
    /** @type {string?} */
    description = null;

    /** @arg {Task} params */
    constructor (params) {

        Object.keys(this).forEach(key => params[key] !== undefined ? this[key] = params[key] : this[key] ? this[key] : null);

    };

    check() {

        if (!this.answers.length || this.inputs.every((input, index) => input && input === this.answers[index])) {

            return true;

        };

        return false;

    };

};