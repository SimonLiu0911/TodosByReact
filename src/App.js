import React, { useState } from 'react';
import Title from './Title';
import Create from './Create';
import Todos from './Todos';
import State from './State';
import './App.css';


function App() {
    let [data, setData] = useState([]);  // 用來存放list

    function addData(val) {
        setData([...data, {
            id: Date.now(),
            val,
            done: false
        }])
    }
    function checkData(id, done) {
        data.forEach(item => {
            if (id === item.id) {
                // item.done = !done;
            }
        })
    }
    function editText(id, txt) {
        console.log(editText);
        data.forEach((item) => {
            if(item.id === id){
                item.txt = txt
            }
        });
    }
    function remove(id) {
        data = data.filter((item) => {
            return (item.id !== id)
        });
        setData(data);
    }
    function removeDone() {
        data = data.filter((item) => {return (!item.done)});
    }
    return (
        <div id="todoapp">
            <Title />
            <div className="content">
                <Create
                    addData={ addData }
                ></Create>
                <Todos
                    data={ data }
                    checkData={ checkData }
                    editText={ editText }
                    remove={ remove }
                    setData={setData}
                ></Todos>
                <State
                    data={ data }
                    removeDone={ removeDone } 
                ></State>
            </div>
        </div>
    )
}

export default App;

/*
1. 確定數據格式
2. 根據數據完成列表的渲染
3. 完成添加功能
4. 完成單向錯誤
*/