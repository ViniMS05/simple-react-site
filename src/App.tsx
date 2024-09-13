import { Aside } from "./components/Aside";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Header />
      <div id="container">
        <Nav />
        <Main />
        <Aside />
      </div>
      <Footer />
    </>
  );
}

export default App;
