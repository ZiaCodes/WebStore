import './index.css';
import Home from './container/home'
import NavBar from './components/Nav';
import Create from './components/Create';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create8918027179_ziacodes" element={<Create />} />
    </Routes>
    </>
  );
}

export default App;
