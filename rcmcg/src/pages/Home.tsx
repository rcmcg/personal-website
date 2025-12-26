import Header from "../components/header/Header.tsx";


function Body() {
  return (
    <>
      <div className={"viewing-margin main"}>
        <h2 className={"home-hello"}>Reece McGowan</h2>
        <h3 className={"typewriter"}>Software Developer</h3>
      </div>
    </>
  )
}

function Home() {

  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default Home
