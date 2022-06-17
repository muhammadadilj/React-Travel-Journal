import Header from "./components/Header"
import './App.css';
import Card from "./components/Card";
import data from "./data/data"


function App() {
  return (
    <div className="App">
      <Header />
      <div className="cardContainer">
        {data.map(function(item, index) {
          return (
            <Card item={item} key={`card_${index}`} index={index} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
