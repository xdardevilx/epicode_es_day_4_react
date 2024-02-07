import "./App.css";
import NavBarComponent from "./components/nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import SubNavBarComponent from "./components/sub-nav-bar";
import GalleryComponent from "./components/gallery";
import FooterComponent from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./components/tv-show";
import MovieDetails from "./components/movie-deatils";
function App() {
  // genero una stringa in più per generare l'errore dei film non trovati
  let searchTexts = ["harry potter", "fast", "The Naked Gun", "spuntata"];
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavBarComponent />
          <SubNavBarComponent />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={searchTexts.map((searchText, index) => {
                return <GalleryComponent key={index} searchText={searchText} />;
              })}
            />
            <Route path="/tvShow" element={<Account />} />
            <Route path="movieDetails/:movieId" element={<MovieDetails />} />
          </Routes>
        </main>
        <footer className="bg-dark">
          <FooterComponent />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
