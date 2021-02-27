const Navbar = () => {
    return (
        <nav className="navbar">
            <p><h1>To-Do</h1></p>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Task</a>
            </div>
        </nav>
    );
}
 
export default Navbar;