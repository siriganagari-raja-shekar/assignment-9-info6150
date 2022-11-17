import "./Header.scss";
import { Outlet, NavLink } from "react-router-dom";
const Header = () => {

    const linkIsActive = (isActive) => isActive.isActive ? "navactive" : "";

    const handleLogout = () =>{
        sessionStorage.removeItem("user");
    }
    
    return(
        
        <>
            <nav>
                <ul>
                    <li><NavLink className={linkIsActive} to="/home">Home</NavLink></li>
                    <li><NavLink className={linkIsActive} to="/jobs">Jobs</NavLink></li>
                    <li><NavLink className={linkIsActive} to="/about-us">About Us</NavLink></li>
                    <li><NavLink className={linkIsActive} to="/contact">Contact</NavLink></li>
                    <li className="logoutButton"><NavLink to="/" className="navactive" onClick={handleLogout}>Logout</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Header;