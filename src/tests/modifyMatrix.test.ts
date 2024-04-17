// Uncomment the code below and write your tests
import { modifyMatrix } from "../modifyMatrix";
import {
  matrix1,
  matrix1Copy,
  matrix2,
  matrix2Copy,
  matrix3,
  matrix3Copy,
  matrix4,
  matrix4Copy,
  matrix5,
  matrix5Copy,
  modified1,
  modified2,
  modified3,
  modified4,
  modified5,
} from "./constants";

describe("modify matrix tests", () => {
  test("should replace lines and rows where the same value repeats more than 3 times with 0", async () => {
    const modifiedMatrix1 = modifyMatrix(matrix1);
    const modifiedMatrix2 = modifyMatrix(matrix2);
    const modifiedMatrix3 = modifyMatrix(matrix3);
    const modifiedMatrix4 = modifyMatrix(matrix4);
    const modifiedMatrix5 = modifyMatrix(matrix5);

    expect(modifiedMatrix1).toEqual(modified1);
    expect(modifiedMatrix2).toEqual(modified2);
    expect(modifiedMatrix3).toEqual(modified3);
    expect(modifiedMatrix4).toEqual(modified4);
    expect(modifiedMatrix5).toEqual(modified5);
  });
  test("initial matrix should not get mutated", async () => {
    expect(matrix1).toEqual(matrix1Copy);
    expect(matrix2).toEqual(matrix2Copy);
    expect(matrix3).toEqual(matrix3Copy);
    expect(matrix4).toEqual(matrix4Copy);
    expect(matrix5).toEqual(matrix5Copy);
  });
});
