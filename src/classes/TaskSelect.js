import Task from "./Task";
import CTaskSelect from "../components/UI/Material/Task/Select/component";

export default class TaskSelect extends Task {

    /** @type {string[]} */
    variates = [];

    /** @arg {TaskSelect} params */
    constructor(params) {

        super({ ...params, component: CTaskSelect });

        Object.keys(this).forEach(key => params[key] !== undefined ? this[key] = params[key] : this[key] ? this[key] : null);

    };

    /**
     * @arg {number} number
    */
    setInput(number) {

        this.inputs[0] = number;

        return this;

    };

};