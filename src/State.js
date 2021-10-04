import React from 'react';
import {connect} from 'react-redux';

function State(props) {
    const { unDoneLength, doneLength, dispatch } = props;
    return (
        <div id="todo-stats">
            <span className="todo-count">
                <span className="number">{unDoneLength}</span>
                <span className="word">项待完成</span>
            </span>
            {
                doneLength > 0?
                <span className="todo-clear">
                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch({
                            type: 'REMOVE_DONE',
                        })
                    }}
                >
                    清除 <span>{doneLength}</span> 已完成事項
                </a>
            </span>
            :
            ""
            }
        </div>
    )
}

export default connect((state) => {
    let unDoneLength = state.filter((item, index) => !item.done).length;
    let doneLength = state.length - unDoneLength;
    return {
        unDoneLength,
        doneLength
    };
})(State);