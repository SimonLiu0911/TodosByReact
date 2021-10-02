import React from 'react';

function State(props) {
    let { data, removeDone } = props;
    return (
        <div id="todo-stats">
            <span className="todo-count"></span>
            <span className="number">{data.length}</span>
            <span className="word"> item</span>
            {
                data.length < 1 ? ""
                :
                <span className="todo-clear">
                    <a href="/" onClick={(e)=>{
                        e.preventDefault();
                        removeDone();
                    }}>
                        <span className="word-done">{data.length}</span> Completed
                    </a>
                </span>
            }
        </div>
    )
}

export default State;