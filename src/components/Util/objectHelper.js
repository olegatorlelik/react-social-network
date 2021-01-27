export const updateObjectInArray = (items, itemId, objProName, newObjProps) => {
  return items.map((elem, index) => {
    if (elem[objProName] === itemId) {
      return { ...elem, ...newObjProps };
    }
    return elem;
  });
};
