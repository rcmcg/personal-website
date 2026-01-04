import Header from "../../components/header/Header.tsx";
import ProjectPreview from "../../components/project/preview/ProjectPreview.tsx";

function ProjectsPage() {
  return (
    <>
      <Header />
      <div className={"main"}>
        <div className={"main-body"}>
          <div className={"project-preview-list-item"}>
            <h3>Wild and Brea Artwork</h3>
            <ProjectPreview />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsPage