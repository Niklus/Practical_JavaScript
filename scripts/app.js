

  //Requirement: Modify delete function

"use strict";
 
  var todoList = {
       
    todos: [], // Should store array of objects: [ {todotext: "text2", completed: false}, {todotext: "text2", completed: false} ] 

    addTodo: function(todotext){

  //  if(todotext.length > 0){  // Disabling the ability of adding an empty todotext?
        this.todos.push({
          todotext: todotext,
          completed: false
        });
  //  }
    },

    changeTodo: function(position, todotext){
      this.todos[position].todotext = todotext;
    },

    deleteTodo: function(position){
      this.todos.splice(position, 1);
    }, 

    toggleCompleted: function(position){
      var todo = this.todos[position];
      todo.completed = !todo.completed;
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
    }
  };
  

  var handlers = {

    addTodo: function(){

      var addTodoTextInput = document.getElementById("addTodoTextInput");    
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = "";
      view.displayTodos();
    }, 

    changeTodo: function(){

      var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
      var changeTodoTextInput = document.getElementById("changeTodoTextInput");

      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoTextInput.value = "";
      changeTodoPositionInput.value = "";
      view.displayTodos();    
    },

    deleteTodo: function(position){

      todoList.deleteTodo(position);
      view.displayTodos();
    },

    toggleCompleted: function(){

      var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
      todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput.value = "";
      view.displayTodos();
    },

    toggleAll: function(){
     
      todoList.toggleAll();
      view.displayTodos();
    }
  };

  
  //The View
  var view = {

    displayTodos: function() {

      var todosUl = document.querySelector("ul");
      todosUl.innerHTML = "";

      for(var i = 0; i < todoList.todos.length; i++){

        var todoLi = document.createElement("li");

        if(todoList.todos[i].completed === true){
          todoLi.textContent = "(x) " + todoList.todos[i].todotext;
        } else {
          todoLi.textContent = "( ) " + todoList.todos[i].todotext;
        }
        
        todoLi.id = i;
        todosUl.appendChild(todoLi);
        todoLi.appendChild(this.createDeleteButton()); 
      }
    }, 

    createDeleteButton: function(){
     
      var deleteButton = document.createElement("button");
      deleteButton.textContent = 'Delete'; 
      deleteButton.className = 'deleteButton';
      return deleteButton;
    },

    setUpEventListeners: function(){
      
      var todosUl = document.querySelector("ul");
  
        todosUl.addEventListener('click',function(event){
          
          //console.log(event.target.parentNode.id);

          //Get element that was clicked on
          var elementClicked = event.target;

          //Check if elementClicked is a delete button 
          if(elementClicked.className === 'deleteButton'){
            handlers.deleteTodo(elementClicked.parentNode.id);
          }
        });
      }
  };

  view.setUpEventListeners();





  