import React, {useState}from 'react';
import Todo from './Todo.js'
import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import {VisibilityFilters} from '../actions'
function TodoList({todos, toggleTodo}){
    if (!todos)
        return <h1>god damn bitch</h1>
    return (
        <ul>{todos.map(todo => <Todo key = {todo.id} {...todo} onClick = {() => toggleTodo(todo.id)} /> )}</ul>
    );

    // return (
    //     <ul>{todos.map(todo => <li key = {todo.id} onClick = {() => toggleTodo(todo.id)} style = {{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</li>)}</ul>
    // );

}

function getListByFilter(list, filter){
    switch(filter){
        case VisibilityFilters.SHOW_ALL:
            return list;
        case VisibilityFilters.SHOW_ACTIVE:
            return list.filter(item => !item.completed);
        case VisibilityFilters.SHOW_COMPLETED:
            return list.filter(item => item.completed);
        default:
            return list;
    }
}

const mapStateToProps = state => ({
    todos: getListByFilter(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);