import Header from "../components/header/Header.tsx";
import ProjectPreview from "../components/project/preview/ProjectPreview.tsx";

function ProjectsPage() {
  return (
    <>
      <Header />
      <div className={"main"}>
        <div className={"main-body"}>
          <h2>Projects</h2>
          <ProjectPreview />
        </div>
      </div>
    </>
  )
}

export default ProjectsPage