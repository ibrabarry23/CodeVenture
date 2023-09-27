import React ,{useState} from "react";

const modalStyle = {
  fontFamily: "pixel-font",
};

const textStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  textShadow: "2px 8px 4px rgba(0, 0, 0, 0.2)",
};

const buttonStyle = {
  fontWeight: "bold",
  textShadow: "0 0 6px rgba(0, 0, 0, 0.8)",
};

const labelStyle = {
  fontSize: "14px",
  fontWeight: "bold",
};



function LoginModal({ isOpen, toggleModal }) {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="bg-white opacity-10 absolute inset-0"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              backgroundImage: "url(image/finestra1.png)",
              backgroundSize: "60%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              visibility: "visible",
              opacity: 1,
            }}
          ></div>

          <div className="bg-transparent absolute inset-0 flex items-center justify-center">
            <div style={modalStyle}>

              <h2 className="text-cfff4b p-2" style={textStyle}>
               CODEVENTURE
              </h2>

              <div className="mt-4 flex flex-col text-start">
                <label
                  htmlFor="email"
                  className="text-white pr-4 pb-2"
                  style={labelStyle}
                >
                  E-mail :
                </label>
                <input
                  type="email"
                  id="email"
                  className="border rounded-md p-2 w-full text-center"
                  placeholder="Inserisci la tua email"
                />
              </div>
              <div className="mt-4 flex flex-col text-start">
                <label
                  htmlFor="message"
                  className="text-white pr-4 pb-2"
                  style={labelStyle}
                >
                  Password :
                </label>
                <textarea
                  id="message"
                  className="border rounded-md p-2 w-full h-20 text-left"
                  placeholder="Password ..."
                />
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  className="bg-cfff4b text-white px-10 py-4 rounded-md hover:bg-opacity-80"
                  style={buttonStyle}
                >
                  Accedi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default LoginModal;

