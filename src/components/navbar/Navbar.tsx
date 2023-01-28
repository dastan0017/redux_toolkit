import { NavLink } from "react-router-dom";
import styles from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li className={styles.list_item}>
                    <NavLink className={({ isActive }) => isActive ? styles.active_link : ""} to="/counter">Counter app</NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink className={({ isActive }) => isActive ? styles.active_link : ""} to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}