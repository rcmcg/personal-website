import Header from "../../components/header/Header.tsx";


function Body() {
  return (
    <>
      <div className={"main"}>
        <div className={"main-body"}>
          <h2 className={"home-hello"}>Reece McGowan</h2>
          <div className={"headshot"}>
            <img
              src="/assets/headshot.jpeg"
              alt="Headshot of Reece McGowan"
            />
          </div>
          <h3 className={"typewriter"}>Software Developer</h3>
          <h4>Vancouver, BC.</h4>
          <article className={"about text"}>
            <div className={"about-title"}>
              <h3>About</h3>
            </div>
            <p>
              My name is Reece McGowan.
            </p>
            <p>
              I am a software developer currently working
              at <a href={"https://www.visier.com/"} target="_blank">Visier</a> in beautiful
              British Columbia. My work currently involves full-stack implementation of workflows leveraging
              generative AI.
            </p>
            <p>
              Previously, I worked on Visier's ETL technology, maintaining and improving the transformation phase. My
              notable contributions are
              a <a href={"https://docs.visier.com/developer/Studio/data/de-identification.htm"} target="_blank">de-identification tool</a>
              to scrub entities from source data, dramatic reductions
              in batch processing job times, and data visualization for internal stakeholders.
            </p>
            <p>
              Outside of programming, I enjoy cycling, video games, and coffee.
            </p>
          </article>
        </div>
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
