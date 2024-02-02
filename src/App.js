import logo from "./logo.svg";
import "./App.css";
import NavBarComponent from "./components/nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import SubNavBarComponent from "./components/sub-nav-bar";
import GalleryComponent from "./components/gallery";
import FooterComponent from "./components/footer";

function App() {
  return (
    <div>
      <header>
        <NavBarComponent />
        <SubNavBarComponent />
      </header>
      <main>
        <GalleryComponent />
      </main>
      <footer className="bg-dark">
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
