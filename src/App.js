import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Main from "./components/Main";
import CharactersPage from "./components/CharacterPage/CharacterPage";
import NoPage from "./components/NoPage/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/candidate-page" element={<CharactersPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
