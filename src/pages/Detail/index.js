import { useContext } from "react";
import Gif from "../../componets/Gif";
import GifsContext from "../../context/GifsContext";
import { useGifs } from "../../hooks/useGifs";

const Detail = ({ params }) => {
  const { gifs, setGifs } = useGifs();
  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  console.log(gif);
  return <Gif {...gif} />;
};

export default Detail;
