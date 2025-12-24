import {NavLink} from "react-router";

function Header() {

  return (
    <>
      <div className={"header header-first-line"}>
        <h1>rcmcg</h1>
        <div className={"header-item"}>vancouver</div>
        <div className={"header-item"}>visier</div>
        <div className={"header-item"}>sfu</div>
      </div>
      <div className={"header header-second-line"}>
        <NavLink to={"/"}>
          <div className={"header-item"}>home</div>
        </NavLink>
        <NavLink to={"/projects"}>
          <div className={"header-item"}>projects</div>
        </NavLink>
        <NavLink to={"/blog"}>
          <div className={"header-item"}>blog</div>
        </NavLink>
        <NavLink to={"/about"}>
          <div className={"header-item"}>about</div>
        </NavLink>
      </div>
    </>
  )
}

export default Header