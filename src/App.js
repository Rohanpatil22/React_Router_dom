import { Outlet } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App;
