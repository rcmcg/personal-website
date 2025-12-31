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
          <h4>Vancouver, BC</h4>
          <article className={"home-section text"}>
            <h3>About</h3>
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
              a <a href={"https://docs.visier.com/developer/Studio/data/de-identification.htm"} target="_blank">de-identification tool</a> to
              scrub entities from source data, dramatic reductions
              in batch processing job times, and data visualization for internal stakeholders.
            </p>
            <p>
              Outside of programming, I enjoy cycling, video games, and coffee.
            </p>
          </article>
          <div className={"home-section text"}>
            <h3>Links</h3>
            <div>
              <a href={"mailto:reece.mcg@hotmail.com"} className={"social-container"}>
                <img
                  src={"/icons/Envelope--Streamline-Unicons.svg"}
                  alt={"Email reece.mcg@hotmail.com"}
                  className={"social-link"}
                />
                <div>reece.mcg@hotmail.com</div>
              </a>
            </div>

            <div >
              <a href={"https://github.com/rcmcg"} className={"social-container"}>
                <img
                  src={"/icons/Github--Streamline-Unicons.svg"}
                  alt={"Reece McGowan's GitHub"}
                  className={"social-link"}
                />
                <div>rcmcg</div>
              </a>
            </div>

            <div>
              <a href={"https://www.linkedin.com/in/reece-mcgowan/"} className={"social-container"}>
                <img
                  src={"/icons/Linkedin--Streamline-Unicons.svg"}
                  alt={"Reece McGowan's LinkedIn"}
                  className={"social-link"}
                />
                <div>Reece McGowan</div>
              </a>
            </div>
          </div>
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
