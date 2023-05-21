export default class Route {

    /** @type {string} */
    path = '';
    /** @type {boolean} */
    exact = false;
    /** @type {import("react").ReactElement} */
    Component = null;

    /** @arg {Route} params */
    constructor (params) {

        Object.keys(this).forEach(key => params[key] !== undefined ? this[key] = params[key] : this[key] ? this[key] : null);

    };

    /**
     * @arg {string} path
     * @arg {import("react").ReactElement} Component
    */
    static create(path, Component, exact = false) {

        return new Route({ path, Component, exact });

    };

};