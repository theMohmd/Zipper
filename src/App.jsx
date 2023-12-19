import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ProductPage from "./components/ProductPage";
import { Route, Routes } from "react-router-dom";
const App = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<ProductPage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
