import React, { ReactNode } from 'react';

interface CenterProps {
    inline?: boolean;
    className?: string;
    children: ReactNode;
}

export const Center: React.FC<CenterProps> = ({ children, inline, className }) => {
    const flexType = inline ? 'inline-flex' : 'flex';

    const centerClasses = `${flexType} justify-center items-center h-full w-full ${className}`;

    return (
        <div className={centerClasses}>
            {children}
        </div>
    );
};

// Export the centering classes a function that takes inline as props and returns a string

export const centeringClasses = (inline?: boolean): string => {
    const flexType = inline ? 'inline-flex' : 'flex';

    return `${flexType} justify-center items-center h-full w-full`;
}

