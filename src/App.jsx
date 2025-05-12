import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InfoCard from "./components/InfoCard/InfoCard";
import ProductCard from "./components/ProductCard/ProductCard";
import Products from "./components/Products/Products";
import Resources from "./components/Resources/Resources";
import Sliders from "./components/Sliders/Sliders";

const App = () => {
  return (
    <div>
    <div className="container">
      <Header />
      <Sliders />
      <Products />
      <ProductCard />
      <Resources />
      <InfoCard />
      </div>
      <Footer />
    </div>
  );
};

export default App;
