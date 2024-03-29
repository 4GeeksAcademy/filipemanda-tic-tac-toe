import { element } from "prop-types";
import React, { useState } from "react";
import ChoosePlayer from "./homepage";



//create your first component
const Board = () => {


    const [turn, setTurn] = useState("")
    const [squareValues, setSquareValues] = useState(["", "", "", "", "", "", "", "", ""]);
    const [winner, setWinner] = useState("");
    const [playerName, setPlayerName] = useState("")

    const checkWinner = (gameArray) => {
        let possibleCombinations = [
            [1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 0, 0]
        ];

        possibleCombinations.forEach(winningArray => {
            let counter = 0;
            for (const [index, element] of winningArray.entries()) {
                if (element == 1) {
                    if (gameArray[index] == turn) {
                        counter++;
                        if (counter > 2) {
                            handleWinner(turn)
                        }
                    }
                }
            };
        })

    }

    const resetButton = () => {
        setTurn("X")
        setSquareValues(["", "", "", "", "", "", "", "", ""]);
        setWinner("");
    }
    const switchTurn = (num) => {
        if (squareValues[num] !== "") return;
        let arr = [...squareValues]
        if (turn === "X") {
            arr[num] = "X";
            setTurn("0")
        } else if (turn === "0") {
            arr[num] = "0";
            setTurn("X")
        }
        setSquareValues(arr);
        return arr;
    }


    const handleClick = (num) => {

        checkWinner(switchTurn(num));

    }
    const handleWinner = (winner) => {
        setWinner(winner)
    }


    return (
        <>

            <div className="row fs-2 text text-center d-flex justify-content-center">
                <div className="col">
                    <h1>Pick Your Player</h1>
                </div>
            </div>

            <div className="row fs-2 text text-center d-flex justify-content-center">
                <div className="col">
                    <button type="button" className="btn btn-outline-light m-2" onClick={(e) => setTurn("X")}><i className="fas fa-times timesintro"></i></button>
                    <button type="button" className="btn btn-outline-light m-2" onClick={(e) => setTurn("0")}><i className="far fa-circle circleintro"></i></button>
                </div>
            </div>


            <div className="container-fluid ">
                <div className="anouncement text-danger">
                    {
                        winner ? <h1>Game over! The Winner is: {winner == "X" ? "X" : "0"}</h1> : null
                    }

                </div>
                <div className="row mb-5">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <h1>Tic tac toe in react.js</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="col d-flex justify-content-center m-4">
                                <h3>its players turn</h3>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row m-5">
                    <div className="row"  >
                        <div className="col d-flex justify-content-center square border-top-0" onClick={(e) => handleClick("0")} ><i className={`${squareValues[0] === 'X' ? 'fas fa-times' : squareValues[0] === '0' ? 'far fa-circle' : ''}`}></i></div>
                        <div className="col d-flex justify-content-center square border-top-0" onClick={(e) => handleClick("1")}><i className={`${squareValues[1] === 'X' ? 'fas fa-times' : squareValues[1] === '0' ? 'far fa-circle' : ''}`}></i></div>
                        <div className="col d-flex justify-content-center square border-top-0 border-end-0" onClick={(e) => handleClick("2")}><i className={`${squareValues[2] === 'X' ? 'fas fa-times' : squareValues[2] === '0' ? 'far fa-circle' : ''}`}></i></div>

                    </div>
                    <div className="row"  >
                        <div className="col d-flex justify-content-center square" onClick={(e) => handleClick("3")} ><i className={`${squareValues[3] === 'X' ? 'fas fa-times' : squareValues[3] === '0' ? 'far fa-circle' : ''}`}></i></div>
                        <div className="col d-flex justify-content-center square" onClick={(e) => handleClick("4")}><i className={`${squareValues[4] === 'X' ? 'fas fa-times' : squareValues[4] === '0' ? 'far fa-circle' : ''}`}></i></div>
                        <div className="col d-flex justify-content-center square border-end-0" onClick={(e) => handleClick("5")}><i className={`${squareValues[5] === 'X' ? 'fas fa-times' : squareValues[5] === '0' ? 'far fa-circle' : ''}`}></i></div>

                    </div>
                    <div className="row"  >
                        <div className="col d-flex justify-content-center square" onClick={(e) => handleClick("6")} ><i className={`${squareValues[6] === 'X' ? 'fas fa-times' : squareValues[6] === '0' ? 'far fa-circle' : ''}`}></i></div>
                        <div className="col d-flex justify-content-center square" onClick={(e) => handleClick("7")}><i className={`${squareValues[7] === 'X' ? 'fas fa-times' : squareValues[7] === '0' ? 'far fa-circle' : ''}`}></i></div>
                        <div className="col d-flex justify-content-center square border-end-0" onClick={(e) => handleClick("8")}><i className={`${squareValues[8] === 'X' ? 'fas fa-times' : squareValues[8] === '0' ? 'far fa-circle' : ''}`}></i></div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center mt-2">
                            <button onClick={() => { resetButton() }}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Board;

