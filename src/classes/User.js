import { authenticateUser } from "../scripts/api";

class User {

    /** @type {string} */
    name;
    /** @type {string} */
    email;
    /** @type {string?} */
    avatar;
    /** @type {string} */
    password;
    /** @type {boolean} */
    isLogged = false;

    /** @arg {User} args */
    constructor(args) {

        const {

            name,
            email,
            avatar,
            password,

        } = args;

        if (typeof name !== "string") {
            throw new Error("#001-000-000-000 Ошибка типа пользовательского имени.");
        }
        if (typeof email !== "string") {
            throw new Error('#001-000-000-001 Ошибка типа пользовательской почты.')
        }
        if (typeof password !== "string") {
            throw new Error('#001-000-000-002 Ошибка типа пользовательского пароля.')
        }

        this.name = name;
        this.avatar = typeof avatar === "string" ? avatar : null;
        this.password = password;

    };

    /**
     * @arg {string} email
     * @arg {string} password
    */
    async login(email, password) {

        try {

            const response = await authenticateUser(email, password);

            if (response.status === 200) {

                this.isLogged = true;

            } else {

                this.isLogged = false;

            };

        } catch (error) {

            this.isLogged = false;

            throw new Error("001-000-001-000 Ошибка авторизации");

        };

        return this;

    };

};

export default User;