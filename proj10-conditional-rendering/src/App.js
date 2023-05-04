import './App.css'
import PetInfo from './Components/PetInfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="parrot" age={70} hasPet />
      <PetInfo animal="Sony Ericsson" age={20} hasPet={false} />
    </div>
  )
}

export default App
