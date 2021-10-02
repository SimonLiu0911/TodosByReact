import React from 'react';
import Li from './Li'

function Todos(props) {
    let { data, checkData, editText, remove, setData } = props;
    return (
        <ul id="todo-list">
            {
                data.map((item) => {
                    return (
                        <Li
                            key={item.id}
                            item={item}
                            checkData={checkData}
                            editText={editText}
                            remove={remove}
                            setData={setData}
                        />
                    );
                })
            }
        </ul>
    )
}

export default Todos;