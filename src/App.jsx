import "./App.css";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import flairBanner from "./assets/Flair (2).png";
import Radio from "./components/Radio";
import Head from "./components/Head";
import Banner from "./components/Banner";
import Checkout from "./checkout";
import Cart from "./mycart";

export default function App() {
  return (
    <>
      <div className="flair-banner">
        <img src={flairBanner} alt="Flair banner" />
        <div className="flair-overlay">
          <Cart />
          <Checkout />
        </div>
      </div>
    </>
  );
}
