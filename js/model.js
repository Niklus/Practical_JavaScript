"use strict";

/* ======= Model ======= */

var model = {

    init: function() {
        if (!localStorage.todos) {
            localStorage.todos = JSON.stringify([]);
        }
    },

    getTodos: function() {
        return JSON.parse(localStorage.todos);
    },

    storeTodos: function(todos) {
        localStorage.todos = JSON.stringify(todos);
    },

    addTodo: function(todotext){

        var todos = this.getTodos();
        todos.push({
            todotext: todotext,
            completed: false
        });
        this.storeTodos(todos);
    },

    changeTodo: function(position, todotext){

        var todos = this.getTodos();
        todos[position].todotext = todotext;
        this.storeTodos(todos);
    },

    deleteTodo: function(position){
        
        var todos = this.getTodos();
        todos.splice(position, 1);
        this.storeTodos(todos);
    }, 

    toggle: function(position){

        var todos = this.getTodos();
        var todo = todos[position];
        todo.completed = !todo.completed;
        this.storeTodos(todos);
    },

    toggleAll: function(){

        var todos = this.getTodos();
        var totalTodos = todos.length;
        var completedTodos = 0;

        //Get number of completed todos        
        for(var i = 0; i < totalTodos; i++){     
            if(todos[i].completed === true ){
                completedTodos++;
            } 
        }

        // Case 1: If everything(task) is true(complete) make everything false(incomplete)       
        if(completedTodos === totalTodos){      
            for(var i = 0; i < totalTodos; i++){
                todos[i].completed = false;
            }
        // Case 2: Otherwise make everything true(complete) 
        } else {                                
            for(var i = 0; i < totalTodos; i++){
                todos[i].completed = true;
            }
        }

        this.storeTodos(todos);
    },

    clearDone: function() {

        var todos = this.getTodos();
             
        for(var i = 0; i < todos.length; i++){
            
            if(todos[i].completed){  
               delete todos[i];
            }
        } 

        var filtered = todos.filter(function(val){
            return val;
        });

        this.storeTodos(filtered);
    }
};