import React from "react";
import Button from "./buttons/Button";

const Cards = (props) => {
  return (
    <article style={styles.Cards}>
      <p>{props.Text}</p>
      <img src={props.imageInsert} style={styles.image} />
      <Button btnText="Purchase here!" />
    </article>
  );
};

export default Cards;

const styles = {
  Cards: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold",
    fontSize:'15px',
    marginRight: "3%",
  },
  image: {
    maxWidth: "60%",
    margin: "0 auto",
  },


};
