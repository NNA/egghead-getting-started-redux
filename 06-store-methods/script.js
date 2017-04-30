const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// Import Redux Store
const { createStore } = Redux;

// Create the store
const store = createStore(counter);

// getInitialState
console.log(store.getState());

// Dispatch INCREMENT action
store.dispatch({type: 'INCREMENT'});
console.log(store.getState());

store.subscribe(() => {
  document.body.innerText = store.getState();
});

document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});
