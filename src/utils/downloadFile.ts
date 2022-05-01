import * as fs from "fs";
import * as https from "https";
import path from "path";

export async function downloadFile(url: string, filename: string) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(
      path.join(__dirname, "..", "..", "downloads", filename)
    );
    https.get(url, response => {
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        resolve(filename);
      });
    });
  });
}
