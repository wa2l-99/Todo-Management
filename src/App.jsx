import { Component } from 'react';
import './App.css';
import TodoApp from './components/todo/TodoApp';
class App extends Component {
  render(){
    return(
      <div className="App">
        <TodoApp/>
      </div>

    );
  }
}


export default App;
