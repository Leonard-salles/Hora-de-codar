
import styles from "../pages/css/navbar.module.css"

import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    // 2 links com react router

   <nav className={styles.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
   </nav>
  )
}

export default Navbar