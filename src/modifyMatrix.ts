import { type AddressElement } from "./transformMatrixToRows";

enum Direction {
  Row = "row",
  Column = "column",
}

export const modifyMatrix = (initialMatrix: number[][]): number[][] => {
  let arrayLength = initialMatrix[0].length;
  let arraysQuantity = initialMatrix.length;
  const modifiedMatrix: number[][] = JSON.parse(JSON.stringify(initialMatrix));

  const rowCheckedSet = new Set<string>();
  const columnCheckedSet = new Set<string>();

  const checkAddressElement = (addressElement: AddressElement) => {
    const { row, column, value } = addressElement;
    let matches: string[] = [];
    const find = (direction: Direction) => {
      matches = [JSON.stringify([row, column])];
      const lineLength =
        direction === Direction.Row ? arraysQuantity : arrayLength;

      for (
        let i = direction === Direction.Row ? row + 1 : column + 1;
        i < lineLength;
        i++
      ) {
        const checkedSet =
          direction === Direction.Row ? rowCheckedSet : columnCheckedSet;
        const [currentRow, currentColumn] =
          direction === Direction.Row ? [i, column] : [row, i];
        const stringified = JSON.stringify([currentRow, currentColumn]);
        const alreadyChecked: boolean = checkedSet.has(stringified);
        const last2CellsAndNoMathces: boolean =
          matches.length === 1 && i > lineLength - 2;
        if (alreadyChecked || last2CellsAndNoMathces) {
          break;
        }
        const newMatch = initialMatrix[currentRow][currentColumn];
        if (newMatch === value) {
          matches.push(JSON.stringify([currentRow, currentColumn]));
          checkedSet.add(stringified);
          if (matches.length === 3) {
            //get addres of the secondMatch
            const [r2, c2] = JSON.parse(matches[1]);
            modifiedMatrix[row][column] = 0;
            modifiedMatrix[r2][c2] = 0;
          }
          if (matches.length > 2) {
            modifiedMatrix[currentRow][currentColumn] = 0;
          }
        } else {
          break;
        }
      }
    };
    find(Direction.Row);
    find(Direction.Column);
  };

  const matrixIsTooSmall: boolean = arrayLength > 2 || arraysQuantity > 2;
  const last2RowCells = (row: number): boolean => row > arraysQuantity - 2;
  const last2ColumnCells = (column: number): boolean =>
    column > arrayLength - 2;

  if (matrixIsTooSmall) {
    for (let row = 0; row < arraysQuantity; row++) {
      for (let column = 0; column < arrayLength; column++) {
        const element: number = initialMatrix[row][column];
        if (!(last2RowCells(row) && last2ColumnCells(column))) {
          checkAddressElement({ column, row, value: element });
        }
      }
    }
  }
  return modifiedMatrix;
};
