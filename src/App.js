// Components
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// Style
import GlobalStyles from "./components/GlobalStyles";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <main>
        <Hero />
        <Location />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
