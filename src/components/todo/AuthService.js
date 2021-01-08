import axios from 'axios'

// Allow us to save the username in the session storage when we login and delete it when we logout
class AuthService {

    executeBasicAuthenticationService(username, password) {
        return axios.get('http://localhost:8080/basicauth', { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password) {

        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
        console.log('registersucclogin')

    }
    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }
    isUserLoggedIn() {
            let user = sessionStorage.getItem('authenticatedUser');
            if (user === null) return false;
            return true;
        }
        //retun username of storege 
    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) return '';
        return user;

    }

    setupAxiosInterceptors(basicAuthHeader) {

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }

}
export default new AuthService();