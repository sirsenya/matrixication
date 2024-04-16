// Uncomment the code below and write your tests
import { modifyMatrix } from "../modifyMatrix";
import {
  matrix1,
  matrix1Copy,
  matrix2,
  matrix2Copy,
  matrix3,
  matrix3Copy,
  modified1,
  modified2,
  modified3,
} from "./constants";

describe("modify matrix tests", () => {
  test("should replace lines and rows where the same value repeats more than 3 times with 0", async () => {
    const modifiedMatrix1 = modifyMatrix(matrix1);
    const modifiedMatrix2 = modifyMatrix(matrix2);
    const modifiedMatrix3 = modifyMatrix(matrix3);

    expect(modifiedMatrix1).toEqual(modified1);
    expect(modifiedMatrix2).toEqual(modified2);
    expect(modifiedMatrix3).toEqual(modified3);
  });
  test("initial matrix should not get mutated", async () => {
    expect(matrix1).toEqual(matrix1Copy);
    expect(matrix2).toEqual(matrix2Copy);
    expect(matrix3).toEqual(matrix3Copy);
  });
});
