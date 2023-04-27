import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Carlos is re-learning react since it's been a few years since I had to use it.
        </a>
      </header>
      <ul>
        {props.dishes.map((dish)=>(
          <li key={dish.id}>{dish.nameDish}</li>
        ))}
      </ul>
      dishes={dishObjects}
    </div>
  );
}
const dishes = [
  "Pizza",
  "Macaroni and Cheese",
  "Salmon and Potatoes",
  "Breakfast burrito",
  "TACOS!!!!!"
];

const dishObjects = dishes.map(
  (dish, i)=>({
    id: i,
    nameDish: dish
  })
);

export default App;
