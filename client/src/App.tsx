import Background from './components/Background'
import Radio from './components/Radio'

function App() {
  return (
    <div className="font-primary">
      <Radio />
      <Background className="-z-20" src="/gifs/city-skyline.gif" />
      <Background className="-z-10 bg-black bg-opacity-50" />
    </div>
  )
}

export default App
