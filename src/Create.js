import React, { useState } from 'react';
import {connect} from "react-redux";

function Create(props) {
    const [val, setVal] = useState('');
    let {dispatch} = props;

    return (
        <div id="create-todo">
            <input
                id="new-todo" 
                placeholder="What needs to be done?" 
                autoComplete="off"
                type="text"
                // defaultValue=""
                value={val}
                onChange={({target}) => {
                    setVal(target.value);
                }}
                onKeyDown={({target, keyCode}) => {
                    if(keyCode === 13) {
                        dispatch({
                            type: 'ADD',
                            txt: target.value
                        })
                        target.value = '';
                    }
                }}
            />
        </div>
    )
}

export default connect()(Create);