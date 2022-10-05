import { createStore } from './core.js'
import reducer from './reducer.js'
import showLog from './logger.js'

const { attach, connect, dispatch } = createStore(showLog(reducer))
window.dispatch = dispatch

export {
    attach,
    connect
}