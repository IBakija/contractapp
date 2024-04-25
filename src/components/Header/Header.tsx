import { Link } from 'react-router-dom';
import style from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <Link to="/">Početna</Link>
            </nav>
        </header>
    );
};

export default Header;
