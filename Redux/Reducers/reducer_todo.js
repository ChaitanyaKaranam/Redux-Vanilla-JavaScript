let initialState = {
    totalItems: 0,
    todo: {},
    completed: {},
    pending: {}
}

function todos(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            let id = initialState.totalItems+1;
            let newtodo={};
            newtodo[id] = {item: action.payload.item};
            return Object.assign(
                        {},
                        initialState,
                        {
                            totalItems : initialState.totalItems+1,
                            todo: {
                                ...initialState.todo,
                               newtodo
                            },
                        // completed,
                            pending: Object.assign(
                                {},
                                initialState.pending,
                                {id: {item: action.payload.item}}
                             )
                        }                        
                    )
        default:
            return state;
    }
}

const todoApp = Redux.combineReducers({
    todos
});

