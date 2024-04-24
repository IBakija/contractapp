import Contract from '../Contract/Contract';
import style from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <a href="/">Home</a>
            </nav>
        </header>
    );
};

export default Header;
