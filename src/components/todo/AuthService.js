// Allow us to save the username in the session storage when we login and delete it when we logout
class AuthService {
    registerSuccessfulLogin(username,password){
        sessionStorage.setItem('authenticatedUser', username);
        console.log('registersucclogin')

    }
    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }
    isUserLoggedIn(){
        let user=sessionStorage.getItem('authenticatedUser');
        if(user===null) return false
        return true
    }


}
export default new AuthService() ;
