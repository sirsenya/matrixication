import {
  AddressElement,
  transformMatrixToRows,
} from "./transformMatrixToRows.js";

export const getMatrixAddresses = (modifiedMatrix: number[][]): number[][] => {
  let result: number[][] = [];
  const addressElements: AddressElement[] = transformMatrixToRows(
    modifiedMatrix
  ).filter((addressElement) => addressElement.value === 0);
  for (let column = 0; column < addressElements.length; column++) {
    const currentAddressElement: number[][] = addressElements
      .filter((e) => e.column === column)
      .sort((a, b) => a.row - b.row)
      .map((e) => [e.column, e.row]);
    result = [...result, ...currentAddressElement];
  }
  console.log(result);
  return result;
};
