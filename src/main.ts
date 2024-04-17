import { generateMatrix } from "./generateMatrix";
import { modifyMatrix } from "./modifyMatrix";
import { saveAsFile } from "./saveAsFile";
import { getMatrixAddresses } from "./getMatrixAddresses";
import express from "express";
import { config } from "dotenv";
import { generateMatrixInput } from "./shapes";

config();
const app = express();
const port = process.env.PORT || 4000;

type ResObj = {
  input: number[][];
  output: number[][];
};

app.get("/", async (req, res) => {
  const reqQueryN = req.query.N;
  const reqQueryM = req.query.M;

  const input = { arrayLength: +reqQueryN!, arraysQuantity: +reqQueryM! };
  try {
    generateMatrixInput.parse(input);
  } catch (e) {
    return res.status(400).json("The input is invalid");
  }
  const initalMatrix: number[][] = generateMatrix(input);

  const matrixAddresses: number[][] = getMatrixAddresses(
    modifyMatrix(initalMatrix)
  );

  const responseObj: ResObj = {
    input: initalMatrix,
    output: matrixAddresses,
  };
  const responseJson: string = JSON.stringify(responseObj, null, 2);
  res.send(responseJson);
  saveAsFile(responseJson);
});

app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
