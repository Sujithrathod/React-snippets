import Sum from './components/Sum'
import Info from './components/Info'
function App() {
  const user = {
  id: 0,
  name: "Underoos",
  age: 54,
};
  return (
    <>
        <Sum firstNumber={10} secondNumber={25}/>
        <Sum firstNumber={22} secondNumber={25}/>
        <Info user={user}/>
        <Info />
    </>
  )
}

export default App

// props -> one-way and bidirectional way communication in Reactjs components.
// we can pass array,objects and function as props 
// the static property defaultProps