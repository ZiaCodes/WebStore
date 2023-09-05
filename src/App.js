import './index.css';
import Home from './container/home'
import NavBar from './components/Nav';
import Create from './components/Create';
// import Delete from './components/Delete';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/create" element={<Create />} />
      {/* <Route path="/delete" element={<Delete />} /> */}
      <Route path="/*" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
