import { useRef } from "react";

const Contact = () => {
    const email = useRef();
    const name = useRef();
    const message = useRef();
    const subject = useRef();
    const validate = () => {
        name.current.style.border = "";
        email.current.style.border = "";
        message.current.style.border = "";
        subject.current.style.border = "";

        if (name.current.value === "") {
            name.current.style.border = "2px solid red";
        }
        if (message.current.value === "") {
            message.current.style.border = "2px solid red";
        }
        if (subject.current.value === "") {
            subject.current.style.border = "2px solid red";
        }
        if (
            email.current.value
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ) == null
        ) {
            email.current.style.border = "2px solid red";
        }
    };
    return (
        <div className="bg-light">
            <div
                className="
                p-10
                max-w-[1200px] h-full m-auto 
                flex  justify-center flex-col lg:flex-row
                lg:text-left text-center 
                "
            >
                <div className="flex flex-col items-center justify-start lg:items-start">
                    <h1 className=" font-bold text-4xl text-darkprp">
                        Contact us
                    </h1>
                    <p className="text-darkprp my-10  w-3/4">
                        Thank you for reaching out to us! Your inquiries are
                        important to us, and we're eager to assist you. Please
                        fill out the form below, and we'll get back to you
                        promptly. For urgent matters, feel free to contact us
                        directly at (555) 123-4567. We appreciate your interest
                        in Zipper and look forward to connecting with you soon!
                    </p>
                </div>
                <div
                    className="
                    sm:text-right text-left
                    sm:grid grid-cols-[1fr_5fr] gap-5 
                    flex flex-col
                     bg-darkprp p-4 
                    rounded-[20px] text-light"
                >
                    <p className="p-2">Name</p>
                    <input
                        ref={name}
                        type="text"
                        className="text-darkprp rounded-[20px] bg-light p-2"
                    />
                    <p className="p-2">Email</p>
                    <input
                        ref={email}
                        type="text"
                        className="text-darkprp rounded-[20px] bg-light p-2"
                    />
                    <p className="p-2">Subject</p>
                    <input
                        ref={subject}
                        type="text"
                        className="text-darkprp rounded-[20px] bg-light p-2"
                    />
                    <p className="p-2">Message</p>
                    <textarea
                        ref={message}
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="p-2 text-darkprp rounded-[20px] bg-light "
                    ></textarea>
                    <button
                        onClick={validate}
                        className="col-span-2 bg-lgrn rounded-[20px] p-2 text-darkprp"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
