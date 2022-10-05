import storage from "./util/storage.js"

const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    editing: null
}
const actions = {
    add({ todos }, title) {
        if (title) {
            todos.push({ title, completed: false })
            storage.set(todos)
        }
    },
    toggle({ todos }, index) {
        const todo = todos[index]
        todo.completed = !todo.completed
        storage.set(todos)
    },
    toggleAll({ todos }, completed) {
        todos.forEach(todo => todo.completed = completed)
        storage.set(todos)
    },
    destroy({ todos }, index) {
        todos.splice(index, 1)
        storage.set(todos)
    },
    switchFilter(state, filter) {
        state.filter = filter;
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    editing(state, index) {
        state.editing = index
    },
    saveEdit(state, title) {
        if (state.editing !== null) {
            if (title) {
                state.todos[state.editing].title = title
                storage.set(state.todos)
            } else {
                this.destroy(state, state.editing)
            }
            state.editing = null
        }
    },
    cancelEdit(state) {
        state.editing = null;
    }
}
export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}