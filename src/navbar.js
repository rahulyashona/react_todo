import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <p><h1>To-Do</h1></p>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Task</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;