const App = ({ initBtnText, initBtnClass }) => {
  //const { initBtnText } = props
  const [btnText, setBtnText] = React.useState(initBtnText)
  const [btnClass, setBtnClass] = React.useState(initBtnClass)

  //let btnText = 'Click me plz'
  const onBtnClick = () => {
    //btnText = 'Hello from React'
    setBtnText(`Hello from React, ${Math.random()}`)
    setBtnClass('green-btn')
  }
  return (
    <div className="app">
      <button className={btnClass} onClick={onBtnClick}>
        {btnText}
      </button>
    </div>
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App initBtnText="Click me" initBtnClass="red-btn-text" />)
