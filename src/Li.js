import React, { useState, useRef, useEffect } from 'react';

function Li(props) {
    const {data, dispatch} = props;
    const {id, txt, done} = data;
    const [edit, setEdit] = useState(false);
    const [inputVal, setInputVal] = useState(txt);
    const elEdit = useRef();
    useEffect(() => {
        if(edit) {
            elEdit.current.select();
        }
    }, [edit])
    
    return (
        <li className={edit?"editing":""}>
            <div className={"todo " + (done?"done":"")}>
                <div className="display">
                    <input
                        className="check"
                        type="checkbox"
                        checked={done}
                        onChange={(e) => {
                            dispatch({
                                type: 'DONE',
                                id,
                                done: e.target.checked
                            })
                        }}
                    />
                    <div
                        className="todo-content"
                        onDoubleClick={(e) => {
                            setEdit(true);
                        }}
                    >
                        {txt}
                    </div>
                    <span 
						className="todo-destroy"
                        onClick={() => {
                            console.log('trigger delete');
                        }}
					></span>
                </div>
                <div className="edit">
                    <input 
                        className="todo-input"
                        type="text"
                        value={inputVal}
                        ref={elEdit}
                        onChange={(e) => {
                            console.log('trigger change');
                            setInputVal(e.target.value);
                        }}
                        onBlur={() => {
                            setEdit(false);
                            if(!inputVal.trim()) {
                                setInputVal(txt);
                            } else {
                                dispatch({
                                    type: 'EDIT',
                                    id,
                                    txt: inputVal
                                })
                            }
                        }}
                    />
                </div>
            </div>
        </li>
    )
}

export default Li;