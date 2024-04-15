import { generateMatrix } from "./src/generate_matrix.js";
import { modifyMatrix } from "./src/modify_matrix.js";
import { getMatrixAddresses } from "./src/get_matrix_addresses.js";
import express from "express";

export const ARRAY_LENGTH = 4;
export const ARRAYS_QUANTITY = 5;

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// getMatrixAddresses(
//   modifyMatrix(
//     [
//       [1, 3, 2, 4],
//       [3, 3, 3, 1],
//       [1, 3, 2, 4],
//       [3, 3, 3, 1],
//       [1, 3, 2, 4],
//     ]
//     //generateMatrix({ arrayLength: ARRAY_LENGTH, arraysQuantity: ARRAYS_QUANTITY })
//   )
// );
