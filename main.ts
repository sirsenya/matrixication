import { generateMatrix } from "./src/generate_matrix.js";
import { modifyMatrix } from "./src/modify_matrix.js";
import { getMatrixAddresses } from "./src/get_matrix_addresses.js";
import express from "express";

// export let arrayLength: number;
// export let arraysQuantity: number;

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  let arrayLength: number;
  let arraysQuantity: number;
  try {
    arrayLength = Number(req.query.N);
    arraysQuantity = Number(req.query.M);
    if (arrayLength < 0 || arraysQuantity < 0) {
      throw new Error("please pass values greater than 0");
    }
    getMatrixAddresses(
      modifyMatrix(
        // [
        //   [1, 3, 2, 4],
        //   [3, 3, 3, 1],
        //   [1, 3, 2, 4],
        //   [3, 3, 3, 1],
        //   [1, 3, 2, 4],
        // ]
        generateMatrix({ arrayLength, arraysQuantity })
      )
    );
  } catch (e) {
    throw e;
  }

  // const geo = req.query.geo;
  res.send(`${arrayLength} ${arraysQuantity}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
