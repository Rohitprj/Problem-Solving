import ImageKit from "@imagekit/nodejs";
import dotenv from "dotenv";

dotenv.config();

const imagekit = new ImageKit({
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

 const uploadFile = async (fileBuffer, fileName) => {
  const uploadResponse = await imagekit.files.upload({
    file: fileBuffer.toString("base64"),
    fileName: fileName,
  });

  return uploadResponse;
};

export default uploadFile;
