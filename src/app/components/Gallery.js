import { useEffect, useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch("/api/images");
      const data = await response.json();
      setImages(data.images);
      console.log(data);
    }

    fetchImages();
  }, []);

  return (
    <>
      {images.map((folder, folderIndex) => (
        <div
          className="flex flex-col border-b pb-4 last:border-none"
          key={folderIndex}
        >
          <h2 className="py-2">{folder.name}</h2>
          <div className="flex flex-wrap gap-2">
            {folder.images.map((image, imageIndex) => (
              <img
                className="max-h-40 w-auto"
                key={imageIndex}
                src={image}
                alt={`Image ${imageIndex + 1}`}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
