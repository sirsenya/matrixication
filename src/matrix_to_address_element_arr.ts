export type AddressElement = {
  value: number;
  column: number;
  row: number;
};

export const matrixToAddressElementArr = (matrix: number[][]) => {
  let arrayLength = matrix[0].length;
  let arraysQuantity = matrix.length;
  const result: AddressElement[] = [];
  for (let column = 0; column < arraysQuantity; column++) {
    for (let row = 0; row < arrayLength; row++) {
      result.push({ value: matrix[column][row], row, column });
    }
  }
  return result;
};
