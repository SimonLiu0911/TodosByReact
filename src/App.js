import React, {PureComponent} from 'react';
import Title from './Title';
import Create from './Create';
import Todos from './Todos';
import State from './State';
import './App.css';

class App extends PureComponent {
    state = {
        data: [
            {
                id: 0,
                txt: 'example',
                done: false,
            }
        ],
    }
    addData = (txt) => {
        let {data} = this.state;
        data.push({
            id: Date.now(),
            txt,
            done: false,
        });
        this.setState({
            // data  // 因為用PureComponent，它只比對第一層(data)，發現第一層一樣所以不更新，需改成如下返回一個新對象
            data: [...data]
        });
    }
    changeData = (id, done) => {
        let {data} = this.state;
        data.forEach((item) => {
            if(item.id === id){
                item.done = done
            }
        });
        this.setState({
            data: data.map((item) => {return {...item}})
        });
    }
    editText = (id, txt) => {
        let {data} = this.state;
        data.forEach((item) => {
            if(item.id === id){
                item.txt = txt
            }
        });
        this.setState({
            data: data.map((item) => {return {...item}})
        });
    }
    remove = (id) => {
        let {data} = this.state;
        data = data.filter((item) => {return (item.id!==id)})
        this.setState({
            data
        })
    }
    removeDone = () => {
        let {data} = this.state;
        data = data.filter((item) => {return (!item.done)})
        this.setState({
            data
        })
    }
    render(){
        let {data} = this.state;
        return(
            <div id="todoapp">
                <Title />
                <div className="content">
                    <Create addData={this.addData} />
                    <Todos
                        data={data}
                        changeData={this.changeData}
                        editText={this.editText}
                        remove={this.remove}
                    />
                    <State
                        data={data}
                        removeDone={this.removeDone}    
                    />
                </div>
            </div>
        );
    }
}

export default App;

/*
1. 確定數據格式
2. 根據數據完成列表的渲染
3. 完成添加功能
4. 完成單向錯誤
*/