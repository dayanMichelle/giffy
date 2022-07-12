import './App.css'
import ListOfList from './componets/ListOfList'
import {Link,  Route } from 'wouter';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';


export default function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <img width={150} src='https://marcas-logos.net/wp-content/uploads/2019/12/Pinterest-logo.png' />
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

