import { useState } from "react";
import { Link, useLocation } from "wouter";
const POPULARES_GIFS = ["comida", "school"];
const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
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
      </form>
      <h3>Los Pins Más Populares</h3>
      <ul>
        {POPULARES_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link
              style={{ textDecoration: "none", color: "#C8B6E2" }}
              to={`/search/${popularGif}`}
            >
              Gifs de {popularGif}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
