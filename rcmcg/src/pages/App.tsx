import Header from "../components/header/Header.tsx";
import TerminalWindow from "../components/terminal-window/TerminalWindow.tsx";


function Body() {
  return (
    <>
      <div className={"margin main"}>
        <h2>WIP</h2>
        <div>ETA: whenever</div>
      </div>
    </>
  )
}

function App() {

  return (
    <>
      <Header />
      <Body />
      <div className={"margin"}>
        <TerminalWindow />
      </div>
    </>
  )
}

export default App
