const ProductCard = ({ name, price, image }) => {
    return (
        <div
            className="
            grid grid-rows-[3fr_1fr_1fr] items-center justify-center
            h-auto w-full
            "
        >
            <div className="z-10 w-full row-start-1 row-span-2 col-start-1">
                <img src={image} alt="" className="w-full" />
            </div>
            <div
                className="
                row-start-2 row-end-4 col-start-1
                flex justify-between h-full w-full items-end 
                px-5 py-3 text-xl  
                bg-darkprp rounded-[20px] text-light
                "
            >
                <div>{name}</div>
                <div className="text-lgrn">{price}</div>
            </div>
        </div>
    );
};
export default ProductCard;
