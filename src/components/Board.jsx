import React, { useState } from 'react';
import Cell from './Cell';

const Board = () => {
    const [highlightedCells, setHighlightedCells] = useState([]);

    const handleCellClick = (x, y) => {
        const newHighlightedCells = [];

        // Possible moves for a knight
        const knightMoves = [
            [1, 2],
            [2, 1],
            [-1, 2],
            [-2, 1],
            [1, -2],
            [2, -1],
            [-1, -2],
            [-2, -1],
        ];

        // Check each possible move from the clicked cell
        knightMoves.forEach(([dx, dy]) => {
            const newX = x + dx;
            const newY = y + dy;

            // Check if the move is on the board
            if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
                newHighlightedCells.push([newX, newY]);
            }
        });

        setHighlightedCells(newHighlightedCells);
    };

    const isDark = (x, y) => {
        // Dark squares have even x and odd y or odd x and even y
        return (x % 2 === 0 && y % 2 !== 0) || (x % 2 !== 0 && y % 2 === 0);
    };

    const renderCell = (x, y) => {
        const isHighlighted = highlightedCells.some(
            ([highlightedX, highlightedY]) => highlightedX === x && highlightedY === y
        );

        return (
            <Cell
                key={`${x}${y}`}
                x={x}
                y={y}
                isDark={isDark(x, y)}
                isHighlighted={isHighlighted}
                onClick={() => handleCellClick(x, y)}
            />
        );
    };

    const renderRow = (y) => {
        const cells = [];

        for (let x = 0; x < 8; x++) {
            cells.push(renderCell(x, y));
        }

        return (
            <div key={y} className="flex">
                {cells}
            </div>
        );
    };

    const renderRows = () => {
        const rows = [];

        for (let y = 7; y >= 0; y--) {
            rows.push(renderRow(y));
        }

        return rows;
    };

    return <div className="w-96">{renderRows()}</div>;
};

export default Board;