import styles from "./AddJoke.module.css";
import React, { useRef } from "react";

const AddJoke = (props) => {
  const typeRef = useRef("");
  const setUpRef = useRef("");
  const punchLineRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    const joke = {
      type: typeRef.current.value,
      setup: setUpRef.current.value,
      punchline: punchLineRef.current.value,
    };

    props.onAddJoke(joke);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="type">Type</label>
        <input type="text" id="type" ref={typeRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="setup">Setup</label>
        <textarea rows={5} type="text" id="setup" ref={setUpRef}></textarea>
      </div>
      <div className={styles.control}>
        <label htmlFor="punchline">Punchline</label>
        <textarea
          rows={5}
          type="text"
          id="punchline"
          ref={punchLineRef}
        ></textarea>
      </div>
      <div className={styles["form-actions"]}>
        <button>Add Joke</button>
      </div>
    </form>
  );
};

export default AddJoke;
