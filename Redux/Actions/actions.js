const ADD_TODO_LIST = 'ADD_TODO_LIST';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_TOTAL_ITEMS = 'ADD_TOTAL_ITEMS';
const ADD_PENDING_LIST = 'ADD_PENDING_LIST';

// Dispatch binding functions
const bindAddTotalItems = () => store.dispatch(addTotalItems());
const bindAddTodoList = (todo) => store.dispatch(addTodoList(todo));
const bindAddPendingList = (todo) => store.dispatch(addPendingList(todo));

function addTodo(todo){
    bindAddTotalItems();
    bindAddTodoList(todo);
    bindAddPendingList(todo);
}

function addTotalItems(){
    return {
        type: ADD_TOTAL_ITEMS
    }
}

function addTodoList(todo){
    return {
        type: ADD_TODO_LIST,
        payload: {
            count: store.getState()['totalItems']['count'],
            todo
        }
    }
}

function addPendingList(todo){
    return {
        type: ADD_PENDING_LIST,
        payload: {
            count: store.getState()['totalItems']['count'],
            todo
        }
    }
}
