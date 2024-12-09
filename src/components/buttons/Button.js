import React from "react";

const Button = (props) => {
  return <button style={styles.btn}>{props.btnText}</button>;
};

export default Button;

const styles = {
  btn: {
    backgroundColor: "#81171B",
    color: "white",
    padding: "2%",
    cursor: "pointer",
    maxWidth:'25%',
    margin:'0 auto',
    marginTop:'1rem'
  },
};
