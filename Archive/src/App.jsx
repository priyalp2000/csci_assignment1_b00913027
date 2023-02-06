import { Route, Routes } from "react-router-dom";
import {Home} from "./Home.jsx";
import {Search} from "./Search.jsx";
import {Filter} from "./Filter.jsx";

function App() {
  return(
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/search" element={<Search/>}/>
        <Route exact path="/filter" element={<Filter/>}/>
    </Routes>
  );
}

export default App

