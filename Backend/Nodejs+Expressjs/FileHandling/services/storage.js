import ImageKit from "@imagekit/nodejs";
import dotenv from "dotenv";
dotenv.config();

console.log("ENV", process.env.IMAGEKIT_PRIVATE_KEY);
const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(file) {
    console.log("FILE",file)
    const result = await imagekit.files.upload({
        file:file.toString("base64"),
        fileName: "image.jpg",
    })
    return result;
}

export { uploadFile };