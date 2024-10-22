// types.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {LightGallery as ILightGallery} from "lightgallery/lightgallery";

export interface CarImage {
  src: string;
  alt: string;
}

export interface DynamicGalleryItem {
  src: string;
  thumb: string;
  subHtml: string;
  responsive: string;
}
