import axios from 'axios'

class TodoDataService {



    retrieveAllTodos(name) {
        // console.log('executed service');
        return axios.get(`http://localhost:8080/users/${name}/todos`)
    }
    
    
    retrieveTodo(name, id) {
        // console.log('executed service');
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    }


    deleteTode(name, id) {
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }


}
export default new TodoDataService