import './App.css'
import {Link,  Route } from 'wouter';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';


export default function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <img width={150}  src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Yoigo_morado.svg/1200px-Yoigo_morado.svg.png' />
        </Link>
        <Route component={Home} path="/" />
        <Route 
          path='/search/:keyword' 
          component={SearchResults}
        />
       <Route
      //  component={Detail}
       path='/gif/:id'
       ></Route>
      </section>
    </div>
  );
}

