import { createStore, combineReducers } from 'redux';

// amount is in pennies

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        default:
        return state;
    }
};

// Filters reducer
// text => '', sortBy => 'date',  startDate => undefined, endDate => undefined
const filtersReducerDefaultState  = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
 };
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default:
        return state;
    }
};

// store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'poisidd',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};