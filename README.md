# Redux-Vanilla-JavaScript
Example to demonstrate usage of Redux with Vanilla JavaScript

## Application Demo
[Redux with Vanilla Javascript](https://chaitanyakaranam.github.io/Redux-Vanilla-JavaScript/)

## To-Do List
We will be creating To-Do list with Vanilla JavaScript and later on add Redux for state Management.

Redux with React is considered confusing because there are libraries like ```react-redux ``` that wraps up the ground work you need to do to setup Redux.

With this example, we will understand how Redux works without these libraries on Vanilla JavaScript.

___

### Using Vanilla JavaScript

We use one state object to store all the information of our application.

```
let appState = {
    totalItems: 0,
    todo: {},
    completed: {},
    pending: {}
}

```

We will be storing items in the below format.

```
completed: {
  1: {
    item: "Learn React"
  },
  2: {
    item: "Learn Redux"
  }
}
```

### Using Redux

We will be using 4 individual states to manage data in our application.

```
completedList: {}
pendingList:{
  1: {item: "Learn React"}
}
todoList: {
  1: {item: "Learn React"}
}
totalItems: {count: 1}
```

#### Actions

We bind our Action Creators to store dispatch methods.

```
// Dispatch binding functions
const bindAddTotalItems = () => store.dispatch(addTotalItems());
const bindAddTodoList = (todo) => store.dispatch(addTodoList(todo));
const bindAddPendingList = (todo) => store.dispatch(addPendingList(todo));

function addTodo(todo){
    bindAddTotalItems();
    bindAddTodoList(todo);
    bindAddPendingList(todo);
}
```

Whenever we need to get current state, we use store.getState()

```
// Add new to-do item
function addTodoList(todo){
    return {
        type: ADD_TODO_LIST,
        payload: {
            count: store.getState()['totalItems']['count'],
            todo
        }
    }
}
```

#### Reducers

We have Reducers to manage individual state objects. We avoid state mutation by returning new state.

```
// Add total to-do items
function reducer_totalItems_todo_add(state = {count: 0},action){
    switch(action.type){
        case ADD_TOTAL_ITEMS:
            return {...state, count: state.count+1};
        default:
            return state;
    }
}
```

Combine reducers will combine results of all the state in one single object. We can access this object via store.

```
const todoApp = Redux.combineReducers({
    totalItems: reducer_totalItems_todo_add,
    todoList: reducer_addTodoList,
    pendingList: reducer_PendingList,
    completedList: reducer_CompleteList
});

```

#### Store

We create a store by passing object from combine reducers.

```
const store = Redux.createStore(todoApp);
```

We can listen to changes to state by subscribing to store.

```
const UnSubscribe = store.subscribe(()=>{
    console.log(store.getState());
    renderTodoList(store.getState().todoList);
    renderPendingElements(store.getState().pendingList);
    renderCompleteElements(store.getState().completedList);
})

```

___

## Additional References

[Getting started with Materialize CSS](https://materializecss.com/about.html)

[Guide for Immutability](https://daveceddia.com/react-redux-immutability-guide/)



