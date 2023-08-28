import React, { ReactNode } from 'react';

interface ContainerProps {
    size?: number | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    children: ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ size = '2xl', children, className }) => {
    let maxWidth: string | undefined;

    if (typeof size === 'number') {
        maxWidth = `${size}px`;
    } else if (typeof size === 'string') {
        switch (size) {
            case 'xs':
                maxWidth = '320px';
                break;
            case 'sm':
                maxWidth = '640px';
                break;
            case 'md':
                maxWidth = '768px';
                break;
            case 'lg':
                maxWidth = '1024px';
                break;
            case 'xl':
                maxWidth = '1280px';
                break;
            case '2xl':
                maxWidth = '1536px';
                break;
            default:
                maxWidth = '1536px'; // Default to "xl" if an invalid size is provided
                break;
        }
    }

    const containerStyle = {
        maxWidth: maxWidth,
        margin: '0 auto',
    };

    return (
        <div style={containerStyle} className={className}>
            {children}
        </div>
    );
};

export default Container;
