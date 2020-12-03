// Style
import GlobalStyles from "./components/GlobalStyles";
// Components
import Nav from "./components/Nav";
// Pages
import MainPage from "./pages/Main";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <MainPage />
    </div>
  );
}

export default App;
