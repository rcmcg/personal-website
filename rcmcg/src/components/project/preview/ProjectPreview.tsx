import {useState} from "react";

function ImageCarousel() {
  const images: string[] = [
    "/projects/preview/wild-and-bre-fullscreen.png",
    "/projects/preview/axe-card-fullscreen.png",
    // "/projects/preview/wild-and-bre-mobile.png",
    // "/projects/preview/floating-head-mobile-preview.png",
  ]
  const [imageIndex, setImageIndex] = useState(0);

  function handleArrowClick(dir: number) {
    setImageIndex((idx) => {
      return Math.abs(idx + dir) % images.length;
    })
  }

  return (
    <div
      className={"preview-img-container"}
      style={{
        backgroundImage: `url("${images[imageIndex]}")`
      }}
    >
      <div className={"preview-img-arrow-container"} onClick={() => handleArrowClick(-1)}>
        <div className={"preview-img-arrow"}>
          <div className={"preview-img-arrow-background"}></div>
          &larr;
        </div>
        <img
          className={"arrow-icon flipped"}
          src={"/icons/arrow-right-circle.svg"}
          alt={"left arrow icon"}
        />
      </div>
      <div className={"preview-img-arrow-container"} onClick={() => handleArrowClick((1))}>
        <img
          className={"arrow-icon"}
          src={"/icons/arrow-right-circle.svg"}
          alt={"right arrow icon"}
        />
      </div>
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
          <a href={"http://www.wildandbrea.com"} target={"_blank"}>wildandbrea.com</a>
        </div>
      </div>
    </>
  )
}

export default ProjectPreview