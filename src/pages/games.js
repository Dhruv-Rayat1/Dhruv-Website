// Import spicy css base class
import "../App.css";

// Components
import Navbar from "../components/Navbar/Navbar";
import SplashChild from "../components/Splash/SplashChild";
import MainGames from "../components/Main-Games/Main_Games";
import Footer from "../components/Footer/Footer";

// Images
import Logo_light_NoText from "../images/Logo_Light.png";

// React
import { useEffect } from "react";

function Games() {
  useEffect(() => {
    document.title = "Dhruv Rayat | Games";
  });

  return (
    <>
      <Navbar img={Logo_light_NoText} alt="Dhruv-Rayat's Logo" />
      <SplashChild PageName="Games" LinkTo="Home / Games >" />
      <MainGames />
      <Footer />
    </>
  );
}

export default Games;
