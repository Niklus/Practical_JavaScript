"use strict";

var model = {

    todos: [],

    addTodo: function(todotext){

        this.todos.push({
            todotext: todotext,
            completed: false
        });
    },

    changeTodo: function(position, todotext){
        this.todos[position].todotext = todotext;
    },

    deleteTodo: function(position){
        this.todos.splice(position, 1);
    }, 

    toggle: function(position){
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
    },

    clearAll: function() {
        this.todos = [];
    }
};


var ctrl = {

    init: function(){
        view.init();
    },

    addTodo: function(todotext){
        model.addTodo(todotext);
        view.render();
    },

    changeTodo: function(position, todotext){

        model.changeTodo(position,todotext);
        view.render();
    },

    deleteTodo: function(position) {
        model.deleteTodo(position);
        view.render();
    },

    toggle: function(position){
        model.toggle(position);
        view.render();
    },

    toggleAll:function() {
        model.toggleAll();
        view.render();
    },

    clearAll: function() {
        model.clearAll();
        view.render();
    },

    getTodos: function() {
        return model.todos;
    },
};


var view = {

    init: function() {

        // Initialize event listeners
        var addTodo = document.getElementById("addTodo");
        addTodo.addEventListener('keypress',function(e){

        var todotext = addTodo.value
            if(e.keyCode == 13 && todotext){
                ctrl.addTodo(todotext);
                addTodo.value = '';
            }
        });

        var todosUl = document.querySelector("ul");
        
        todosUl.addEventListener('click',function(e){

            var element = e.target;
            if(element.className === 'deleteButton'){ 
                
                ctrl.deleteTodo(element.parentNode.id);

            }else if(element.className === 'toggleButton'){
                 
                ctrl.toggle(element.parentNode.id);
            }
        });

        todosUl.addEventListener('dblclick',function(e){

            var element = e.target;
            if(element.className === 'editInput'){ 
                element.readOnly=false;
            }
        });

        todosUl.addEventListener('keypress',function(e){

            var element = e.target;
            
            if(element.className === 'editInput'){ 

                var input = element.value;
                var position = element.parentNode.id;

                if(e.keyCode == 13 && input){

                    ctrl.changeTodo(position, input);
                    
                    element.value = '';
                }
            }
        });

        var toggleAll = document.getElementById("toggleAll");
        toggleAll.addEventListener('click',function(e){
            ctrl.toggleAll();
        }); 

        var clearAll = document.getElementById("clearAll");
        clearAll.addEventListener('click',function(e){
            ctrl.clearAll();
        }); 

        //this.render(); // uncomment when adding localstorage
    },

    render: function() {

        var todos = ctrl.getTodos();

        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";

        for(var i = 0; i < todos.length; i++){

            var todoLi = document.createElement("li"); 
            var toggleText;     

            if(todos[i].completed === true){
                toggleText = "(x) ";
            } else {
                toggleText = "( ) ";
            }

            todoLi.id = i;

            todosUl.appendChild(todoLi);
            todoLi.appendChild(this.createToggleButton(toggleText));
            todoLi.appendChild(this.createEditInput(' '+todos[i].todotext));
            todoLi.appendChild(this.createDeleteButton());
        }
    }, 

    createDeleteButton: function(){

        var deleteButton = document.createElement("button");
        deleteButton.textContent = 'delete'; 
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },

    createToggleButton: function(toggleText){

        var toggleButton = document.createElement("button");
        toggleButton.textContent = toggleText; 
        toggleButton.className = 'toggleButton';
        return toggleButton;
    },

    createEditInput: function(todotext){

        var input = document.createElement("input");
        input.placeholder = 'edit'; 
        input.className = 'editInput';
        input.value = todotext;
        input.readOnly = true;
        return input;
    },
};

ctrl.init();





  