import { generateMatrix } from "./generateMatrix.js";
import { modifyMatrix } from "./modifyMatrix.js";
import { saveAsFile } from "./saveAsFile.js";
import { getMatrixAddresses } from "./getMatrixAddresses.js";
import express from "express";
import { config } from "dotenv";

config();
const app = express();
const port = process.env.PORT || 4000;

type ResObj = {
  input: number[][];
  output: number[][];
};

app.get("/", async (req, res) => {
  let arrayLength: number;
  let arraysQuantity: number;
  try {
    const reqQueryN = req.query.N;
    const reqQueryM = req.query.M;

    if (
      typeof reqQueryM == "undefined" ||
      typeof reqQueryN == "undefined" ||
      isNaN(+reqQueryM!) ||
      isNaN(+reqQueryN!)
    )
      throw Error();

    arrayLength = +reqQueryN!;
    arraysQuantity = +reqQueryM!;

    if (arrayLength < 0 || arraysQuantity < 0) {
      throw new Error();
    }
    const initalMatrix: number[][] = generateMatrix({
      arrayLength,
      arraysQuantity,
    });
    const matrixAddresses: number[][] = getMatrixAddresses(
      modifyMatrix(initalMatrix)
    );
    const responseObj: ResObj = {
      input: initalMatrix,
      output: matrixAddresses,
    };
    const responseJson: string = JSON.stringify(responseObj, null, 2);
    await saveAsFile(responseJson);
    res.send(responseJson);
  } catch (e) {
    return res.status(400).json("The input is invalid");
  }
});

app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
