// Components
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Benefits from "./components/Benefits";
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
      </main>
    </div>
  );
}

export default App;
