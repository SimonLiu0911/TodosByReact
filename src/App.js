import React from 'react';
import Title from './Title';
import Create from './Create';
import Todos from './Todos';
import State from './State';
import './App.css';
import {connect} from 'react-redux';

function App(props) {
    let {length} = props;
    return (
        <div className="todoapp">
            <Title />
            <div className="content">
                <Create />
                {length?<Todos />:""}
                {length?<State />:""}
            </div>
        </div>
    )
}

export default connect(state => ({
    length:state.length
}))(App);