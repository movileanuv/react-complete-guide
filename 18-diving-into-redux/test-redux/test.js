const redux = require("redux")

function counterReducer(state = {counter: 0}, action) {
    if (action.type === 'increment') return { counter: state.counter + 1 }
    if (action.type === 'decrement') return { counter: state.counter - 1 }
    if (action.type === 'increase') return { counter: state.counter + action.amount }
}

const store = redux.configureStore(counterReducer)

function counterSubscriber() {
    const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(counterSubscriber)
store.dispatch({type: 'increment'})
store.dispatch({type: 'increment', amount: 5})
