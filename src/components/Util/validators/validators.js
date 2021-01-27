export const requredField = (value) => {
  if (!value) {
    return "error message";
  }
  return undefined;
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) {
    return "error message";
  }
  return undefined;
};
