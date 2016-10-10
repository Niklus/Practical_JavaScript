'use strict';

/* ======= Controller ======= */

var ctrl = {

    init: function(){
        model.init();
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

    clearDone: function() {
        model.clearDone();
        view.render();
    },

    getTodos: function() {
        return model.getTodos();
    },
};

//Initialize
ctrl.init();
