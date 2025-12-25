function TerminalWindow() {
  return (
    <>
      <div className={"terminal"}>
        <div className={"terminal-top-bar"}>
          <div className={"terminal-buttons"}>
            <div className={"terminal-button terminal-button-red"}></div>
            <div className={"terminal-button terminal-button-yellow"}></div>
            <div className={"terminal-button terminal-button-green"}></div>
          </div>
        </div>
        <div className={"terminal-main"}>
          <div>Last login: Thu Dec 25 08:16:20</div>
          <div>rcmcg@M46fedX ~ $ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus, augue ac consequat consequat,
            nibh justo interdum enim, in dapibus lacus felis at dolor. Nulla tincidunt purus eu vestibulum dictum. Duis
            posuere tortor at arcu venenatis ultrices.
          </div>
          <div>rcmcg@M46fedX ~ $ continue reading...</div>
        </div>
      </div>
    </>
  )
}

export default TerminalWindow