const API_BASE = "http://127.0.0.1:8000";

export type GalleryResponse = {
  gallery: string;
  images: string[];
};

export const getGallery = async (
  galleryName: string
): Promise<GalleryResponse> => {
  const res = await fetch(`${API_BASE}/api/galleries/${galleryName}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch gallery: ${galleryName}`);
  }

  return res.json();
};