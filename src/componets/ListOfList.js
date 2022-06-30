import { useEffect, useState } from "react";
import getGifs from "../services/getGif";
import Gif from "./Gif";

export default function ListOfList({ params }) {
  const { keyword }= params
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return (
    <>
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={title} title={title} url={url} />
      ))}
    </>
  );
}
