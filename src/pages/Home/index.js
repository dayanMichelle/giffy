import { useState } from "react";
import { useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from '../../componets/ListOfList'
import './Home.css'

const Home = () => {

  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const {loading, gifs} = useGifs()

  const handleSubmit = (e) => {
    e.preventDefault();
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search a pin here..." onChange={(e) => handleChange(e)} type="text" value={keyword} />
        <button>Buscar</button>
      </form>
      <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
    </>
  );
};

export default Home;
