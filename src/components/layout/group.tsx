import React, { ReactNode } from 'react';

type Position = 'left' | 'right' | 'center' | 'apart';
type Spacing = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Align = 'start' | 'center' | 'end';

interface GroupProps {
    position?: Position;
    spacing?: Spacing;
    align?: Align;
    noWrap?: boolean;
    grow?: boolean;
    children: ReactNode;
}

const Group: React.FC<GroupProps> = ({
    position = 'left',
    spacing = 'md',
    align = 'start',
    noWrap = false,
    grow = false,
    children,
}) => {
    const spacingClass = typeof spacing === 'number' ? `space-x-${spacing}` : `space-${spacing}`;
    const flexContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: align,
        flexWrap: noWrap ? 'nowrap' : 'wrap',
        justifyContent: position === 'apart' ? 'space-between' : position,
    };

    const flexItemStyle: React.CSSProperties = {
        flexGrow: grow ? 1 : 0,
    };

    const flexItems = React.Children.map(children, (child, index) => (
        <div className={spacingClass} key={index} style={flexItemStyle}>
            {child}
        </div>
    ));

    return <div style={flexContainerStyle}>{flexItems}</div>;
};

export default Group;
