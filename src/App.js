import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Location from "./components/Location";
import GlobalStyles from "./components/GlobalStyles";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <main>
        <Hero />
        <Location />
      </main>
    </div>
  );
}

export default App;
