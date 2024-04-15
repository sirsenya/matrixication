import {
  AddressElement,
  matrixToAddressElementArr,
} from "./matrix_to_address_element_arr.js";

export const getMatrixAddresses = (modifiedMatrix: number[][]): number[][] => {
  let result: number[][] = [];
  const addressElements: AddressElement[] = matrixToAddressElementArr(
    modifiedMatrix
  ).filter((ae) => ae.value === 0);
  for (let column = 0; column < addressElements.length; column++) {
    const ae: AddressElement = addressElements[column];
    const aeOfThisColumn: number[][] = addressElements
      .filter((e) => e.column === column)
      .sort((a, b) => a.row - b.row)
      .map((e) => [e.column, e.row]);
    result = [...result, ...aeOfThisColumn];
  }

  console.log(result);
  return result;
};
