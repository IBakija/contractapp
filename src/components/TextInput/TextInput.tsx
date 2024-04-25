import style from './TextInput.module.scss';

const TextInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
    props
) => {
    const { ...rest } = props;

    return <input className={style.input} {...rest} />;
};

export default TextInput;
