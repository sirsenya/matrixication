// Uncomment the code below and write your tests
import { getMatrixAddresses } from "../getMatrixAddresses";
import {
  addressesResult1,
  addressesResult2,
  addressesResult3,
  addressesResult4,
  addressesResult5,
  matrix1,
  matrix1Copy,
  matrix2,
  matrix2Copy,
  matrix3,
  matrix3Copy,
  modified1,
  modified1Copy,
  modified2,
  modified2Copy,
  modified3,
  modified3Copy,
  modified4,
  modified4Copy,
  modified5,
  modified5Copy,
} from "./constants";

describe("get matrix addresses test", () => {
  test("should return array with addresses of cells where value is 0", async () => {
    const addresses1 = getMatrixAddresses(modified1);
    const addresses2 = getMatrixAddresses(modified2);
    const addresses3 = getMatrixAddresses(modified3);
    const addresses4 = getMatrixAddresses(modified4);
    const addresses5 = getMatrixAddresses(modified5);

    expect(addresses1).toEqual(addressesResult1);
    expect(addresses2).toEqual(addressesResult2);
    expect(addresses3).toEqual(addressesResult3);
    expect(addresses4).toEqual(addressesResult4);
    expect(addresses5).toEqual(addressesResult5);
  });
  test("initial matrix should not get mutated", async () => {
    expect(modified1).toEqual(modified1Copy);
    expect(modified2).toEqual(modified2Copy);
    expect(modified3).toEqual(modified3Copy);
    expect(modified4).toEqual(modified4Copy);
    expect(modified5).toEqual(modified5Copy);
  });
});
