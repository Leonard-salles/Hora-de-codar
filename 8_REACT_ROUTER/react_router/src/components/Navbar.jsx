
import styles from "../pages/css/navbar.module.css"

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    // 2 links com react router

   <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
   </nav>
  )
}

export default Navbar