import Background from './components/Background'
import Radio from './components/Radio'

function App() {
  const pages = [
    <div>
      <h2>Page 1</h2>
      <p>This is the content of page 1.</p>
    </div>,
    <div>
      <h2>Page 2</h2>
      <p>This is the content of page 2.</p>
    </div>,
    <div>
      <h2>Page 3</h2>
      <p>This is the content of page 3.</p>
    </div>,
  ]

  return (
    <div className="font-primary m-4">
      <Radio />
      <Background className="-z-20" src="/gifs/city-skyline.gif" />
      {/* <Background className="-z-10 bg-black bg-opacity-50" /> */}
    </div>
  )
}

export default App
