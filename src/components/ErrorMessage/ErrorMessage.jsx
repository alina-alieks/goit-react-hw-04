import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <>
      <p className={css.errorText}>Oops... It is error. Please try again!</p>
    </>
  );
}
