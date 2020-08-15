import React from 'react';
import todos from '../data/todoData'

function TodoItem(props) {

return (<div>
    <input type = 'checkbox' checked = {props.item.checked} onChange = {() =>{props.onChange(props.item.id)}}/> 
    <p>{props.item.text}</p>
    </div>);
}

export default TodoItem;