import './App.css';
import Card from './components/card';
import Profile from './components/profile'
import './components/navigation.css'
import { useState} from 'react';
const data = require('./data.json')


function App() {
  const [getTime, setTime] = useState('daily')
  let timestamps = data.map((elem) => {
    return [
      elem.timeframes[getTime].current,
      elem.timeframes[getTime].previous
    ]
  })

  function changeTimes(time) {
    setTime(time)
    timestamps = data.map((elem) => {
      return [
        elem.timeframes[getTime].current,
        elem.timeframes[getTime].previous
      ]
    })
  }
  console.log(timestamps)
  return (
    <div className="App">
      <div className="profilecontainer">
      <Profile name="Jeremy Robson" />

      <nav className="nav">
          <button onClick={() => changeTimes('daily')}>Daily</button>
          <button onClick={() => changeTimes('weekly')}>Weekly</button>
          <button onClick={() => changeTimes('monthly')}>Monthly</button>
        </nav>
      </div>
      <Card type="work" timestamps={timestamps[0]} />
      <Card type="play" timestamps={timestamps[1]} />
      <Card type="study" timestamps={timestamps[2]} />
      <Card type="exercise" timestamps={timestamps[3]} />
      <Card type="social" timestamps={timestamps[4]} />
      <Card type="selfcare" timestamps={timestamps[5]} />
    </div>
  );
}


export default App;
