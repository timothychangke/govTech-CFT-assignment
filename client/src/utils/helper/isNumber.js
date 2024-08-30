const isNumber = (value) => {
  return /^-?\d*\.?\d+$/.test(value);
};

export default isNumber
