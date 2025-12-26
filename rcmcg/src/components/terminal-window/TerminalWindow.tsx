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
          <div>title: init</div>
          <div>created on: Thu Dec 24 08:16:20</div>
          <br/>
          <div>rcmcg@M46fedX ~ $</div>
          <div>
            Welcome to my website! I've always wanted one but I've never taken the plunge. Why? Well, perfectionism
            (read: ego). Putting something out into the world means being rejected and ...
          </div>
          <div>rcmcg@M46fedX ~ $ <a href={"/blog/-1"}>continue reading...</a></div>
        </div>
      </div>
    </>
  )
}

export default TerminalWindow