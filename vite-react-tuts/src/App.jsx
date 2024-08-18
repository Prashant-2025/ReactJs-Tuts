import Card from './components/Card'
// import Counter from './components/Counter'
import './App.css'

function App() {
  let myObj = {
    username : "Harry",
    age : 21
  }
  return (
    <>
      {/* <Counter /> */}
      <div className=" mt-5 flex justify-evenly items-center">
        <Card username="About MacOS" btnText="Visit Me" someObject={myObj} />
        <Card username="About Windows"  />
      </div>
    </>
  )
}

export default App
