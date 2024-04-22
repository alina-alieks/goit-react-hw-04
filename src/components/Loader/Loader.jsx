import css from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <ThreeDots
      visible={true}
      height="40"
      width="40"
      color="rgb(44, 44, 199)"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ display: "flex", justifyContent: "center" }}
      // wrapperClass={css.wrapper}
    />
  );
}
