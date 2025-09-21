import { useState, type FC } from "react";
import "./Navbar.css";

interface Props {}

const Navbar: FC<Props> = () => {
  const [sideBarShow, setSideBarShow] = useState<boolean>(false);
  const links = ["Home", "About", "Projects", "Contact"];
  return (
    <nav className={"navbar-container"}>
      {sideBarShow == false && (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              className="menu-icon"
              href="javascrpt:void(0)"
              onClick={() => setSideBarShow(true)}
            >
              <span className="menu-icon-bar"></span>
              <span className="menu-icon-bar"></span>
              <span className="menu-icon-bar"></span>
            </a>
            <h1
              style={{
                letterSpacing: "2px",
                fontWeight: "500",
              }}
            >
              PORTFOLIO
            </h1>
          </div>
          <div className="navbar-links">
            {links.map(link => (
              <span className="">
                <a className="letter-space-1 translate-up-5" href={`#${link}`}>
                  {link}
                </a>
              </span>
            ))}
          </div>
        </>
      )}
      {sideBarShow == true && (
        <section className="side-menu">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "end",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <a
              className="menu-icon"
              href="javascrpt:void(0)"
              onClick={() => setSideBarShow(false)}
            >
              <span
                className="menu-icon-bar"
                style={{ rotate: "45deg", translate: "0% 100%" }}
              ></span>
              <span
                className="menu-icon-bar"
                style={{ rotate: "-45deg", translate: "0% -150%" }}
              ></span>
            </a>
          </div>
          <div className="side-menu-links-list">
            {links.map(link => (
              <span style={{ width: "100%" }}>
                <a
                  className="letter-space-1 side-menu-link color-4"
                  style={{ textDecoration: "none" }}
                  href={`#${link}`}
                >
                  {link}
                </a>
              </span>
            ))}
          </div>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
