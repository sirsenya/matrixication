import {
  AddressElement,
  matrixToAddressElementArr,
} from "./matrix_to_address_element_arr.js";

enum Direction {
  Row = "row",
  Column = "column",
}

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
      const stableDirection: Direction =
        direction === Direction.Column ? Direction.Row : Direction.Column;
      const position: number = direction === Direction.Column ? column : row;
      const stablePosition: number =
        direction === Direction.Column ? row : column;
      const lineEnd: number =
        direction === Direction.Column ? arraysQuantity : arrayLength;
      for (let i = position; i < lineEnd; i++) {
        const newMatch = addressElements.find(
          (e: AddressElement) =>
            e.value === value &&
            e[direction] === i + 1 &&
            e[stableDirection] === stablePosition
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
