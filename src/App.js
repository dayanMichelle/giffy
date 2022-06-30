import './App.css'
import ListOfList from './componets/ListOfList'
import {Link,  Route } from 'wouter';


export default function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/gif/pandas'>Gifs de pandas</Link>
        <Link to='/gif/cars'>Gifs de cars</Link>
        <Route 
          path='/gif/:keyword' 
          component={ListOfList}
        />
       
      </section>
    </div>
  );
}

