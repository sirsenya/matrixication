import {
  AddressElement,
  matrixToAddressElementArr,
} from "./matrix_to_address_element_arr.js";

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
  console.log(initialMatrix);
  const modifiedMatrix: number[][] = [...initialMatrix];

  const addressElements: AddressElement[] =
    matrixToAddressElementArr(initialMatrix);

  const stringifyAddressElement = (ad: AddressElement): string =>
    `${ad.value}:${ad.row}:${ad.column}`;
  const deStringifyAddressElement = (ad: string): AddressElement => {
    const arr: number[] = ad.split(":").map((e) => Number(e));
    return {
      value: arr[0],
      row: arr[1],
      column: arr[2],
    };
  };

  const globalMatches = new Set<string>();

  const checkAddressElement = (ae: AddressElement) => {
    const { row, column, value } = ae;
    let matches: string[] = [stringifyAddressElement(ae)];
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
          matches = [stringifyAddressElement(ae)];
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
    //TODO: skip lowest four squares from the right
    if (addressElement.value != 0) {
      checkAddressElement(addressElement);
    }
  }

  for (let gb of globalMatches) {
    const adFromGb: AddressElement = deStringifyAddressElement(gb);
    const index: number = addressElements.findIndex(
      (e) => e.column === adFromGb.column && e.row === adFromGb.row
    );
    if (index === -1) {
      throw new Error(
        `unknown ae address is somehow inside of globalMatches. Column: ${adFromGb.column}, row: ${adFromGb.row}`
      );
    }
    addressElements[index].value = 0;
  }

  const reconstructMatrix = () => {
    for (let i = 0; i < addressElements.length; i++) {
      const ae = addressElements[i];
      modifiedMatrix[ae.column][ae.row] = ae.value;
    }
  };
  reconstructMatrix();
  console.log(modifiedMatrix);
  return modifiedMatrix;
};
