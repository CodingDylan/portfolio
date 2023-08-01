import './App.css';
import Nav from './components/Nav'
import Card from './components/Card'
import data from './data'
function App() {
  const cards = data.map(data => { return <Card key={data.key} {...data} /> 

  })
  return (
    <div className="App">
      <Nav />
      {cards}
    </div>
  );
}

export default App;
