// Uncomment the code below and write your tests
import { getMatrixAddresses } from "../getMatrixAddresses";
import {
  addressesResult1,
  addressesResult2,
  addressesResult3,
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

describe("ge tmatrix addresses test", () => {
  test("should return array with addresses of cells where value is 0", async () => {
    const addresses1 = getMatrixAddresses(modified1);
    const addresses2 = getMatrixAddresses(modified2);
    const addresses3 = getMatrixAddresses(modified3);

    expect(addresses1).toEqual(addressesResult1);
    expect(addresses2).toEqual(addressesResult2);
    expect(addresses3).toEqual(addressesResult3);
  });
  test("initial matrix should not get mutated", async () => {
    expect(matrix1).toEqual(matrix1Copy);
    expect(matrix2).toEqual(matrix2Copy);
    expect(matrix3).toEqual(matrix3Copy);
  });
});
