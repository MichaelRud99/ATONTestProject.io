import imageCompression from "browser-image-compression";

async function handleImageUpload(imageFile) {
   const options = {
      maxSizeMB: 0.068,
      maxWidthOrHeight: 500,
      useWebWorker: true,
   };
   try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log(`compressedFile size ${compressedFile.size / 1024} KB`);
      return compressedFile;
   } catch (error) {
      console.log(error);
   }
}
export default handleImageUpload;
