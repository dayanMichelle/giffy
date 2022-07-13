import { memo } from "react";
import ListOfList from "../../componets/ListOfList";
import Spinner from "../../componets/Spinner";
import { useGifs } from "../../hooks/useGifs";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });
  return loading ? <Spinner /> : <ListOfList gifs={gifs} keyword={keyword} />;
};

export default memo(SearchResults);
