const double = (number) => {
  if (isNaN(number)) {
    throw new Error("this is not a number");
  }
  return number + 5;
};

try {
  const x = double(3);
  const y = double ("hi this is string")
  console.log(x)
} catch (error) {
  console.log(error);
}
