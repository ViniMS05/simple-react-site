import styles from "./style.module.css";

export const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
