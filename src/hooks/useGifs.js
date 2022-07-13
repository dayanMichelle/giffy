import { useContext, useEffect, useState } from "react";
import GifsContext from "../context/GifsContext";
import getGifs from "../services/getGif";

export function useGifs({ keyword } = { keyword: null }) {
  const {gifs,setGifs} = useContext(GifsContext)
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    const keywordToUse =  keyword || localStorage.getItem('lastKeyword') || 'random'
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      if (keyword) localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword,setGifs]);
  return { loading, gifs };
}
