import {NavLink} from "react-router";

function Header() {

  return (
    <>
      <div className={"header-container"}>
        <div className={"header header-first-line"}>
          <h1>rcmcg</h1>
          <div className={"header-item"}>vancouver visier sfu</div>
        </div>
        <div className={"header header-second-line"}>
          <NavLink to={"/"}>
            <div className={"header-item header-link"}>home</div>
          </NavLink>
          <NavLink to={"/projects"}>
            <div className={"header-item header-link"}>projects</div>
          </NavLink>
          <NavLink to={"/blog"}>
            <div className={"header-item header-link"}>blog</div>
          </NavLink>
          <NavLink to={"/photos"}>
            <div className={"header-item header-link"}>photos</div>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Header