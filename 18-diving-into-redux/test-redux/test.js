const redux = require("redux")

const initialState = {counter: 0, showCounter: true}

function counterReducer(state = initialState, action) {
  if (action.type === 'increment') return {...state, counter: state.counter + 1}
  if (action.type === 'decrement') return {...state, counter: state.counter - 1}
  if (action.type === 'increase') return {...state, counter: state.counter + action.amount}
  if (action.type === 'toggle') return {...state, showCounter: !state.showCounter}
}

const store = redux.createStore(counterReducer)

function counterSubscriber() {
  const latestState = store.getState()
  console.log(latestState)
}

store.subscribe(counterSubscriber)
store.dispatch({type: 'increment'})
store.dispatch({type: 'increase', amount: 5})
store.dispatch({type: 'toggle'})
