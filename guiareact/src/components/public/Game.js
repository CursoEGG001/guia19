/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

import { useState } from 'react';

function Square( { value, onSquareClick }) {
    return (
            <div className="col m-2 justify-content-center">
                <button className="square focus-ring p-5 border rounded-2" onClick={onSquareClick}>
                    {value}
                </button>
            </div>
            );
}

function Board( { xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Ganador: ' + winner;
    } else {
        status = 'Siguiente jugador: ' + (xIsNext ? 'X' : 'O');
    }

    return (
            <>
            <div className="card">
                <div className="fs-3">
                    <div  className="status card-title">{status}</div>
                </div>
                <div className="container card-body text-centered mb-4">
                    <div  className="row justify-content-center board-row">
                        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                    </div>
                    <div className="row justify-content-center board-row">
                        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                    </div>
                    <div className="row justify-content-center board-row">
                        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                    </div>
                </div>
            </div>
            </>
            );
}

export function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        let count='';
        if (move > 0) {
            description = 'Ir hacia la jugada ';
            count = move;
        } else {
            description = 'Ir al inicio del juego';
        }
        return (
                <li className="list-group-item" key={move}>
                    <button className="btn btn-secondary" onClick={() => jumpTo(move)}>{description}<span className="badge bg-warning rounded-pill">{count}</span></button>
                </li>
                );
    });

    return (
            <div className="game">
                <div className="container">
                    <div className="row">
                        <div className="game-board col">
                            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                        </div>
                        <div  className="game-info col">
                            <ol className="list-group list-group-numbered">{moves}</ol>
                        </div>
                    </div>
                </div>
            </div>
            );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}