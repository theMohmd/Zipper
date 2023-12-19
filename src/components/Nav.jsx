import { Link } from "react-router-dom";
import { BurgerIcon, XIcon } from "../assets/Icons";
import { useEffect, useRef } from "react";
export const NavButton = ({ to, text }) => {
    return (
        <Link
            to={to}
            className="
            flex justify-center items-center
             text-light font-bold   
            "
        >
            {text}
        </Link>
    );
};

const Nav = () => {
    useEffect(() => {
        window.addEventListener("resize", () => {
            menu.current.style.top = "-20rem";
        });
    }, []);
    const menu = useRef();
    const show = () => {
        if (menu.current.style.top == "0px") {
            menu.current.style.top = "-20rem";
        } else {
            menu.current.style.top = "0px";
        }
    };
    return (
        <div
            className="
            h-10
            w-full 
            bg-darkprp  m-auto
            shadow-[0_5px_30px_#2C0041]  
            z-50  top-0 sticky
            "
        >
            <div
                className="
                max-w-[1200px] h-full m-auto
                flex justify-between items-center  gap-[20px]  
                py-[10px] 
                "
            >
                <div
                    className="
                    flex justify-start items-center 
                    font-black text-xl text-light 
                    col-span-2
                    px-2
                    "
                >
                    <img src="zipper.png" alt="" className="h-5 invert" />
                    ZIPPER
                </div>
                <div className="sm:hidden cursor-pointer group" onClick={show}>
                    <BurgerIcon className={"h-6 w-6 mr-2 stroke-light"} />
                </div>
                <div className=" gap-[20px] items-center hidden sm:flex justify-end px-2  ">
                    <NavButton to="/Zipper/" text="Home" />
                    <NavButton to="/Zipper/products" text="Products" />
                    <NavButton to="/Zipper/about" text="About us" />
                    <NavButton to="/Zipper/contact" text="Contact us" />
                </div>
                <div
                    ref={menu}
                    className=" 
                    duration-500 z-10 absolute top-[-20rem] h-40 left-0
                    bg-darkprp right-0 w-full
                    shadow-[0_5px_30px_#2C0041]  
                    flex flex-col items-end justify-between p-2"
                >
                    <div
                        className="sm:hidden cursor-pointer group"
                        onClick={show}
                    >
                        <XIcon className={"h-6 w-6  stroke-light"} />
                    </div>
                    <NavButton to="/Zipper/" text="Home" />
                    <NavButton to="/Zipper/products" text="Products" />
                    <NavButton to="/Zipper/about" text="About us" />
                    <NavButton to="/Zipper/contact" text="Contact us" />
                </div>
            </div>
        </div>
    );
};
export default Nav;
