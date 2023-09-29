import React, { useState } from "react";

const stileModale = {
  fontFamily: "pixel-font",
};

const stileTesto = {
  fontSize: "28px",
  fontWeight: "bold",
  textShadow: "2px 8px 4px rgba(0, 0, 0, 0.2)",
};

const stileBottone = {
  fontWeight: "bold",
  textShadow: "0 0 6px rgba(0, 0, 0, 0.8)",
};

const stileEtichetta = {
  fontSize: "14px",
  fontWeight: "bold",
};

const stileChiusuraBottone = {
  position: "absolute",
  left: "65%",
  top: "25%",
  color: "red",
  fontFamily: "pixel-font",
  fontSize: "24px",
  transition: "color 0.3s, transform 0.3s, text-shadow 0.3s",
  fontWeight: "bold",
  cursor: "pointer",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
};

function LoginModal({ isOpen, toggleModal }) {
  const [isHovered, setIsHovered] = useState(false);
  const [password, setPassword] = useState('');
  const [mostraPassword, setMostraPassword] = useState(false);

  const gestisciMouseEnter = () => {
    setIsHovered(true);
  };

  const gestisciMouseLeave = () => {
    setIsHovered(false);
  };

  const gestisciChiusuraClick = () => {
    toggleModal();
  };

  const toggleMostraPassword = () => {
    setMostraPassword(!mostraPassword);
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
            <div style={stileModale}>
              <button
                onClick={gestisciChiusuraClick}
                className="close-button"
                style={{
                  ...stileChiusuraBottone,
                  color: isHovered ? "red" : "inherit",
                  transform: isHovered ? "scale(1.1)" : "scale(1)",
                }}
                onMouseEnter={gestisciMouseEnter}
                onMouseLeave={gestisciMouseLeave}
              >
                X
              </button>
              <h2 className="text-cfff4b p-2" style={stileTesto}>
                CODEVENTURE
              </h2>

              <div className="mt-4 flex flex-col text-start">
                <label
                  htmlFor="email"
                  className="text-white pr-4 pb-2"
                  style={stileEtichetta}
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

              <div className="mt-4 flex flex-col text-start relative">
                <label
                  htmlFor="password"
                  className="text-white pr-4 pb-2"
                  style={stileEtichetta}
                >
                  Password :
                </label>
                <input
                  type={mostraPassword ? "text" : "password"}
                  id="password"
                  className="border rounded-md p-2 w-full"
                  placeholder="Inserisci la tua password"
                  value={password}
                  readOnly
                />
                <button
                  onClick={toggleMostraPassword}
                  className="absolute right-0 top-0 m-2 text-black bg-white rounded-md px-2"
                >
                  {mostraPassword ? "Nascondi" : "Visualizza"}
                </button>
              </div>

              <div className="mt-4 flex justify-between">
                <button
                  className="bg-blue-500 text-white px-10 py-4 rounded-md hover:bg-blue-700"
                  style={stileBottone}
                >
                  Registrati
                </button>

                <button
                  className="bg-cfff4b text-white px-10 py-4 rounded-md hover:bg-opacity-80 ml-4"
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
