import React, {useState}from 'react';
import {connect} from 'react-redux'
import {setVisibilityFilter, VisibilityFilters} from '../actions'
function Footer({dispatch}){
    const [active, setActive] = useState(VisibilityFilters.SHOW_ALL);
    const handleClick = (type, e) => {
        dispatch(setVisibilityFilter(type));
        setActive(type);
    }
    return (
    <div>
        <span>show: </span>
        <button disabled = {active == VisibilityFilters.SHOW_ALL} onClick = {(e) => handleClick(VisibilityFilters.SHOW_ALL, e)}>All</button>
        <button disabled = {active == VisibilityFilters.SHOW_ACTIVE} onClick = {(e) => handleClick(VisibilityFilters.SHOW_ACTIVE, e)}>Active</button>
        <button disabled = {active == VisibilityFilters.SHOW_COMPLETED} onClick = {(e) => handleClick(VisibilityFilters.SHOW_COMPLETED, e)}>Completed</button>
    </div>
    );
}
export default connect()(Footer);