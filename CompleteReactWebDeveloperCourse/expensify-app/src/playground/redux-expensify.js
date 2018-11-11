import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// amount is in pennies

// ADD_EXPENSE
const addExpense = (
    {
         description = '', 
         note = '', 
         amount = 0, 
         creaetdAt = 0
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        creaetdAt
    }
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

});

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
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ];
        case 'REMOVE_EXPENSE':
            return  state.filter( ({ id }) => id !== action.id);
            
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

store.subscribe( ()=> {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense( {id: expenseOne.expense.id}));

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