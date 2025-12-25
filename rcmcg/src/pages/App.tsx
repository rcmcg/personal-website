import Header from "../components/header/Header.tsx";
import TerminalWindow from "../components/terminal-window/TerminalWindow.tsx";


function Body() {
  return (
    <>
      <div className={"main"}>
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
      <TerminalWindow />
    </>
  )
}

export default App
