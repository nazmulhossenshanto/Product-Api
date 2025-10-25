import Boootles from "./components/Boootles";



function App() {
  const bottlesPromise = fetch('bootles.json').then(res => res.json());
  return (
    <>
      <h1>Vite + React</h1>
      <Boootles bottlesPromise={bottlesPromise}></Boootles>
    </>
  )
}

export default App
