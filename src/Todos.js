import React from 'react';
import Li from './Li'
import {connect} from 'react-redux';

function Todos(props) {
    const {state, dispatch} = props;
    return (
        <ul id="todo-list">
            {
                state.map((item, index) => 
                    <Li
                        data={item}
                        key={index}
                        dispatch={dispatch}
                    />
                )
            }
        </ul>
    )
}

export default connect((state) => {
    return {state}
})(Todos);