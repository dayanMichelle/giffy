import { useEffect, useState } from "react";
import getGifs from "../services/getGif";
import Gif from "./Gif";

export default function ListOfList({ params }) {
  const [loading, setLoading] = useState(false)
  const { keyword }= params
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword })
      .then((gifs) => {
        setGifs(gifs)
        setLoading(false)
      });
  }, [keyword]);

  if(loading) return <i>Cargando 💜</i>

  return (
    <>
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={title} title={title} url={url} />
      ))}
    </>
  );
}
