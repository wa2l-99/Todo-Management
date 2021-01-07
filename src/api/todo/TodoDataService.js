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


    deleteTodo(name, id) {
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }

    UpdateTodo(name, id, todo) {
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo)
    }

    createTodo(name, todo) {
        return axios.post(`http://localhost:8080/users/${name}/todos/`, todo)
    }



}
export default new TodoDataService