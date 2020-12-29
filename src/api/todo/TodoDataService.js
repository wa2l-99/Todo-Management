import axios from 'axios'

class TodoDataService {



    retrieveAllTodos(name) {
        // console.log('executed service');
        return axios.get(`http://localhost:8080/users/${name}/todos`)
    }

    deleteTode(name, id) {
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }


}
export default new TodoDataService