import Hero from "../components/home/Hero";
import Products from "../components/home/Products/Products";


const Home = () => {
    return (
        <div className="flex flex-col gap-16">
            <Hero/>
            <Products/>
        </div>
    );
};

export default Home;