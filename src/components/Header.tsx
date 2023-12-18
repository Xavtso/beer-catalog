import { useNavigate } from "react-router-dom";
import beer from '../assets/beer-logo.png'
import '../styles/Header.css'

export default function Header() {
    const navigateTo = useNavigate();
    

    return (
        <div className="header">
        <img className="nav-item" onClick={() => navigateTo('/')} src={beer} alt="beer-logo" />        
        <p   className="nav-item" onClick={() => navigateTo('/contacts')}>Contacts</p>    
        </div>)
        ;
}
