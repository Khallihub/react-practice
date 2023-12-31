import { useRef, useState } from "react";
import styles from "./CheckOut.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.length === 5;
const CheckOut = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });
    const enteredFormIsValid =
      enteredNameIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid &&
      enteredStreetIsValid;

    if (!enteredFormIsValid) {
      return;
    }

    props.onSubmitOrder({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };
  const nameControlClasses = `${styles.control} ${
    formInputsValidity.name ? "" : styles.invalid
  } `;
  const streetControlClasses = `${styles.control} ${
    formInputsValidity.street ? "" : styles.invalid
  } `;
  const postalCodeControlClasses = `${styles.control} ${
    formInputsValidity.postalCode ? "" : styles.invalid
  } `;
  const cityControlClasses = `${styles.control} ${
    formInputsValidity.city ? "" : styles.invalid
  } `;
  return (
    <form className={styles.form} onClick={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code Name</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles["button--alt"]}
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className={styles.button}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckOut;
