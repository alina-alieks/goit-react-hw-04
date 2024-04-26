import css from "./ImageCard.module.css";

export default function ImageCard({
  image: { urls, description },
  onOpenModal,
  onGetImage,
}) {
  return (
    <div
      className={css.imgCard}
      onClick={() => {
        onOpenModal();
        onGetImage(urls.regular);
      }}
    >
      <img className={css.img} src={urls.small} alt={description} />
    </div>
  );
}
