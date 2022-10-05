import html from '../core.js'
import { connect } from '../store.js'

const connector = connect()

function TodoItem({ todo, index, editing }) {
    return html`
        <li class="${todo.completed && 'completed'} ${editing === index && ' editing'}">
            <div class="view">
                <input class="toggle" type="checkbox" ${todo.completed && 'checked'}
                    onchange = "dispatch('toggle', ${index})"
                >
                <label ondblclick="dispatch('editing', ${index})">${todo.title}</label>
                <button class="destroy" onclick="dispatch('destroy', ${index})"></button>
            </div>
            <input class="edit" value="${todo.title}"
            onkeyup = "event.keyCode === 13 && dispatch('saveEdit', this.value.trim())
                || event.keyCode === 27 && dispatch('cancelEdit')" 
            onblur = "dispatch('saveEdit', this.value.trim())">
        </li>
    `
}

export default connector(TodoItem)