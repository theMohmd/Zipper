const CommentBox = ({ text, name, img }) => {
    return (
        <div
            className="h-full w-full 
            p-5 bg-darkprp rounded-[20px]
            flex flex-col justify-start items-center  
            text-light gap-5
            "
        >
            <div
                className="
                border-b border-light p-2 w-full  h-16
                flex justify-start gap-2 items-center"
            >
                <img
                    src={img}
                    alt=""
                    className="rounded-full h-full aspect-square "
                />
                <p className="font-bold text-xl">{name}</p>
            </div>
            <div className="">
                <p className="">{text}</p>
            </div>
        </div>
    );
};
const Comments = () => {
    return (
        <div className="w-full  bg-light">
            <div
                className="
                max-w-[1200px] h-full m-auto
                grid md:grid-cols-3 gap-[20px]
                p-10
                "
            >
                <CommentBox
                    text={
                        "Zipper nails it with style and quality! Thanks to Lexi's designs, Ollie's quality control, Mia's engaging marketing, and Gabe's punctual deliveries – my fashion game is on point!"
                    }
                    img={"prf1.jpeg"}
                    name={"Alex Morgan"}
                />
                <CommentBox
                    text={
                        "Zipper's style and quality are unbeatable! Lexi, Ollie, Mia, and Gabe have created a winning combo that keeps me coming back for more."
                    }
                    img={"prf2.jpeg"}
                    name={"Tom Jackman"}
                />
                <CommentBox
                    text={
                        "Kudos to Zipper! Lexi's designs, Ollie's quality control, Mia's marketing, and Gabe's logistics make them my top choice for trendy and reliable fashion."
                    }
                    img={"prf3.jpeg"}
                    name={"Lexi Cook"}
                />
            </div>
        </div>
    );
};

export default Comments;
