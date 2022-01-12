/** @jsxImportSource @emotion/react */
import './App.css';
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PokemonList from "./views/PokemonList";
import MyPokemon from "./views/MyPokemon";
import Footer from "./components/Footer";
import {container, content, page} from "./AppStyle";


function App() {
  return (
    <div css={page}>
      <BrowserRouter>
        <div css={container}>
          <Header/>
          <div css={content}>
            <Routes>
              <Route path="/" element={<PokemonList/>}/>
              <Route path="/myPokemon" element={<MyPokemon/>}/>
            </Routes>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
