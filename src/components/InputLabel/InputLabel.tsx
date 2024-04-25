import React from 'react';

const InputLabel: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = (
    props
) => {
    const { children, ...rest } = props;
    return <label {...rest}>{children}</label>;
};

export default InputLabel;
