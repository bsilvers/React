import uuid from 'uuid';


// ADD_EXPENSE
export const addExpense = (
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
// REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

});


// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});