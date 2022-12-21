const getBackgroundColor = (average) => {
  if (average === 0) {
    return "grey";
  }
  if (average < 5) {
    return "red";
  }
  if (average >= 5 && average < 7) {
    return "yellow";
  }
  return "green";
};

export default getBackgroundColor;
