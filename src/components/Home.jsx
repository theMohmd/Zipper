import Products from "./Product";
import Slider from "./Slider";
import About from "./About";
import Comments from "./Comments";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Slider />
            <Products />
            <About />
            <Comments />
        </div>
    );
};

export default Home;
