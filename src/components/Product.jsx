import ProductCard from "./ProductCard";
const Products = () => {
    return (
        <div
            className="
            w-full 
            bg-light 
            "
        >
            <div
                className="
                grid lg:grid-cols-4  gap-[30px] sm:grid-cols-2 grid-cols-1
                items-center justify-center
                p-10
                "
            >
                <ProductCard
                    name={"Jeans"}
                    price={"80$"}
                    image={"prdct4.png"}
                />
                <ProductCard
                    name={"Hoodie"}
                    price={"100$"}
                    image={"prdct1.png"}
                />
                <ProductCard
                    name={"Sweatshirt"}
                    price={"80$"}
                    image={"prdct2.png"}
                />
                <ProductCard
                    name={"Jacket"}
                    price={"140$"}
                    image={"prdct3.png"}
                />
            </div>
            <div className="w-full p-5 flex items-center justify-center">
                <button className="col-end-3 text-center text-lg  text-grn">
                    Shop {">"}
                </button>
            </div>
        </div>
    );
};

export default Products;
