import Title from './components/Title'
import Counter from './components/Counter'

import newphoto from "./assets/newphoto.jpg";

import userCountdown from './Hooks/userCountdown';

import './App.css'

function App() {

  const [day, hour, minute, second] = userCountdown("jan 1, 2023 00:00:00")
 
  return (
    <div className="App" style={{backgroundImage: `url(${newphoto})`}}>
    <div className="container">
        <Title title="Contagem Regressiva para 2023" />
        <div className="countdown-container">
        <Counter title="Dias" number={day} />
        <Counter title="Horas" number={hour} />
        <Counter title="Minutos" number={minute} />
        <Counter title="Segundos" number={second} />
      </div>
    </div>
   </div>
  )
}

export default App
