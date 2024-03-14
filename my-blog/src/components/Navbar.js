import { Link } from "react-router-dom"; // ImportingLink from react-router-dom

// Functional component for the navigation bar
function NavBar() {
    return (
        <>
            {/* Navigation bar */}
            <nav className="navbar">
                <h2>Blog Post</h2> {/* Title of the blog */}
                <div className="links">
                    {/* Links to different routes */}
                    <Link to="/">Home</Link> {/* Link to the Home route */}
                    <Link to="/blog">New Blog</Link> {/* Link to the Blog route */}
                </div>
            </nav>

            {/* Outlet component from react-router-dom for rendering nested routes */}

        </>
    )
};

export default NavBar; // Exporting the NavBar component as default
