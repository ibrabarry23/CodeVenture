import { useState } from "react"
import LoginModal from "../Login/LoginModal";

export function ButtonProfile(){
    const [testo,setTesto]= useState("Accedi2");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleClick = () => {
        if (testo === "Accedi2") {
          setIsModalOpen(true);
        } else {
          setIsModalOpen(false);
        }
      };

      const handleLogin = () => {
        setIsModalOpen(false); 
        setTesto("Profilo Utente"); 
      };

    return(
        <>
        <button className="pl-2 pr-2 rounded-md bold pixelFont font-bold colorTextCyan mr-3 ms-auto colorBackYellow" onClick={handleClick}>{testo}</button>
        <LoginModal isOpen={isModalOpen} toggleModal={handleClick} onLogin={handleLogin} />
        </>
    )
}