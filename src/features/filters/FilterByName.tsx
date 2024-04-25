interface Props {
    onInputChange: Function;
}

const FilterByName: React.FC<
    Props & React.InputHTMLAttributes<HTMLInputElement>
> = (props) => {
    const { onInputChange, ...rest } = props;
    const handleChange = (text: string) => {
        onInputChange(text);
    };

    return <input {...rest} onChange={(e) => handleChange(e.target.value)} />;
};

export default FilterByName;
