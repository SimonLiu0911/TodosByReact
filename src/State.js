import React, {PureComponent} from 'react';

class State extends PureComponent {
    render() {
        let {data, removeDone} = this.props;
        let doneData = data.filter((item) => { return item.done});
        let undoneData = data.filter((item) => { return !item.done});
        return (
            <div id="todo-stats">
                <span className="todo-count"></span>
                <span className="number">{undoneData.length}</span>
                <span className="word"> item</span>
                {
                doneData.length<1?"":
                <span className="todo-clear">
                    <a href="/#" onClick={()=>{
                        removeDone();
                    }}>
                        <span className="word-done">{doneData.length}</span> Completed
                    </a>
                </span>
                }
            </div>
        );
    }
}

export default State;