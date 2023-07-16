import { Fragment } from "react";
import mealsImage from "../../../assets/mealsImg.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="picnic in the garden" />
      </div>
    </Fragment>
  );
};

export default Header;
