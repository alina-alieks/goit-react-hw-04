import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function ImageModal({ isOpen, onCloseModal, src }) {
  return (
    <div className={css.wrapper}>
      <Modal
        isOpen={isOpen}
        onClose={onCloseModal}
        closeTimeoutMS={500}
        onRequestClose={onCloseModal}
        overlayClassName={css.overlayClassName}
        className={css.modal}
        ariaHideApp={false}
      >
        <button className={css.buttonClose} onClick={onCloseModal}>
          <IoCloseCircleOutline className={css.iconClose} />
        </button>
        <img className={css.img} src={src} alt="Large image" />
      </Modal>
    </div>
  );
}
