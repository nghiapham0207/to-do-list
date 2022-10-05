import html from '../core.js'
import { connect } from '../store.js'
import Header from '../component/Header.js'
import Footer from './Footer.js'
import TodoList from '../component/TodoList.js'

const connector = connect()

function App({ todos }) {
    const js = {a:1,b:2}
    const edu = {...js, c:3}
    const t = {d: 0}
    console.log(Object.assign(js, t));
    console.log(js);
    return html`
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && TodoList()}
            ${todos.length > 0 && Footer()}
        </section>
    `
}

export default connector(App)