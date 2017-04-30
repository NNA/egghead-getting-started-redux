const addCounter = (list) => {
  // return list.concat(0);
  return [...list, 0];
};

const removeCounter = (list, index) => {
  // return list.slice(0, index).concat(list.slice(index+1));
  return [...list.slice(0, index),
          ...list.slice(index+1)];
}

const incrementCounter = (list, index) => {
  // Mutating

  // list[index] = list[index] + 1;
  // return list;

  // list[index]++;
  // return list;

  // No Mutating

  // return list
  //         .slice(0, index)
  //         .concat(
  //           list[index]+1
  //         )
  //         .concat(
  //           list.slice(index+1)
  //         );

  return [
    ...list.slice(0, index),
    list[index]+1,
    ...list.slice(index+1)
  ]
}

const testAddCounter = () => {
  const listBefore = [];
  const listAfter  = [0];

  deepfreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter)

};

const testRemoveCounter = () => {
  const listBefore = [1, 2, 3];
  const listAfter = [1, 3];

  deepfreeze(listBefore);

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
}

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  deepfreeze(listBefore);

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
}

testAddCounter();
testRemoveCounter();
testIncrementCounter();

console.log("All Test passed");
