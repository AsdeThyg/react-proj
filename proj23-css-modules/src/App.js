import './App.css'
import Info from './components/Info'

function App() {
  return (
    <div className="App">
      <Info />
      {/* className="info" does not work here */}
      <div className="info">
        <h1>App Component</h1>
        <h2>App Heading</h2>
        <button className="my-btn">AppComp</button>
      </div>
    </div>
  )
}

export default App
