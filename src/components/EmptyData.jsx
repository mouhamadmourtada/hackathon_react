import React from 'react';

const EmptyData = ({children, className}) => {
    return (
        <div className={`flex justify-center items-center min-h-20 ${className}`}>
            <p>{children}</p>
        </div>
    );
}

export default EmptyData;
