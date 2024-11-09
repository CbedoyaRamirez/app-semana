import style from '../css/Header.module.css'
import Login from './Login';

const Header = (image) => {

  return (
    <header className={style.header}>
      <nav className={style.navMenu}>
        <a href="#/app-semana/login" className={style.navLinkLogo}><Login image={image.image} /></a>
        <a href="#/app-semana/posts" className={style.navLink}>Post</a>
        <a href="#/app-semana/listUser" className={style.navLink}>Listado Usuario</a>
      </nav>
    </header>
  );
};

export default Header;
