import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onOpenModal, onGetImage }) {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            image={image}
            onOpenModal={onOpenModal}
            onGetImage={onGetImage}
          />
        </li>
      ))}
    </ul>
  );
}
