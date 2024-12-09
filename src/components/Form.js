import React from "react";
import Button from "./buttons/Button";

const Form = (props) => {
  return (
    <form style={styles.Form} onSubmit={props.addName}>
      <p style={styles.para}>Subscribe to the ENN Newsletter!</p>
      <div>
        <input style={styles.input} placeholder="example@empire.com" />
        <Button btnText="Submit" />
      </div>
    </form>
  );
};

export default Form;

const styles = {
  Form: {
    width: "100%",
    height: "20%",
    
    color: "rgb(163, 173,194)",
    borderRadius: "2%",
    textAlign: "center",
  },
  para: {
    color: "black",
    paddingTop: "2%",
    fontWeight:'bold'
  },
  input: {
    padding: "2%",
  },
};
