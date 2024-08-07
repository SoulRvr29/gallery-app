import fs from "fs";
import path from "path";

export async function GET(request) {
  // Define the directory to scan for images
  const directoryPath = path.join(process.cwd(), "public/galerie");

  // Read the directory and filter out only image files
  try {
    const folders = await fs.promises.readdir(directoryPath);
    const data = folders.map((folder) => {
      const files = fs.readdirSync(path.join(directoryPath, folder));
      const imageFiles = files.filter((file) =>
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
      );
      const imageUrls = imageFiles.map((file) => `/galerie/${folder}/${file}`);
      return { name: folder, images: imageUrls };
    });
    // const files = await fs.promises.readdir(directoryPath);
    // const imageFiles = files.filter((file) =>
    //   /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    // );
    // const imageUrls = imageFiles.map((file) => `/galerie/${file}`);

    // Return the list of image URLs
    // return new Response(JSON.stringify({ images: imageUrls }), {
    //   headers: { "Content-Type": "application/json" },
    // });
    return new Response(JSON.stringify({ images: data }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to read directory" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
