import "./App.css";
import NavBarComponent from "./components/nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import SubNavBarComponent from "./components/sub-nav-bar";
import GalleryComponent from "./components/gallery";
import FooterComponent from "./components/footer";

function App() {
  // genero una stringa in più per generare l'errore dei film non trovati
  let searchTexts = ["harry potter", "fast", "The Naked Gun", "spuntata"];
  return (
    <div>
      <header>
        <NavBarComponent />
        <SubNavBarComponent />
      </header>
      <main>
        {searchTexts.map((searchText, index) => {
          return <GalleryComponent key={index} searchText={searchText} />;
        })}
      </main>
      <footer className="bg-dark">
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
