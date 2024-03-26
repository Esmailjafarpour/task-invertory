"use client";
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'; 
import {
  BASE_URL,
  BASE_URL_Images,
  BASE_URL_DETAILS,
} from "../../../src/constants/base";

const Imagegallery = ({ imagedata }) => {
  let images = [];
  imagedata.map((image) =>
    images.push({ original: `${BASE_URL_Images}${image.media_src}` })
  );
  return (
    <div className="custom-image-gallery">
    <ImageGallery
      items={images}
      className="w-full"
      thumbnailPosition="bottom"
    />
    </div>
  );
};

export default Imagegallery;
