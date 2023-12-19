const StaffCard = ({ img, name, position }) => {
    return (
        <div className="py-10 flex flex-col justify-around ">
            <div className="flex items-center aspect-square justify-center">
                <img
                    src={img}
                    alt=""
                    className="mb-8 rounded-full aspect-square w-40  "
                />
            </div>
            <p className="text-xl text-center font-semibold ">{name}</p>
            <p className=" text-center font-medium opacity-80">{position}</p>
        </div>
    );
};
const About = () => {
    return (
        <div className="bg-darkprp text-light">
            <div
                className="
                max-w-[1200px] h-full m-auto
                flex flex-col
                "
            >
                <div className="grid md:grid-cols-2 p-10  gap-[20px] px-[100px] ">
                    <div className=" flex items-center justify-end h-full w-full">
                        <img src="image2.png" alt="" className="w-full " />
                    </div>
                    <div className="flex items-center font-bold text-center md:text-left">
                        Zipper, the epitome of style and functionality,
                        redefines modern fashion effortlessly. Crafted with
                        meticulous attention to detail, each garment seamlessly
                        blends trendsetting designs with practical versatility.
                        Elevate your wardrobe with Zipper – where fashion meets
                        purpose in every stitch.
                    </div>
                </div>

                <div
                    className="
                    grid md:grid-cols-3 gap-[20px]
                    border-light border-t  
                    py-10 
                    "
                    style={{
                        textShadow: "0px 10px 30px var(--liprp, #6B009D)",
                    }}
                >
                    <div className="flex flex-col items-center justify-center ">
                        <p className="font-bold text-4xl ">+1,000,000</p>
                        <p className="font-bold text-xl">happy customers</p>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <p className="font-bold text-4xl">+5,000,000</p>
                        <p className="font-bold text-xl">purchases</p>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <p className="font-bold text-4xl">+100,000</p>
                        <p className="font-bold text-xl">products</p>
                    </div>
                </div>

                <div
                    className="
                    grid md:grid-cols-4 md:grid-rows-1 gap-[20px] grid-cols-2 grid-rows-2
                    border-light border-t  
        p-10  
                    "
                >
                    <StaffCard
                        img="staff1.png"
                        name="Alexandra Turner"
                        position="Creative Director"
                    />
                    <StaffCard
                        img="staff2.png"
                        name="Mia Chen"
                        position="Marketing Strategist"
                    />
                    <StaffCard
                        img="staff3.png"
                        name="Gabriel Martinez"
                        position="Supply Chain Manager"
                    />
                    <StaffCard
                        img="staff4.png"
                        name="Oliver Rodriguez"
                        position="Head of Quality Assurance"
                    />
                </div>

                <div
                    className="
                    grid grid-cols-6 gap-[20px]
                    border-light border-t  
                    py-10  
                    "
                >
                    <div> </div>
                    <div className="w-full aspect-square bg-light rounded-full flex items-center justify-center">
                        <img src="logo1.png" alt="" className="w-1/2" />
                    </div>

                    <div className="w-full aspect-square bg-light rounded-full flex items-center justify-center">
                        <img src="logo3.png" alt="" className="w-1/2" />
                    </div>
                    <div className="w-full aspect-square bg-light rounded-full flex items-center justify-center">
                        <img src="logo4.png" alt="" className="w-1/2" />
                    </div>
                    <div className="w-full aspect-square bg-light rounded-full flex items-center justify-center">
                        <img src="logo5.png" alt="" className="w-1/2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
