import React from 'react';
import {connect} from 'react-redux'
import {setVisibilityFilter, VisibilityFilters} from '../actions'
function Footer({dispatch}){
    return (
    <div>
        <span>show: </span>
        <button onClick = {() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))}>All</button>
        <button onClick = {() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))}>Active</button>
        <button onClick = {() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))}>Completed</button>
    </div>
    );
}
export default connect()(Footer);