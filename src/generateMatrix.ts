import z from "zod";
import { generateMatrixInput } from "./shapes";

const MAX_NUMBER: number = 4;

export const generateMatrix = (
  params: z.infer<typeof generateMatrixInput>
): number[][] => {
  let { arrayLength = 0, arraysQuantity = 0 } = params;
  function getRandomInt() {
    const result = Math.floor(Math.random() * MAX_NUMBER) + 1;
    return result;
  }

  const generateArray = (): number[] => {
    const array: number[] = [];
    for (let i = 0; i < arrayLength; i++) {
      array.push(getRandomInt());
    }

    return array;
  };

  const matrix: number[][] = [];
  for (let i = 0; i < arraysQuantity; i++) {
    matrix.push(generateArray());
  }
  return matrix;
};
