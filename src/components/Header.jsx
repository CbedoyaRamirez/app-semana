import style from '../css/Header.module.css'
import Login from './Login';

const Header = (image) => {

  return (
    <header className={style.header}>
      <nav className={style.navMenu}>
        <a href="login" className={style.navLink}><Login image={image.image} /></a>
        <a href="#posts" className={style.navLink}>Post</a>
        <a href="#listUser" className={style.navLink}>Listado Usuario</a>
      </nav>
    </header>
  );
};

export default Header;
