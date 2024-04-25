interface Props {
    onSelectChange: Function;
    // items: Option;
}

const FilterByActivity: React.FC<
    Props & React.SelectHTMLAttributes<HTMLSelectElement>
> = (props) => {
    const { onSelectChange, children, ...rest } = props;
    const handleChange = (text: string) => {
        onSelectChange(text);
    };

    return (
        <select onChange={(e) => handleChange(e.target.value)} {...rest}>
            {children}
        </select>
    );
};

export default FilterByActivity;
