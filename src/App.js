import "./App.css";
import Routing from "./Routes/Routes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
