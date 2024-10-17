import Navbar from "./components/NavBar";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />

      {/* Agregar margen superior al CardContainer */}
      <CardContainer />
      {/* Ajusta el valor de mt según lo necesites */}
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
