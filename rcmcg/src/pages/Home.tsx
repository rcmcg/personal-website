import Header from "../components/header/Header.tsx";


function Body() {
  return (
    <>
      <div className={"viewing-margin main"}>
        <h2>WIP</h2>
        <div>ETA: whenever</div>
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
