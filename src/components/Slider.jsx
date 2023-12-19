import { useEffect, useState } from "react";
import { LeftIcon, RightIcon } from "../assets/Icons";
import { useRef } from "react";
const Layer = ({ rf, className, img }) => {
    return (
        <div
            ref={rf}
            className={`
            bg-darkprp 
            relative  left-0 col-start-1 row-start-1
            grid gap-[20px]
            md:grid-cols-2

            ${className}
            `}
        >
            <div
                className="
                flex  justify-center flex-col
                "
            >
                <img src={img} alt="" className="rounded-[20px]" />
            </div>
            <div
                className="
                flex  justify-center flex-col
                "
            >
                <h1 className="text-3xl font-bold text-light">
                    Unleash Style,
                    <br /> Embrace Functionality
                </h1>
                <h3 className="text-2xl font-medium opacity-70  text-light">
                    Your Wardrobe's Perfect Fit!
                </h3>
            </div>
        </div>
    );
};
const Slider = () => {
    var layer1 = useRef();
    var layer2 = useRef();

    const autoslide = () => {
        console.log("tst");
        move();
        setTimeout(() => {
            autoslide();
        }, 5000);
    };
    useEffect(() => {}, []);
    const move = (dir) => {
        var val1 = "200%";
        var val2 = "-200%";
        if (dir != 1) {
            var temp = val1;
            val1 = val2;
            val2 = temp;
        }
        layer1.current.style.translate = val2;
        setTimeout(() => {
            layer1.current.style.transition = "1s";
            layer2.current.style.transition = "1s";

            layer1.current.style.translate = "0";
            layer2.current.style.translate = val1;
            setTimeout(() => {
                layer1.current.style.transition = "";
                layer2.current.style.transition = "";
                layer2.current.style.translate = val2;
                setTimeout(() => {
                    temp = layer1;
                    layer1 = layer2;
                    layer2 = temp;
                }, 10);
            }, 1000);
        }, 10);
    };
    return (
        <div className="  w-full py-10  bg-darkprp">
            <div
                className="
                grid grid-cols-[1fr_20fr_1fr] md:grid-cols-[1fr_10fr_1fr] gap-[20px]
                max-w-[1200px] h-full m-auto relative
                "
            >
                <div
                    className="flex items-center justify-center w-10"
                    onClick={autoslide}
                >
                    <LeftIcon />
                </div>

                <div className="overflow-hidden col-start-2 grid grid-cols-1 grid-rows-1">
                    {/*-----------------------*/}
                    <Layer rf={layer1} img="slider1.png" />
                    <Layer
                        rf={layer2}
                        img="slider2.png"
                        Style={{ translate: "-200%" }}
                    />
                    {/*-----------------------*/}
                </div>
                <div
                    onClick={() => move(1)}
                    className="flex items-center justify-center col-start-3 row-start-1 w-10"
                >
                    <RightIcon />
                </div>
            </div>
        </div>
    );
};

export default Slider;
