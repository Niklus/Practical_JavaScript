/*   
   Todo's app core requirements 
1. Should Store my todos
2. Should have a way to display my todos
3. Should have a way of adding new todos
4. Should have a way of changing todos
5. Should have a way of deleting my todo
*/

// Define simple functions for apps core requirements

var todos = ["item1","item2","item3"]; 
 
function displayTodos(){
	console.log("My Todos: ",todos);
}

function addTodo(todo){
	todos.push(todo);
	displayTodos();
}

function changeTodo(position, newValue){
  todos[position] = newValue;
  displayTodos();
}

function deleteTodo(position){
	todos.splice(position, 1);
	displayTodos();
}