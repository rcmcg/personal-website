
function Header() {

  return (
    <>
        <div className={"header"}>
          <h1>rcmcg</h1>
          <div className={"header-item"}>vancouver</div>
          <div className={"header-item"}>visier</div>
          <div className={"header-item"}>sfu</div>
        </div>
    </>
  )
}

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
    </>
  )
}

export default App
