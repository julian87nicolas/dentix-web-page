import {Routes, Route, BrowserRouter} from "react-router-dom"

import Navbar from './components/Navbar';

import './App.css';

import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        {/* <Route path="/about" element={<About />}/> */}
      </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
