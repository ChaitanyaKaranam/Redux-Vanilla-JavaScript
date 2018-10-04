// Renders Specific DOM items when store is updated

const store = Redux.createStore(todoApp);

console.log(store.getState());

const UnSubscribe = store.subscribe(()=>{
    console.log(store.getState());
    renderTodoList(store.getState().todoList);
    renderPendingElements(store.getState().pendingList)
})

const renderTodoList = (todo) => {

    // Delete existing DOM content
    var table = document.getElementById('todoTable');
    while(table.rows.length>0){
        table.deleteRow(0);
    }

    // Add header
    let node = document.createElement('thead');
    node.innerHTML = `<tr>
                        <th>To-Do</th>
                        <th>Status</th>
                    </tr>`;
    table.appendChild(node);
    
    // Add rows
    for(let id in todo){
        if(todo.hasOwnProperty(id)){
            // Make modification to the DOM
            let itemID = id;
            var table = document.getElementById('todoTable');
            var row = table.insertRow(table.rows.length);
            var task = row.insertCell(0);
            task.innerHTML += "<td>"+todo[id].item+"</td>";
            task.setAttribute("id",`todoItem-${itemID}`);
            var status = row.insertCell(1);
            status.innerHTML += "<td><label><input id=\""+itemID+"\" type=\"checkbox\" onclick=\"toggleTodo(this)\"/><span></span></label></td>";
        }
    }
}

const renderPendingElements = (pending) => {

    // Delete existing nodes
    document.getElementById('pendingItems').innerHTML='';

    for(let itemID in pending){
        if(pending.hasOwnProperty(itemID)){
            // Make modification to DOM
            var ul = document.getElementById('pendingItems');
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(pending[itemID]['item']));
            li.setAttribute("id", `pendingList-${itemID}`);
            ul.appendChild(li);
        }
    }    
}
