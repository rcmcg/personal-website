import {useState} from "react";

function ImageCarousel() {
  const images: string[] = [
    "/projects/preview/wild-and-bre-fullscreen.png",
    "/projects/preview/axe-card-fullscreen.png",
    "/projects/preview/wild-and-bre-mobile.png",
    "/projects/preview/floating-head-mobile-preview.png",
  ]
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div
      className={"preview-img-container"}
      style={{
        display: "flex",
        backgroundImage: `url("${images[imageIndex]}")`
      }}
    >
    </div>
  )
}

function ProjectPreview() {

  return (
    <>
      <div
        className={"preview-container"}
        style={{
          display: "flex",
          flexDirection: "column"
      }}>
        <ImageCarousel />
        <div className={"preview-info-container"}>
          <h3>Wild and Brea Artwork</h3>
          <div>Art portfolio website for my sister, Breanna McGowan</div>
          <a href={"http://www.wildandbrea.com"}>wildandbrea.com</a>
        </div>
      </div>
    </>
  )
}

export default ProjectPreview