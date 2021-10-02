import React, { useState } from 'react';

function Create(props) {
    let [ val, setVal ] = useState("");
    let { addData } = props;
    return (
        <div id="create-todo">
            <input
                id="new-todo"
                placeholder="What needs to be done?"
                type="text"
                value={val}
                onChange={(e)=>{
                    setVal(e.target.value)
                }}
                onKeyDown={(e)=>{
                    if(e.keyCode === 13) {
                        if(!val.trim()){
                            alert("Plz type something!");
                            return;
                        }
                        addData(val.trim());
                        setVal('');
                    }
                }}
            />
        </div>
    )
}

export default Create;