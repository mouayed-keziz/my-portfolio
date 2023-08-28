import React, { ReactNode } from 'react';





const gapSizeMap: { [key in Gap]: number } = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
};

type Justify = 'start' | 'end' | 'center';
type Align = 'start' | 'end' | 'center';
type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type Wrap = 'wrap' | 'nowrap' | 'wrap-reverse';
type Gap = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface FlexProps {
    justify?: Justify;
    align?: Align;
    direction?: Direction;
    wrap?: Wrap;
    gap?: Gap;
    children: ReactNode;
    className?: string;
}

const Flex: React.FC<FlexProps> = ({
    justify = 'start',
    align = 'start',
    direction = 'row',
    wrap = 'nowrap',
    gap,
    className: classname,
    children,
}) => {



    const flexContainerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: justify,
        alignItems: align,
        flexDirection: direction,
        flexWrap: wrap,
    };

    if (gap) {
        const gapSize = typeof gap === 'number' ? gap : gapSizeMap[gap];
        const gapStyle: React.CSSProperties = {
            gap: `${gapSize}px`,
        };
        return <div className={classname} style={{ ...gapStyle, ...flexContainerStyle }}>{children}</div>;
    }

    return <div className={classname} style={flexContainerStyle}>{children}</div>;
}

export default Flex;