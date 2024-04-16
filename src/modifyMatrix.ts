import {
  type AddressElement,
  transformMatrixToRows,
} from "./transformMatrixToRows";

enum Direction {
  Row = "row",
  Column = "column",
}

type CheckSettings = {
  stablePosition: number;
  direction: Direction;
  stableDirection: Direction;
  position: number;
  lineEnd: number;
};

export const modifyMatrix = (initialMatrix: number[][]): number[][] => {
  let arrayLength = initialMatrix[0].length;
  let arraysQuantity = initialMatrix.length;
  const modifiedMatrix: number[][] = [];
  for (let i = 0; i < arraysQuantity; i++) {
    modifiedMatrix.push(Array(arrayLength));
  }

  const addressElements: AddressElement[] =
    transformMatrixToRows(initialMatrix);

  const stringifyAddressElement = (addressElement: AddressElement): string =>
    `${addressElement.value}:${addressElement.row}:${addressElement.column}`;
  const deStringifyAddressElement = (ad: string): AddressElement => {
    const arr: number[] = ad.split(":").map((e) => Number(e));
    return {
      value: arr[0],
      row: arr[1],
      column: arr[2],
    };
  };

  const globalMatches = new Set<string>();

  const checkAddressElement = (addressElement: AddressElement) => {
    const { row, column, value } = addressElement;
    let matches: string[] = [stringifyAddressElement(addressElement)];
    const findMatches = (direction: Direction) => {
      const checkSettings: CheckSettings =
        direction === Direction.Column
          ? {
              direction: Direction.Column,
              stableDirection: Direction.Row,
              position: column,
              stablePosition: row,
              lineEnd: arraysQuantity,
            }
          : {
              direction: Direction.Row,
              stableDirection: Direction.Column,
              position: row,
              stablePosition: column,
              lineEnd: arrayLength,
            };

      for (let i = checkSettings.position; i < checkSettings.lineEnd; i++) {
        const newMatch = addressElements.find(
          (e: AddressElement) =>
            e.value === value &&
            e[checkSettings.stableDirection] === checkSettings.stablePosition &&
            e[direction] === i + 1
        );
        if (!newMatch) {
          if (matches.length > 2) {
            for (let match of matches) {
              globalMatches.add(match);
            }
          }
          matches = [stringifyAddressElement(addressElement)];
          break;
        }
        matches.push(stringifyAddressElement(newMatch));
      }
    };
    findMatches(Direction.Row);
    findMatches(Direction.Column);
  };

  for (let i = 0; i < addressElements.length; i++) {
    const addressElement = addressElements[i];
    if (addressElement.value != 0) {
      checkAddressElement(addressElement);
    }
  }

  for (let globalMatch of globalMatches) {
    const addressElement: AddressElement =
      deStringifyAddressElement(globalMatch);
    const index: number = addressElements.findIndex(
      (e) => e.column === addressElement.column && e.row === addressElement.row
    );
    if (index === -1) {
      throw new Error(
        `unknown ae address is somehow inside of globalMatches. Column: ${addressElement.column}, row: ${addressElement.row}`
      );
    }
    addressElements[index].value = 0;
  }

  const reconstructMatrix = () => {
    for (let i = 0; i < addressElements.length; i++) {
      const addressElement = addressElements[i];
      modifiedMatrix[addressElement.column][addressElement.row] =
        addressElement.value;
    }
  };
  reconstructMatrix();
  return modifiedMatrix;
};
