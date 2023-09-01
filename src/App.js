import './index.css';
import Home from './container/home'
import NavBar from './components/Nav';
import Ziacodes from './container/action';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Ziacodes />} />
    </Routes>
    </>
  );
}

export default App;
