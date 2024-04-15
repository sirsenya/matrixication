import {
  AddressElement,
  transformMatrixToRows,
} from "./transformMatrixToRows.js";
import { transformRowsToMatrix } from "./transformRowsToMatrix.js";

export const getMatrixAddresses = (modifiedMatrix: number[][]): number[][] => {
  const matrixCopy: number[][] = [...modifiedMatrix];
  const addressElements: AddressElement[] = transformMatrixToRows(
    matrixCopy
  ).filter((addressElement) => addressElement.value === 0);
  return transformRowsToMatrix(addressElements);
};
