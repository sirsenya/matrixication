import { generateMatrix } from "./src/generate_matrix.js";
import { modifyMatrix } from "./src/modify_matrix.js";

export const ARRAY_LENGTH = 4;
export const ARRAYS_QUANTITY = 5;

modifyMatrix(
  [
    [1, 3, 2, 4],
    [3, 3, 3, 1],
    [1, 3, 2, 4],
    [3, 3, 3, 1],
    [1, 3, 2, 4],
  ]
  //generateMatrix({ arrayLength: ARRAY_LENGTH, arraysQuantity: ARRAYS_QUANTITY })
);
