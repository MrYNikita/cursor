/**
 * @arg {string} email
 * @arg {string} password
*/
export async function authenticateUser(email, password) {

    const {
        REACT_APP_SERVER_IP,
        REACT_APP_API_AUTH_AUTHENTICATE,
    } = process.env;

    try {

        if (!REACT_APP_SERVER_IP) {
            throw new Error("000-001 Не указан host");
        }
        if (!REACT_APP_API_AUTH_AUTHENTICATE) {
            throw new Error("000-002 Не указан api авторизации");
        }

        const response = await fetch(`${REACT_APP_SERVER_IP}/${REACT_APP_API_AUTH_AUTHENTICATE}`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({ email, password, }),
        });

        return response;

    } catch (error) {

        throw error;

    }

}