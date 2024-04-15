const MAX_NUMBER: number = 4;

export const generateMatrix = (params: {
  arrayLength: number;
  arraysQuantity: number;
}): number[][] => {
  const { arrayLength, arraysQuantity } = params;
  function getRandomInt() {
    return Math.floor(Math.random() * MAX_NUMBER + 1);
  }

  const generateArray = (): number[] => {
    const array: number[] = [];
    for (let i = 0; i < arrayLength; i++) {
      array.push(getRandomInt());
    }
    return array;
  };

  const matrix: number[][] = [];
  for (let i = 0; i < arraysQuantity; i++) {
    matrix.push(generateArray());
  }
  console.log("matrix");
  console.log(matrix);
  return matrix;
};
