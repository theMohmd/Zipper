const Footer = () => {
    return (
        <div
            className="
            bg-darkprp
            "
        >
            <div
                className="
                max-w-[1200px] h-full m-auto relative
                grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-[20px]
                text-light
                "
            >
                <div className="border-l border-light p-2 m-2 p-2 flex-col flex">
                    <p className="font-bold text-lg">ZIPPER</p>
                    <p>
                        Style, innovation, and quality converge seamlessly.
                        Lexi's designs, Ollie's quality control, Mia's
                        marketing, and Gabe's logistics redefine modern fashion.
                        Upgrade with Zipper.
                    </p>
                </div>
                <div className="border-l border-light p-2 m-2">
                    <p className="font-bold text-lg">contact info.</p>
                    <p className="mt-2">
                        123 Stylish Street, Trendville, FashState 54321
                    </p>
                    <p className="mt-2">Phone: (555) 123-4567</p>
                    <p className="mt-2">Email: info@zipperfashion.com</p>
                    <div className="flex w-full justify-start items-center gap-2 mt-2">
                        <img src="social1.png" className="h-8 invert" alt="" />
                        <img src="social2.png" className="h-8 invert" alt="" />
                        <img src="social3.png" className="h-8 invert" alt="" />
                        <img src="social4.png" className="h-8 invert" alt="" />
                    </div>
                </div>
                <div className="border-l border-light p-2 m-2">
                    <p className="font-bold text-lg">Subscribe to news</p>
                    <p className="mt-2">
                        Get the latest updates and exclusive offers straight to
                        your inbox.
                    </p>
                    <div className="bg-light flex justify-center mt-2  items-center gap-2 p-2 rounded ">
                        <input type="text" className="w-2/3 text-darkprp bg-light outline-none"/>
                        <button className="bg-darkprp rounded p-1">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
