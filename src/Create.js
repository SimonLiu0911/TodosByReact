import React, {PureComponent} from 'react';

class Create extends PureComponent {
    state = {
        val: '',
    }
    render() {
        let {addData} = this.props;
        let {val} = this.state
        return (
            <div id="create-todo">
                <input
                    id="new-todo"
                    placeholder="What needs to be done?"
                    type="text"
                    value={val}
                    onChange={(e)=>{
                        this.setState({
                            val:e.target.value
                        })
                    }}
                    onKeyDown={(e)=>{
                        if(e.keyCode === 13) {
                            if(!val.trim()){
                                alert("Plz type something!");
                                return;
                            }
                            addData(val);
                            this.setState({
                                val: '',
                            })
                        }
                    }}
                />
            </div>
        );
    }
}

export default Create;