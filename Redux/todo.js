// Initialize Application state
let appState = {
    totalItems: 0,
    todo: {},
    completed: {},
    pending: {}
}


function addRow(e){
    e.preventDefault();
    if(document.getElementById('newTodo').value !== ''){

        //Call Actions
        addTodo({item: document.getElementById('newTodo').value});

        // // Add todo state Object
        // if(!appState['todo'][itemID]){
        //     appState['todo'][itemID] = { item: document.getElementById('newTodo').value};
        // }
        
        // // Add Task to pending state object
        // if(!appState['pending'][itemID]){
        //     appState['pending'][itemID] = {item: document.getElementById('newTodo').value}
        // }

        // // Render Pending DOM Elements
        // renderPendingElements(appState['pending'], itemID);

        // // Increment the total number of items in state object
        // appState['totalItems'] += 1;

        // clear input text in DOM
        document.getElementById('newTodo').value = "";   
    }
}

function toggleTodo(cb){

    // Make modification to the DOM content
    if(cb.checked){                
        // Check if element is present in DOM
        if(!document.getElementById(`completedList-${cb.id}`)){
            var ul = document.getElementById('completedItems');
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(appState['pending'][cb.id]['item']));
            li.setAttribute("id", `completedList-${cb.id}`);
            ul.appendChild(li);
        }                
        // Remove DOM element from pending list
        var removeElement =  document.getElementById(`pendingList-${cb.id}`);
        removeElement.parentNode.removeChild(removeElement);
    }else{
        // Check if element is present in DOM
        if(!document.getElementById(`pendingList-${cb.id}`)){
            var ul = document.getElementById('pendingItems');
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(appState['completed'][cb.id]['item']));
            li.setAttribute("id", `pendingList-${cb.id}`);
            ul.appendChild(li);
        }                
        // Remove DOM element from pending list
        var removeElement =  document.getElementById(`completedList-${cb.id}`);
        removeElement.parentNode.removeChild(removeElement);
    }
    
    // Make modification to application state
    // We need to modidy DOM State before changing the app state because we delete state objects
    if(cb.checked){
        // Add task to Completed object
        if(!appState['completed'][cb.id]){
            appState['completed'][cb.id] = {item: appState['pending'][cb.id]['item']}
        }
        // Remove task from pending object
        delete appState['pending'][cb.id];
    }else{
        // Add task to Pending object
        if(!appState['pending'][cb.id]){
            appState['pending'][cb.id] = {item: appState['completed'][cb.id]['item']}
        }
        // Remove task from Completed object
        delete appState['completed'][cb.id];
    }

}

// function renderPendingElements(pending, itemID){
    
//     // Make modification to DOM
//     var ul = document.getElementById('pendingItems');
//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode(pending[itemID]['item']));
//     li.setAttribute("id", `pendingList-${itemID}`);
//     ul.appendChild(li);
// }