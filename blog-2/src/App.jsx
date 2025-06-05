import './App.css'
import { BrowserRouter as Router, Route,Routes,Link,useParams} from "react-router-dom";

function App() {
  const name = "sujith";
  const Home = () => {
    return (
      <h1>Home</h1>
    )
  }
  const About = () => {
    const {name} = useParams();
    return (
      <h1>Name is {name}</h1>
    )
  }

  const Contact = ()=> {
    return (
      <h1>Contact</h1>
    )
  }
  const Search = ()=> {
    return (
      <h1>Search</h1>
    )
  }
  return (
    <Router>
      <nav className='Nav'>
        <ul className='Nav-Component'>
          <li> <Link to="/"> Home</Link></li>
          <li> <Link to={`/about/${name}`}>About </Link></li>
          <li> <Link to="/contact">Contact </Link></li>
          <li> <Link to="/search">Search</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" Component={ Home} />
        <Route path="/about/:name" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
      </Routes>

    </Router>
  )
}

export default App


// Routes,Route,BrowserRouter,Link
// npm install react-router-dom
// instead anchor tag use Link
