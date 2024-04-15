import { writeFile, access, appendFile } from "fs/promises";
import { config } from "dotenv";
import { randomUUID } from "crypto";
import { dirname, join } from "path";
import { mkdir } from "fs/promises";
import { fileURLToPath } from "url";
config();

export const saveAsFile = async (resJson: string) => {
  //const __dirname = dirname(fileURLToPath(import.meta.url));
  const pathToDb: string = join(process.cwd(), "db");
  console.log(pathToDb);
  try {
    await access(pathToDb).catch(async () => await mkdir(pathToDb));
    await writeFile(join(pathToDb, randomUUID() + ".json"), resJson);
  } catch (e) {
    throw e;
  }
};
