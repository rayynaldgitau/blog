import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blog from './Pages/NewBlogPage';
import Home from './Pages/Home';
import NavBar from './components/Navbar';
import BlogDetails from './components/BlogDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          {/* <Home/> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/blog">

              <Blog />
            </Route>

            <Route path="/blogDetails/:id">
              <BlogDetails />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

