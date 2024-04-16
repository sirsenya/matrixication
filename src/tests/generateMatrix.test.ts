// Uncomment the code below and write your tests
import { generateMatrix } from "../generateMatrix";

describe("generate matrix tests", () => {
  const matrix: number[][] = generateMatrix({
    arrayLength: 28,
    arraysQuantity: 22,
  });

  test("should return matrix of given length", async () => {
    expect(matrix.length).toBe(22);
  });

  test("should return matrix of arrays of given length filled only with values from 1 to 4", async () => {
    for (let array of matrix) {
      expect(array.length).toBe(28);
      for (let value of array) {
        expect(value).toBeGreaterThanOrEqual(1);
        expect(value).toBeLessThanOrEqual(4);
      }
    }
  });
});
