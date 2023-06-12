import Background from './components/Background'
import Bar from './components/Bar'
import Radio from './components/Radio'
import UtilityBar from './components/UtilityBar'

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
    <div className="font-primary p-4 h-screen w-screen">
      <div className="h-full w-full grid grid-cols-2 grid-rows-3">
        <div>
          <Radio />
        </div>
        <div className="flex justify-end items-start">
          <Bar />
        </div>

        <div className="flex items-center">
          <UtilityBar />
        </div>

        <div></div>
      </div>

      <Background className="-z-20" src="/gifs/city-skyline.gif" />
      {/* <Background className="-z-10 bg-black bg-opacity-50" /> */}
    </div>
  )
}

export default App
