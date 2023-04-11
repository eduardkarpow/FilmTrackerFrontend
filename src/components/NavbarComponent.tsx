import React, { useState } from 'react'
import styles from './cssModules/Navbar.module.css'
import {Link} from "react-router-dom";



export default function NavbarComponent() {
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <nav className={styles.navbar}>
        <div className={active ? styles.menu + " " + styles.active : styles.menu } onClick={() => setActive(!active)}>
            <div className={styles.menu_base}>
                <div className={styles.menu_burger }><span></span><span></span><span></span></div>
                <h4 className={styles.menu_text}>Menu</h4>
            </div>
            
            <div className={styles.menu_modal}>
                <Link to="/watchList" className={styles.menu_modal_link}>films</Link>
                <Link to="/watchList" className={styles.menu_modal_link}>series</Link>
            </div>
        </div>
        <div className={styles.search}>
            <input type="text" placeholder='Search film' value={search} onChange = {e => setSearch(e.target.value)}/>
        </div>
        <div className={styles.watchList}>
            <h4 className={styles.menu_text}>WatchList</h4>
        </div>
        <div className={styles.signIn}>
            <h4 className={styles.menu_text}>Sign In</h4>
        </div>
    </nav>
  )
}
