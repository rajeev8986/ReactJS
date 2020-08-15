import React from 'react';
import ReactDOM from 'react-dom';
import todos from './data/todoData';
import TodoItem from './product/TodoItem';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
  
        todoItems: todos
      }
    }
  
  
     handleChange = (id) => {
      console.log('inside change***' + id);
      this.setState((prevState) => {
        const newState = prevState.todoItems.map(item => {
          if(item.id === id) {
            item.checked = !item.checked;
          }
          return item;
        })
        return {todoItems: newState};
      })
    }
    
  
      render() {
        const todoItems =  this.state.todoItems.map(item => <TodoItem key = {TodoItem.id} item = {item} onChange = {this.handleChange}/>);
      return (
        
        <div className="App">
         {todoItems}
           
           
        </div>
      );
    } 
  
  
  
  }

  export default  App;