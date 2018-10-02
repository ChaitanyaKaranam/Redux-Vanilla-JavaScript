// let initialState = {
//     totalItems: 0,
//     todo: {},
//     completed: {},
//     pending: {}
// }

function reducer_totalItems_todo_add(state = {count: 0},action){
    switch(action.type){
        case ADD_TOTAL_ITEMS:
            return {...state, count: state.count+1};
        default:
            return state;
    }
}

function reducer_addTodoList(state = {}, action){
    switch(action.type){
        case ADD_TODO_LIST:
            let newTodo = {};
            newTodo[action.payload.count] = action.payload.todo;
            return {...state, ...newTodo}
        default:
            return state;
    }
}

function reducer_addPendingList(state = {}, action){
    switch(action.type){
        case ADD_PENDING_LIST:
            let pendingTodo = {};
            pendingTodo[action.payload.count] = action.payload.todo;
            return {...state, ...pendingTodo}
        default: 
            return state;
    }
}

const todoApp = Redux.combineReducers({
    totalItems: reducer_totalItems_todo_add,
    todoList: reducer_addTodoList,
    pendingList: reducer_addPendingList
});

