import React, { useState } from "react";
import Styles from "../Assets/css/navbar.module.css";
import logo from "../Assets/Images/tesla logo.png";
import data from "../Assets/db.json";
import { FaRegQuestionCircle, FaGlobe, FaRegUserCircle } from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";
const Navbar = () => {
  const navlinks = data.navbar.navlinks;
  console.log(navlinks);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header className="px-3 px-lg-4">
      <div className={`${Styles.navBrandLogo}`}>
        <img src={logo} alt="" className="img-fluid my-auto" />
      </div>

      <nav className={`${Styles.navLinkSection} d-none d-lg-flex`}>
        {navlinks.map((navlink) => (
          <p className={Styles.navLink} key={navlink.model}>
            {navlink.model}
          </p>
        ))}
      </nav>

      <div className={`${Styles.navIconsSection} d-none d-lg-flex`}>
        <FaRegQuestionCircle />
        <FaGlobe />
        <FaRegUserCircle />
      </div>

      <button className={`${Styles.menuButton} d-lg-none`} onClick={handleShow}>
        Menu
      </button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-tesla-an-american-automotive-and-energy-company-the-company-specializes-in-electric-car-manufacturing-logo-color-tal-revivo.png" alt="" /> Models</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {navlinks.map((navlink) => (
            <div className={Styles.OffcanvasNavlinkSection}>
              <img src={navlink.url} alt="" className="img-fluid" />
              <div>
              <p className={Styles.navLink} key={navlink.model}>
                {navlink.model}
              </p>
               <p className={Styles.speed}>Top Speed : {navlink.speed}</p>
              </div>
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Navbar;