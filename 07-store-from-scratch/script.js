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
// const { createStore } = Redux;

// Create the store
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state,  action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch({});

  return {getState, dispatch, subscribe};
};

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
