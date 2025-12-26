import Header from "../components/header/Header.tsx";
import TerminalWindow from "../components/terminal-window/TerminalWindow.tsx";

function BlogListing() {
  return (
    <>
      <Header />
      <div className={"viewing-margin blog-list"}>
        <div className={"blog-listing-item"}>
          <TerminalWindow />
        </div>
      </div>
    </>
  )
}

export default BlogListing