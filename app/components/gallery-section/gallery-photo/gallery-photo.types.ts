export type galleryDataListType = {
  img: string;
  title: string;
  cols?: number;
  rows?: number;
};

export interface GalleryItem {
  img: string;
  title: string;
  cols?: number;
  rows?: number;
}

export interface GalleryPhotoFirstProps {
  gallery_factory_list: GalleryItem[];
}

export interface GalleryPhotoSecondProps {
  gallery_produce_list: GalleryItem[];
}
