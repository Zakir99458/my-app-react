import logo from './logo.svg';
import './App.css';

function App() {
  

  return (
    <div className="App">
      <Person name="Mitu" category="Mitu"></Person>
      <Person name="Sahil" category="boy"></Person>
      <Person name="Zarah" category="daughter"> </Person>
      
    </div>
  );
}

function Person (props){
  console.log(props);
  return ( 
    <div className='person'>
      <p>Name: {props.name}</p>
      <p>Category: {props.category}</p>
    </div>

  );
}

export default App;
