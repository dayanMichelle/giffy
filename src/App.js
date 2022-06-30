import './App.css'
import ListOfList from './componets/ListOfList'
import { Route } from 'wouter';


export default function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <Route 
          path='/gif/:keyword' 
          component={ListOfList}
        />
       
      </section>
    </div>
  );
}

