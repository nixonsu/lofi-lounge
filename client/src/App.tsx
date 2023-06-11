import Background from './components/Background'

function App() {
  return (
    <div className="font-primary">
      <h1 className="hover:bg-red-700">Hello world!</h1>
      <Background className="-z-20" src="/gifs/city-skyline.gif" />
      <Background className="-z-10 bg-black bg-opacity-50" /> "
    </div>
  )
}

export default App
