const lists = {
    1 : {name: "Task List", todos:['Sweep the dog' , 'Clean the patio']},
    2 : {name: "Grocery List", todos:[{text: 'task1', completed: false}, {text: 'task2', completed: false}]}
}


const currentList = {
  name: 'Shopping list',
  todos: [
    {
      text: 'the will to live',
      completed: false
    },
    {
      text: 'fucks to give',
      completed: false
    }
  ]
}

function render() {
    // this will hold the html that will be displayed in the sidebar
    let listsHtml = '<ul class="list-group">';
    // iterate through the lists to get their names
    lists.forEach((list) => {
      listsHtml += `<li class="list-group-item">${list.name}</li>`;
    });
   
    listsHtml += '</ul>';
    // print out the lists
   
    document.getElementById('lists').innerHTML = listsHtml;
    // print out the name of the current list
   
    document.getElementById('current-list-name').innerText = currentList.name;
    // iterate over the todos in the current list
   
    let todosHtml = '<ul class="list-group-flush">';
    currentList.todos.forEach((list) => {
      todosHtml += `<li class="list-group-item">${todo.text}</li>`;
    });
    // print out the todos
    document.getElementById('current-list-todos').innerHTML = todosHtml;
   }


function addTodo() {
  const text = document.getElementById('form-control').ariaValueMax;
  if(text) {
    currentList.todos.push({
      text: text,
      completed: false
    })
    render();
  }
}



   
