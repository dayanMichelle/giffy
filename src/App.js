import './App.css';
import {useState, useEffect} from 'react'
import getGifs from './services/getGif';



export default function App() {

  const [gifs, setGifs] = useState([])

  useEffect(()=> {
  getGifs({keyword: 'rick'}).then(gifs => setGifs(gifs))
  }, [])
  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => (
            <div>
               <h4>{singleGif.title}</h4>
               <img src={singleGif.url} />
            </div>
           
          ))
        }
      </section>
    </div>
  );
}

