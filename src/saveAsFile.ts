import { writeFile, access, appendFile } from "fs/promises";
import { config } from "dotenv";
import { randomUUID } from "crypto";
import { dirname, join } from "path";
import { mkdir } from "fs/promises";
config();

export const saveAsFile = async (resJson: string) => {
  const pathToDb: string = join(process.cwd(), "db");
  try {
    await access(pathToDb).catch(async () => await mkdir(pathToDb));
    await writeFile(join(pathToDb, randomUUID() + ".json"), resJson);
  } catch (e) {
    throw e;
  }
};
