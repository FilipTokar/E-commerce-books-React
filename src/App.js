import Footer from "./components/Footer";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Books from "./pages/Books";
import {books} from "./data"
import BookInfo from "./pages/BookInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" exact element={<Books books={books}/>}/>
        <Route path="/books/1" element={<BookInfo books={books}/>}/>
        </Routes>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;
