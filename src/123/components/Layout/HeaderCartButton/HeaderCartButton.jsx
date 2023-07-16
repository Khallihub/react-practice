import { useContext } from "react";
import CartIcon from "../../Cart/CartIcon.jsx";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../../store/cart-context.js";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0);
  return (
    <button onClick={props.onClick} className={styles.button}>
      <span className={styles.icon}></span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
