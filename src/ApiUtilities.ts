const BASE_URL = import.meta.env.VITE_API_URL;

export type GalleryResponse = {
  gallery: string;
  images: string[];
};

export const getGallery = async (galleryName: string): Promise<GalleryResponse> => {
  const res = await fetch(`${BASE_URL}/api/galleries/${galleryName}`);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Failed to fetch gallery: ${galleryName}`);
  }

  const contentType = res.headers.get("content-type");

  if (!contentType?.includes("application/json")) {
    const text = await res.text();
    throw new Error(`Expected JSON but got: ${text.slice(0, 100)}`);
  }

  return res.json();
};