const addTodo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
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
    addTodo(stateBefore, action)
  ).toEqual(stateAfter);
}

testAddTodo();
console.log('all tests pass !');
