import './App.css'
import PetInfo from './Components/PetInfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="parrot" age={70} />
      <PetInfo animal="Sony Ericsson" age={20} />
    </div>
  )
}

export default App
