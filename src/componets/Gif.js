import './Gif.css'
export default function Gif({title, id, url}) {
  return (
    <a href={`/gif/${id}`} className="Gif">
      <img loading='lazy' src={url} />
    </a>
  );
}
