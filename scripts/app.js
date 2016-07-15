/**  
   Todo's app core requirements 
1. Should Store my todos
2. Should have a way to display my todos
3. Should have a way of adding new todos
4. Should have a way of changing todos
5. Should have a way of deleting my todo
6. Should have a toggle-complete and toggle-all
*/
"use strict";
 
var todoList = {
       
    todos: [], 

    displayTodos: function(){ 
      if(this.todos.length === 0){
        console.log("Your todo list is empty!");
      } else { 
        console.log("My Todos:");
        for(var i = 0; i < this.todos.length; i++){
          if(this.todos[i].completed === true){
            console.log("(x)", this.todos[i].todotext);
          } else {
            console.log("( )", this.todos[i].todotext);
          }
        }
      }
    },

    addTodo: function(todotext){

  //  if(todotext.length > 0){  // Disabling the ability of adding an empty todotext?
        this.todos.push({
          todotext: todotext,
          completed: false
        });
  //  }
      this.displayTodos(); 
    },

    changeTodo: function(position, todotext){
      this.todos[position].todotext = todotext;
      this.displayTodos();
    },

    deleteTodo: function(position){
      this.todos.splice(position, 1);
      this.displayTodos();
    }, 

    toggleCompleted: function(position){
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
    },

    toggleAll: function(){

      var totalTodos = this.todos.length;
      var completedTodos = 0;
      
      //Get number of completed todos        
      for(var i = 0; i < totalTodos; i++){     
        if(this.todos[i].completed === true ){
          completedTodos++;
        } 
      }
       
      // Case 1: If everything(task) is true(complete) make everything false(incomplete).        
      if(completedTodos === totalTodos){      
        for(var i = 0; i < totalTodos; i++){
          this.todos[i].completed = false;
        }
      
      // Case 2: Otherwise make everything true(complete) 
      } else {                                
        for(var i = 0; i < totalTodos; i++){
          this.todos[i].completed = true;
        }
      }
      this.displayTodos();
    }
  };


  var handlers = {

    displayTodos: function(){
      todoList.displayTodos();
    },

    addTodo: function(){

      var addTodoTextInput = document.getElementById("addTodoTextInput");    
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = "";

    }, 

    changeTodo: function(){

      var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
      var changeTodoTextInput = document.getElementById("changeTodoTextInput");

      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoTextInput.value = "";
      changeTodoPositionInput.value = "";
    },

    deleteTodo: function(){

      var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
      todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
      deleteTodoPositionInput.value = "";

    },

    toggleCompleted: function(){

      var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
      todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput.value = "";
    },

    toggleAll: function(){
      todoList.toggleAll();
    }
  };