import Header from "../components/header/Header.tsx";


function Body() {
  return (
    <>
      <div className={"viewing-margin main"}>
        <h2 className={"home-hello"}>Hello!</h2>
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
