import { AddressElement, transformMatrixToRows } from "./transformMatrixToRows";
import { transformRowsToMatrix } from "./transformRowsToMatrix";

export const getMatrixAddresses = (modifiedMatrix: number[][]): number[][] => {
  const matrixCopy: number[][] = [...modifiedMatrix];
  const addressElements: AddressElement[] = transformMatrixToRows(
    matrixCopy
  ).filter((addressElement) => addressElement.value === 0);
  return transformRowsToMatrix(addressElements);
};
