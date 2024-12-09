import React from "react";
import Icon from "./buttons/Icons";
import ImageUrl from "../images/chibi-stormtrooper-sticker.png";
import { FaEmpire, FaSearch, FaHeart, FaBell } from "react-icons/fa";

const Header = (props) => {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <div>
          <FaEmpire style={styles.logo} />
        </div>
        <h1 style={styles.leftSide}>ENN News</h1>
      </div>
      <div style={styles.searchCont}>
        <span style={styles.inputIcon}>
          <FaSearch />
        </span>
        <input
          type="text"
          style={styles.inputWithIcon}
          placeholder="Search Stories"
        />
      </div>
      <div style={styles.rightSide}>
        <button style={styles.rightIcons}>
          <FaHeart />
        </button>
        <button style={styles.rightIcons}>
          <FaBell />
        </button>
        <Icon IconImg={ImageUrl} ImageAlt="Alt tag" />
      </div>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    padding: "1%",
    backgroundColor: "#81171B",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "1px 6px 1px 1px black",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  leftSide: {
    marginRight: "20px",
  },
  logo: {
    borderRadius: "50%",
    height: "50px",
    width: "60px",
    backgroundColor: "black",
    alignItems: "center",
    cursor: "pointer",
    marginRight: "20px",
  },
  searchCont: {
    border: "1px solid #ddd",
    display: "flex",
    flexDirection: "row",
    borderRadius: "2px",
    width: "40%",
  },
  inputIcon: {
    background: "#ddd",
    padding: "10px",
    flexDirection: "row",
    borderRadius: "2px",
    alignItems: "center",
    fontSize: "1rem",
  },
  inputWithIcon: {
    border: "none",
    flex: 1,
    padding: "10px",
  },
  rightSide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: "4%",
  },
  rightIcons: {
    backgroundColor: "#81171B",
    border: "none",
    fontSize: "50px",
    height: "50px",
    width: "60px",
    alignItems: "center",
    cursor: "pointer",
    marginRight: "10px",
  },
};
