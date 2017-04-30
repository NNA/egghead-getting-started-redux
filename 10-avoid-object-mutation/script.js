const toogleTodo = (object) => {
  // Mutating
  // newObject = object;
  // newObject['ready'] = !object['ready'];
  // return newObject;

  // No Mutating

  // return {
  //   id: object.id,
  //   name: object.name,
  //   ready: !object.ready
  // }

  // Works
  // return Object.assign({}, object, {
  //   ready: !object.ready
  // })

  //Not working because need ... needs Babel
  return {
    ...object,
    ready: !object.ready
  }

}

const testToogleTodo = () => {
  const beforeObject = {
    id: 1,
    name: 'My name',
    ready: false
  }

  const afterObject = {
    id: 1,
    name: 'My name',
    ready: true
  }

  deepfreeze(beforeObject);

  expect(
    toogleTodo(beforeObject)
  ).toEqual(afterObject);
}

testToogleTodo();
console.log('all tests pass !');
