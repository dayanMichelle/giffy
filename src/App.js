import './App.css'
import {useState, useEffect} from 'react'
import getGifs from './services/getGif'
import Gif from './componets/Gif'



export default function App() {

  const [gifs, setGifs] = useState([])

  useEffect(()=> {
  getGifs({keyword: 'rick'}).then(gifs => setGifs(gifs))
  }, [])
  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => 
          <Gif 
            key={singleGif.title}
            url={singleGif.url} 
            id= {setGifs.id} 
          />
          )
        }
      </section>
    </div>
  );
}

