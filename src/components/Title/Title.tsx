import React from 'react';

interface Props {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
const Title: React.FC<Props & React.HTMLAttributes<HTMLOrSVGElement>> = (
    props
) => {
    const { children, tag: Wrapper = 'h1', ...rest } = props;
    return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Title;
