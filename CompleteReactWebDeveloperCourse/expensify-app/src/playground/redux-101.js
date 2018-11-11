import { createStore } from 'redux';

// Action generators - functions taht return action objects
// const add = ({a, b}, c) => {
//     return a + b + c;
// };
// console.log(add({ a: 1, b: 12}, 100));

const incremementCount = ( { incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

// setCount
const setCount = ({count } = {}) => ({
    type: 'SET',
    count
});
// resetCount
const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions  
// 2. Never change state or action 

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore( countReducer);

// watch for changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incremementCount({ incrementBy: 5}));
store.dispatch(incremementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ count: 101 }));