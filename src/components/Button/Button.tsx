import { ButtonHTMLAttributes } from 'react';
import style from './Button.module.scss';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const { children, ...rest } = props;
    return (
        <button className={style.button} {...rest}>
            {children}
        </button>
    );
};

export default Button;
