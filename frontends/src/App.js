import './App.css';
import IndexFinddoctor from './Components/Finddoctor/IndexFinddoctor';
import Indexlandingpage from './Components/Landingpage/Indexlandingpage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
  //  Jai Shree Ram Ram
  <>
   {/* Jai shree Ram */}
   <Routes>
     <Route path="/" element = {<Indexlandingpage/>} />
     <Route path="/FindDoctor" element = {<IndexFinddoctor/>} />
   </Routes>
   {/* <Indexlandingpage/> */}
  </>
  );
}

export default App;
