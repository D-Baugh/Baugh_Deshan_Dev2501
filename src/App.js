import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import NewsCards from "./components/News.Cards";
import image1 from "./images/imperial-interceptor.jpg";
import image2 from "./images/royalShip.png";
import image3 from "./images/E-11_blaster_rifle_FF.png";
import newsImage from "./images/DeathStar.png";
import newsImage2 from "./images/thrawn.png";
import newsImage3 from "./images/corusant.png";

// import Avatar from "./components/buttons/Avatar";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div style={styles.bodyContainer}>
          <div style={styles.left}>
            <div>
              <Nav
                liText1="News Feed"
                liText2="Top Stories"
                liText3="Watch Live"
              />
            </div>
          </div>
          <div style={styles.center}>
            <Form />
            <NewsCards
              imageInsert={newsImage}
              Text="Rebel terrorists blow up Imperial Space Station murdering hundreds of thousands of workers, Vader narrowly escapes."
            />
            <NewsCards
              imageInsert={newsImage2}
              Text="General Thrawn promoted to Grand Admiral by Emperor."
            />
            <NewsCards
              imageInsert={newsImage3}
              Text="Top tourist destinations on Coruscant."
            />
          </div>
          <div style={styles.rightSide}>
            <Cards
              Text="Latest in Tie Fighter Technology!"
              imageInsert={image1}
            />
            <Cards Text="Peruse the galaxy in style:" imageInsert={image2} />
            <Cards Text="New E-11 Blaster Rifle" imageInsert={image3} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const styles = {
  bodyContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: "1rem",
  },

  left: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "20%",
    paddingTop: "2rem",
  },
  center: {
    backgroundColor: "rgba(163, 173,194,0.5)",
    border: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    borderRadius: "2px",
    width: "50%",
  },

  rightSide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    width: "30%",
  },
};
