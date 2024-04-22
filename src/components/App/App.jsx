import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import apiRequest from "../../api";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import css from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function getImage(value) {
    // console.log(value);
    setSrc(value);
  }
  const handleSearch = (query) => {
    // console.log("handleSearch", query);
    setError(false);
    setImages([]);
    setPage(1);
    setQuery(query);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getImages() {
      try {
        setIsLoading(true);
        const data = await apiRequest(query, page);
        setImages((prevData) => [...prevData, ...data]);
        console.log("getImages", query);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery
        images={images}
        onOpenModal={openModal}
        onGetImage={getImage}
      />
      {isLoading && <Loader />}
      {error && (
        <p className={css.errorText}>Oops... It is error. Please try again!</p>
      )}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {isOpen && (
        <ImageModal onCloseModal={closeModal} isOpen={openModal} src={src} />
      )}
    </>
  );
}
