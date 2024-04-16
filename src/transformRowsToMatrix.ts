import { AddressElement } from "./transformMatrixToRows";

export const transformRowsToMatrix = (addressElements: AddressElement[]) => {
  let result: number[][] = [];
  for (let column = 0; column < addressElements.length; column++) {
    const currentAddressElement: number[][] = addressElements
      .filter((e) => e.column === column)
      .sort((a, b) => a.row - b.row)
      .map((e) => [e.column, e.row]);
    result = [...result, ...currentAddressElement];
  }
  return result;
};
