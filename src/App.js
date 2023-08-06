import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Auctions from "./components/Auctions.js";
import Sellers from "./components/Sellers";
import MarketPlace from "./components/MarketPlace";
import HotCollections from "./components/HotCollections";
import Testimonial from "./components/Testimonial.js";
function App() {
  return (
    <>
      <Header />
      <Auctions />
      <Sellers />
      <MarketPlace />
      <HotCollections />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
