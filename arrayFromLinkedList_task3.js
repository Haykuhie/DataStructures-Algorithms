const tree = {
  value: 12,
  next: {
    value: 20,
    next: {
      value: 30,
      next: {
        value: -10,
        next: null,
      },
    },
  },
};

function arrayFromList(linkedList) {
  let result = [];
  while (linkedList.value) {
    result.push(linkedList.value);
    linkedList = linkedList.next;
    if (!linkedList) return result;
  }
}
console.log(arrayFromList(tree));