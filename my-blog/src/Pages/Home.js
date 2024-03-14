import BlogList from "../components/BlogList";
import useFetch from "../components/useFetch";

const Home = () => {
    // Using the useState hook to initialize state for blogs
    const { data: blogs
    } = useFetch('http://localhost:4000/blogs')


    // Rendering the component
    return (
        <div className="home">
            {/* Passing the fetched blogs data to the BlogList component */}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    );
}

export default Home; // Exporting the Home component as default

