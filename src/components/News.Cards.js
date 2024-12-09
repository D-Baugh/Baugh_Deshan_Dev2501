import React from "react";
import Button from "./buttons/Button";

const NewsCards = (props) => {
  return (
    <article style={styles.Cards}>
      <p>{props.Text}</p>
      <img src={props.imageInsert} style={styles.image} />
      <Button btnText="Read more" />
    </article>
  );
};

export default NewsCards;

const styles = {
  Cards: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold",
    fontSize: "25px",
    marginRight: "3%",
  },
  image: {
    maxWidth: "60%",
    margin: "0 auto",
    cursor: "pointer",
  },
};
