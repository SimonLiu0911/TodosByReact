import { createStore } from "redux";

function reducer(state=[
    {
        id: 1,
        txt: 'example',
        done: true
    }
], action) {
    switch(action.type) {
        case 'ADD':
            state.push({
                id: Date.now(),
                txt: action.txt,
                done: false
            })
            return [...state];
        case 'DONE':
            state.forEach((item, index) => {
                if(item.id === action.id) {
                    item.done = action.done;
                }
            })
            return [...state];
        case 'EDIT':
            state.forEach((item) => {
                if(item.id === action.id) {
                    item.txt = action.txt
                }
            })
            return [...state];
        case 'REMOVE':
            console.log('REMOVE');
            return [...state];
        case 'REMOVE_DONE':
            return state.filter((item, index) => !item.done);
    }
    return state;
}

const store = createStore(reducer);

export default store;