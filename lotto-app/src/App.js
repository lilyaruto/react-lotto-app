import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title={"Mini Lotto"} numBalls={3} maxNum={10}/>
    </div>
  );
}

export default App;
