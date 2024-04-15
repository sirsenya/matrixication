import { ARRAYS_QUANTITY, ARRAY_LENGTH } from "../main.js";

export type AddressElement = {
  value: number;
  column: number;
  row: number;
};

export const matrixToAddressElementArr = (matrix: number[][]) => {
  const result: AddressElement[] = [];
  for (let column = 0; column < ARRAYS_QUANTITY; column++) {
    for (let row = 0; row < ARRAY_LENGTH; row++) {
      result.push({ value: matrix[column][row], row, column });
    }
  }
  return result;
};
