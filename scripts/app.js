/*   
   Todo's app core requirements 
1. Should Store my todos
2. Should have a way to display my todos
3. Should have a way of adding new todos
4. Should have a way of changing todos
5. Should have a way of deleting my todo
*/
"use strict";

// Create a todoList object with methods 

var todoList = {
	
  todos: ["item1","item2","item3"],
	
  displayTodos: function(){
	console.log("My Todos: ", this.todos);
  },

  addTodo: function(todo){
	this.todos.push(todo);
	this.displayTodos(); 
  },

  changeTodo: function(position, newValue){
    this.todos[position] = newValue;
    this.displayTodos();
  },

  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  } 
};