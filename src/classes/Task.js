export default class Task {

    static count = 0;

    /**
     * @type {string}
    */
    name = null;
    answer = null;

    /** @arg {Course} t */
    constructor(t) {

        if (!t.id) {

            t.id = Task.count++;

        };
        if (!t.name) {

            t.name = `course-${t.id + '0'.repeat(4 - t.id.toString().length) + Task.name}`;

        };

        Object.keys(this).forEach(key => {

            if (t[key] !== undefined) {

                this[key] = t[key];

            };

        });

    };

};