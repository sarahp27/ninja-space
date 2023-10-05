import Clients from "./Components/Clients";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Work from "./Components/Work";
import TestClient from "./Components/TestClient";
import Meet from './Components/Meet'
import Footer from "./Components/Footer";
import Connect from "./Components/Connect";
import Connnect from "./Components/Connnect";
// import styles from ''

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Work/>
    <Services/>
    <TestClient/>
    <Meet/>
    <Connnect/>
    {/* <Connect/> */}
    <Footer/>
    </>
  );
}

export default App;
