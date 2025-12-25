import Header from "../components/header/Header.tsx";


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


function TerminalWindow() {
  return (
    <>
      <div className={"terminal"} style={
        {
          display: "flex",
          flexDirection: "column",
          // justifyContent: "space-between",
          height: "200px",
          backgroundColor: "black",
          borderRadius: "5px",
        }
      }
      >
        <div className={"terminal-top-bar"} style={
          {
            backgroundImage: "linear-gradient(to bottom, rgb(65, 66, 67), rgb(54, 54, 55))",
            height: "10%",
            borderRadius: "5px 5px 0 0",
          }
        }
        >
          <div className={"terminal-buttons"} style={
            {
              display: "flex",
              margin: "5px 0 0 5px"
            }
          }>
            <div className={"terminal-button"} style={
              {
                backgroundColor: "rgb(237, 106, 94)",
                borderRadius: "50%",
                width: "9px",
                height: "9px",
                marginRight: "5px"
              }
            }>
            </div>
            <div className={"terminal-button"} style={
              {
                backgroundColor: "rgb(245, 191, 79)",
                borderRadius: "50%",
                width: "9px",
                height: "9px",
                marginRight: "5px"
              }
            }>
            </div>
            <div className={"terminal-button"} style={
              {
                backgroundColor: "rgb(98, 197, 84)",
                borderRadius: "50%",
                width: "9px",
                height: "9px",
              }
            }>
            </div>
          </div>
        </div>
        <div className={"terminal-main"} style={{
          fontFamily: "iosevka",
          fontSize: "14px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%"
        }}>
          <div className={"terminal-main-top"}>
            <div>Last login: Thu Dec 25 08:16:20</div>
            <div>rcmcg@M46fedX ~ $ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus, augue ac consequat consequat,
              nibh justo interdum enim, in dapibus lacus felis at dolor. Nulla tincidunt purus eu vestibulum dictum. Duis
              posuere tortor at arcu venenatis ultrices.
            </div>
          </div>
          <div className={"terminal-main-bottom"}>
            <div>rcmcg@M46fedX ~ $ continue reading...</div>
          </div>
        </div>
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
