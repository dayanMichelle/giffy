import Gif from "./Gif";
import './Gif.css'
import Spinner from "./Spinner";

export default function ListOfList({ keyword ,gifs}) {

  return (
    <div className="container">
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={title} title={title} url={url} />
      ))}
    </div>
  );
}
