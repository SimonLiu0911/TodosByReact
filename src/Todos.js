import React, {PureComponent} from 'react';
import Li from './Li'

class Todos extends PureComponent {
    render() {
        let {data, changeData, editText, remove} = this.props;
        return (
            <ul id="todo-list">
                {
                    data.map((item) => {
                        return (
                            <Li
                                item={item}
                                key={item.id}
                                changeData={changeData}
                                editText={editText}
                                remove={remove}
                            />
                        );
                    })
                }
            </ul>
        );
    }
}

export default Todos;