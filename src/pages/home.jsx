// Spicy base css
import "../App.css";

// Components
import Splash from "../components/Splash/Splash";
import MainHome from "../components/Main-Home/Main_Home";
import Footer from "../components/Footer/Footer";

// Images
import Me from "../images/Me.jpg";

// React
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Dhruv Rayat | Home";
  });

  return (
    <>
      <Splash img={Me} alt="MEs" />
      <MainHome />
      <Footer />
    </>
  );
}

export default Home;