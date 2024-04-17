import z from "zod";

export const generateMatrixInput = z.object({
  arrayLength: z.number().gte(0),
  arraysQuantity: z.number().gte(0),
});
