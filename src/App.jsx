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
                <Route path="/Zipper" element={<Home />} />
                <Route path="/Zipper/about" element={<About />} />
                <Route path="/Zipper/contact" element={<Contact />} />
                <Route path="/Zipper/products" element={<ProductPage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
