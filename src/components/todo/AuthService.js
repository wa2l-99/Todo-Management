class AuthService {
    registerSuccessfulLogin(username,password){
        sessionStorage.setItem('authenticatedUser', username);
        console.log('registersucclogin')

    }
    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }


}
export default new AuthService() ;
