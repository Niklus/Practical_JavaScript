"use strict";

/* ======= View ======= */

var view = {

    init: function() {

        
        var buttons = document.querySelector(".buttons");
        var inputs = document.querySelector(".inputs");

        buttons.addEventListener('click',function(e){

            var element = e.target;
            if(element.id === 'toggleAll'){ 
                ctrl.toggleAll();
            }else if(element.id === 'clearDone'){
                ctrl.clearDone();
            }
        }); 

        inputs.addEventListener('keypress',  function(e){
   
            var element = e.target;
            if(element.className === 'todoInput'){ 
                
                var todotext = element.value;
                if(e.keyCode == 13 && todotext){
                    ctrl.addTodo(todotext);
                    element.value = '';
                }
            }else if(element.className === 'editInput'){
                
                var input = element.value;
                var position = element.parentNode.id;

                if(e.keyCode == 13 && input){
                    ctrl.changeTodo(position, input);
                    element.value = '';
                }
            }
        });

        inputs.addEventListener('click',  function(e){

            var element = e.target;
            if(element.id === 'deleteButton'){ 
                
                ctrl.deleteTodo(element.parentNode.id);        
            }else if(element.id === 'toggleButton'){
                ctrl.toggle(element.parentNode.id); 
            }
        });


        inputs.addEventListener('dblclick',function(e){

            var element = e.target;
            if(element.className === 'editInput'){ 
                element.readOnly=false;
            }
        });
    
        this.render();
    },

    render: function() {

        var todos = ctrl.getTodos();
        var todosUl = document.querySelector("ul");
        
        todosUl.innerHTML = "";

        for(var i = 0; i < todos.length; i++){

            var todoLi = document.createElement("li");
            var toggleText = todos[i].completed? "☑":"☐";
            var completed = todos[i].completed;
            var container = this.createContainer(i);
            var toggleButton = this.createToggleButton(toggleText, completed);
            var editInput = this.createEditInput(' '+todos[i].todotext, completed);
            var deleteButton = this.createDeleteButton();

            container.appendChild(toggleButton);
            container.appendChild(editInput);
            container.appendChild(deleteButton);
            todoLi.appendChild(container);
            todosUl.appendChild(todoLi);
        }
    }, 

    createDeleteButton: function(){

        var deleteButton = document.createElement("button");
        deleteButton.textContent = '☒'; 
        deleteButton.id = 'deleteButton';
        deleteButton.className = 'btn';
        return deleteButton;
    },

    createToggleButton: function(toggleText, completed){

        var toggleButton = document.createElement("button");
        toggleButton.textContent = toggleText; 
        toggleButton.id = 'toggleButton';
        toggleButton.className = 'btn';
        
        if(completed){
            toggleButton.style.color = 'green';
        }else{
            toggleButton.style.color = 'orange';
        }

        return toggleButton;
    },

    createEditInput: function(todotext,completed){

        var input = document.createElement("input");
        input.placeholder = 'edit'; 
        input.className = 'editInput';
        input.value = todotext;
        input.readOnly = true;

        if(completed){
            input.style.textDecoration = "line-through";
            input.style.color = 'grey';
        }

        return input;
    },

    createContainer: function(id) {
        var div = document.createElement("div"); 
        div.id = id;
        div.className = 'listContainer';
        return div;
    }
};






  