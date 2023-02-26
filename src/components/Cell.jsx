import React from 'react';
import classNames from 'classnames';

const Cell = ({ x, y, isDark, isHighlighted, onClick }) => {
    const cellClasses = classNames(
        'w-12 h-12 flex items-center justify-center text-lg font-bold',
        {
            'bg-gray-400': isDark,
            'bg-gray-200': !isDark,
            'bg-green-300': isHighlighted,
        }
    );

    return (
        <div className={cellClasses} onClick={onClick}>
            {String.fromCharCode(65 + x)}
            {y + 1}
        </div>
    );
};

export default Cell;