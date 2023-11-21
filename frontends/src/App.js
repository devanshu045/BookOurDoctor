import './App.css';
import IndexFinddoctor from './Components/Finddoctor/IndexFinddoctor';
import Indexlandingpage from './Components/Landingpage/Indexlandingpage';
import { Routes, Route } from "react-router-dom";
import IndexVideoConsult from './Components/VideoConsult/IndexVideoConsult';

function App() {
  return (
  //  Jai Shree Ram Ram
  <>
   {/* Jai shree Ram */}
   <Routes>
     <Route path="/" element = {<Indexlandingpage/>} />
     <Route path="/FindDoctor" element = {<IndexFinddoctor/>} />
     <Route path = "/VideoCall" element = {<IndexVideoConsult/>} />
   </Routes>
   {/* <Indexlandingpage/> */}
   
  </>
  );
}

export default App;
