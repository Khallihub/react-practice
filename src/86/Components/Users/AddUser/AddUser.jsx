import { useRef, useState } from "react";
import Wrapper from "../../Helpers/Wrapper";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";


const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  function addUserHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredUserAge.trim().length === 0 || enteredName.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onAddUser({
      name: enteredName,
      age: enteredUserAge,
      id: Math.random().toString(),
    });
    // do not use this always
    nameInputRef.current.value = ""
    ageInputRef.current.value = ""
    // setEnteredAge("");
    // setEnteredUsername("");
  }
  // function usernameChangeHandler(event) {
  //   setEnteredUsername(event.target.value);
  // }
  // function ageChangeHandler(event) {
  //   setEnteredAge(event.target.value);
  // }
  function errorHandler() {
    setError(null);
  }

  return (
    <Wrapper>
      {" "}
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // value={enteredUsername}
            ref={nameInputRef}
            // onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            //   min="0"
            ref={ageInputRef}
            // value={enteredAge}
            // onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
