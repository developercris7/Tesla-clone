import React, { useState } from "react";
import Styles from "../Assets/css/navbar.module.css";
import logo from "../Assets/Images/tesla logo.png";
import data from "../Assets/db.json";
import { FaRegQuestionCircle, FaGlobe, FaRegUserCircle } from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const navlinks = data.navbar.navlinks;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <motion.header
      className={`px-3 px-lg-4 ${Styles.navbar}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`${Styles.navBrandLogo}`}>
        <img
          src={logo}
          alt=""
          className="img-fluid my-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        />
      </div>

      <nav className={`${Styles.navLinkSection} d-none d-lg-flex`}>
        {navlinks.map((navlink, index) => (
          <ScrollLink
            className="nav-link"
            href={navlink.model}
            key={index}
            to={navlink.href}
            smooth={true}
            offset={50}
            duration={100}
          >
            <p
              className={Styles.navLink}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index + 0.5 }}
            >
              {navlink.model}
            </p>
          </ScrollLink>
        ))}
      </nav>

      <div className={`${Styles.navIconsSection} d-none d-lg-flex`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <FaRegQuestionCircle />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <FaGlobe />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <FaRegUserCircle />
        </motion.div>
      </div>

      <button
        className={`${Styles.menuButton} d-lg-none`}
        onClick={handleShow}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1}}
      >
        Menu
      </button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-tesla-an-american-automotive-and-energy-company-the-company-specializes-in-electric-car-manufacturing-logo-color-tal-revivo.png"
              alt=""
            />
            Models
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {navlinks.map((navlink, index) => (
            <Link to={`/${navlink.href}`} className="nav-link" key={index}>
              <motion.div
                className={Styles.OffcanvasNavlinkSection}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <img
                  src={navlink.url}
                  alt=""
                  className="img-fluid"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                />
                <div>
                  <p className={Styles.navLink}>{navlink.model}</p>
                  <p className={Styles.speed}>Top Speed : {navlink.speed}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </motion.header>
  );
};

export default Navbar;
