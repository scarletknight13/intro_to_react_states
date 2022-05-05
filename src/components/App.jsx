
import '../styles/App.css';
import {useState} from 'react' 
import Counter from './Counter';

function App() {
  // const state = useState(0);
  // console.log(state)
  const [count, setCount] = useState(100);
  console.log(count);
  console.log(setCount)
  function decrement(){
    console.log('decrement')
    setCount(Math.max(1, count - 1))
  }
  function increment(){
    console.log('increment')
    setCount(count + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Intro to State Lesson</h1>
        <ul>
          <li>Counter Comp</li>
          <li>count variable</li>
          <li>passing function to the counter comp</li>
          <li>triggering a state change with a useState</li>
        </ul>
        <div>
          {}
          <Counter count={count} increment={increment} decrement={decrement}/>
        </div>
      </header>
    </div>
  );
}

export default App;
