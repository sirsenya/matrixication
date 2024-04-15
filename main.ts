import { generateMatrix } from "./src/generate_matrix.js";
import { modifyMatrix } from "./src/modify_matrix.js";
import { putInDb } from "./src/put_in_db.js";
import { getMatrixAddresses } from "./src/get_matrix_addresses.js";
import express from "express";

// export let arrayLength: number;
// export let arraysQuantity: number;

const app = express();
const port = 4000;

type ResObj = {
  input: number[][];
  output: number[][];
};

app.get("/", async (req, res) => {
  let arrayLength: number;
  let arraysQuantity: number;
  try {
    arrayLength = Number(req.query.N);
    arraysQuantity = Number(req.query.M);
    if (arrayLength < 0 || arraysQuantity < 0) {
      throw new Error("please pass values greater than 0");
    }
    const initalMatrix: number[][] = generateMatrix({
      arrayLength,
      arraysQuantity,
    });
    const matrixAddresses: number[][] = getMatrixAddresses(
      modifyMatrix(
        // [
        //   [1, 3, 2, 4],
        //   [3, 3, 3, 1],
        //   [1, 3, 2, 4],
        //   [3, 3, 3, 1],
        //   [1, 3, 2, 4],
        // ]
        initalMatrix
      )
    );
    const responseObj: ResObj = {
      input: initalMatrix,
      output: matrixAddresses,
    };
    const responseJson: string = JSON.stringify(responseObj, null, 1);
    await putInDb(responseJson);
    res.send(responseJson);
  } catch (e) {
    throw e;
  }

  // const geo = req.query.geo;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
