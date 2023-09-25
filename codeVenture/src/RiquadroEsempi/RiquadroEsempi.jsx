import { useState } from "react"

function RiquadroEsempio(){
    const [src, setSrc] = useState("./src/assets/image/image1.jpg");
    const [activeButton, setActiveButton] = useState("ESEMPIO 1");

    const buttonColorPress = "w-1/4 h-8 verdeScuro rounded-xl pixelFont font-bold";
    const buttonColorHold = "w-1/4 h-8 verdeChiaro rounded-xl pixelFont font-bold";

    const handlerClickImg = (e, imgSrc) => {
        setActiveButton(e.target.innerText);
        setSrc(imgSrc);
    };

    const getButtonClassName = (buttonText) => {
        return buttonText === activeButton ? buttonColorPress : buttonColorHold;
    };

    return(
        <div className="flex flex-col gap-4 p-5 rounded-xl w-2/4	 ">
            <div className=" flex justify-around">
                <button
                    className={getButtonClassName("ESEMPIO 1")}
                    onClick={(e) => handlerClickImg(e, "./src/assets/image/image1.jpg")}
                >
                    ESEMPIO 1
                </button>
                <button
                    className={getButtonClassName("ESEMPIO 2")}
                    onClick={(e) => handlerClickImg(e, "./src/assets/image/image2.jpg")}
                >
                    ESEMPIO 2
                </button>
                <button
                    className={getButtonClassName("ESEMPIO 3")}
                    onClick={(e) => handlerClickImg(e, "./src/assets/image/image3.jpg")}
                >
                    ESEMPIO 3
                </button>
            </div>
            <img src={src} className=" rounded-xl bg-green-600 w-full" alt="" />
        </div>
    )
}

export default RiquadroEsempio;