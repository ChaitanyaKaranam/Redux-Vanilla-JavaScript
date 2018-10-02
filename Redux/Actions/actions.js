const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo(todo){
    return{
        type: ADD_TODO,
        payload: todo
    }
}

// Dispatch binding functions
const bindAddTodo = (todo) => store.dispatch(addTodo(todo));
