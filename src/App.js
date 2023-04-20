import Footer from "./components/Footer";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Books from "./pages/Books";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
        </Routes>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;
