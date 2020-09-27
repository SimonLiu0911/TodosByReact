import React, {PureComponent, createRef} from 'react';

class Li extends PureComponent {
    state = {
        edit: false,
        ref: createRef(),
        val: ""
    }
    static getDerivedStateFromProps(props, state){
        if (!state.edit) {
            state.val = props.item.txt
        }
        return true;
    }
    componentDidUpdate(prevProps, prevState){
        // 組件更新完成之後，判斷是否需要給input獲得焦點
        if (this.state.edit && !prevState.edit) {
            // console.log(this.state.ref.current)
            this.state.ref.current.select();
        }
    }
    render() {
        let {item, changeData, editText, remove} = this.props;
        let {id, done, txt} = item;
        let {edit, val} = this.state;
        return (
            <li className={edit?"editing":""}>
                <div className={"todo " + (done?"done":"")}>
                    <div className="display">
                        <input
                            className="check"
                            type="checkbox"
                            checked={done}
                            onChange={(e)=>{
                                changeData(id, e.target.checked);
                            }}
                        />
                        <div
                            className="todo-content"
                            onDoubleClick={()=>{
                                this.setState({
                                    edit: true,
                                })
                            }}
                        >{txt}</div>
                        <span
                            className="todo-destroy"
                            onClick={()=>{
                                remove(id);
                            }}
                        ></span>
                    </div>
                    <div className="edit">
                        <input
                            ref={this.state.ref}
                            className="todo-input"
                            type="text"
                            value={val}
                            onChange={(e)=>{
                                this.setState({
                                    val: e.target.value
                                })
                            }}
                            onBlur={()=>{
                                // this.setState({
                                //     edit: false
                                // })
                                this.state.edit=false;
                                if (val.trim()) {
                                    editText(id, val)
                                } else {
                                    editText(id, txt)
                                }
                            }}
                        />
                    </div>
                </div>
            </li>
        );
    }
}

export default Li;