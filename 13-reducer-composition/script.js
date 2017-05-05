const todo = (state, action) => {
    switch (action.type){
      case 'ADD_TODO':
        return {
          id: action.id,
          text: action.text,
          completed: false
        };
      case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state;
        }
        return {
          //Splat ...todo not working here
          id: state.id,
          text: state.text,
          completed: !state.completed
        };
    }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    id: 0,
    type: 'ADD_TODO',
    text: 'Learn Redux'
  };
  const stateAfter = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  }];

  deepfreeze(stateBefore, action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
}

const testToggleTodo = () => {
  const stateBefore = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  },{
    id: 1,
    text: 'Go Shopping',
    completed: false
  }];

  const action = {
    id: 1,
    type: 'TOGGLE_TODO'
  };

  const stateAfter = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  },{
    id: 1,
    text: 'Go Shopping',
    completed: true
  }];

  deepfreeze(stateBefore, action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
}

testAddTodo();
testToggleTodo();

console.log('all tests pass !');
