export type AddressElement = {
  value: number;
  column: number;
  row: number;
};

export const transformMatrixToRows = (initialMatrix: number[][]) => {
  let arrayLength = initialMatrix[0].length;
  let arraysQuantity = initialMatrix.length;
  const matrixCopy: number[][] = [...initialMatrix];
  const result: AddressElement[] = [];
  for (let column = 0; column < arraysQuantity; column++) {
    for (let row = 0; row < arrayLength; row++) {
      result.push({ value: matrixCopy[column][row], row, column });
    }
  }
  return result;
};
