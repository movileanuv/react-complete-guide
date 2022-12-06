const reduxToolkit = require('@reduxjs/toolkit'),
  createSlice = reduxToolkit.createSlice,
  configureStore = reduxToolkit.configureStore

const initialState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {state.counter++},
    decrement(state) {state.counter--},
    increase(state, action) {state.counter += action.payload},
    toggle(state) {state.showCounter = !state.showCounter}
  }
})

const {increment, decrement, increase, toggle} = counterSlice.actions

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

function counterSubscriber() {
  const latestState = store.getState()
  console.log(latestState.counter)
}

store.subscribe(counterSubscriber)
store.dispatch(increment())
store.dispatch(increase(5))
store.dispatch(toggle())
