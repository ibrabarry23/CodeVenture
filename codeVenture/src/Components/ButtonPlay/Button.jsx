import "./Button.css"
import { Link } from "react-router-dom"
function Button(){
    return(
        <div>
            <Link to={"./Game"}><button className="BottoneGioca">GIOCA ORA! <svg fill="#049CD8" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 210 210" xml:space="preserve">
            <path d="M179.07,105L30.93,210V0L179.07,105z"/>
            </svg></button></Link>
        </div>
    )
}
export default Button