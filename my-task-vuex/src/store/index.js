import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: []
    },
    mutations: {
        add({todos}, todo) {
            todos.push({todo, complete: false});
            console.log(todos);
        },
        remove({todos}, todo) {
            todos.splice(state.todos.indexOf(todo), 1)
        },
        checkTodo({todos}, todo){
            todos[todos.indexOf(todo)].complete = !todo.complete
        },
        checkAllTodo({todos}, complete){
            todos.forEach(todo => (todo.complete = complete))
        },
        clearComplete({todos}) {
            todos.map(
				todo => (todo.completed ? todos.splice(todos.indexOf(todo), 1) : null)
			)
        }
    },
    getters: {
        all: state => state.todos,
        complete: state => state.todos.filter(todo => todo.complete),
        pending: state => state.todos.filter(todo => !todo.complete)
    }
})