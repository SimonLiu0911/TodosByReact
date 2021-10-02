import React, {useState, useRef, useEffect} from 'react';

function Li(props) {
    const [ edit, setEdit ] = useState(false);
    const elEdit = useRef(null);
    console.log(elEdit.current);
    let { item, checkData, editText, remove } = props;
    useEffect(() => {
        if(edit) {
            elEdit.current.select();  // 讓切換到編輯時可以直接focus在input上
        } else {
            if(!item.val.trim()) {
                setEdit(true);
            }
        }
    })
    return (
        <li className={ edit ? "editing" : "" }>
            <div className={ "todo " + ( item.done ? "done" : "" ) }>
                <div className="display">
                    <input
                        className="check"
                        type="checkbox"
                        onChange={(e)=>{
                            checkData(item.id, e.target.checked);
                        }}
                    />
                    <div
                        className="todo-content"
                        onDoubleClick={()=>{
                            setEdit(true);
                        }}
                    >{item.val}</div>
                    <span
                        className="todo-destroy"
                        onClick={()=>{
                            remove(item.id);
                        }}
                    ></span>
                </div>
                <div className="edit">
                    <input
                        ref={elEdit}
                        className="todo-input"
                        type="text"
                        // val={elEdit.current}
                        onChange={(e)=>{
                            console.log('change', e.target);
                            editText(item.id, e.target.value);
                        }}
                        onBlur={(e)=>{
                            setEdit(false);
                            if (item.val.trim()) {
                                editText(item.id, item.val)
                            } else {
                                editText(item.id, item.val)
                            }
                        }}
                    />
                </div>
            </div>
        </li>
    )
}

export default Li;