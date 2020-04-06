import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
function AddTodo({dispatch}){
    const [input, setInput] = useState('');
    function handleChang(e){
        setInput(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        if (!input.trim())
            return;
        dispatch(addTodo(input));
        setInput('');
    }

    return (
        <form onSubmit = {onSubmit}>
            <input type = "text" value = {input} onChange = {handleChang} placeholder = "add todo"/>
            <button>Add Todo</button>
        </form>
    );
}
export default connect()(AddTodo);