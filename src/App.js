import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import GlobalStyles from "./components/GlobalStyles";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <Intro />
      </main>
    </div>
  );
}

export default App;
