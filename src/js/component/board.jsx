import React, {useState} from "react";



//create your first component
const Board = () => {
    
  
    const[turn, setTurn] = useState("X")
    const [squareValues, setSquareValues] = useState(["","","","","","","","",""]);

    const handleClick=(num)=>{
        if (squareValues[num] !== "") return;
        let arr = [...squareValues]
        if (turn === "X"){
            arr[num]="X";
            setTurn("0")
        }else if (turn === "0"){
            arr[num]="0";
            setTurn("X")
        }
        setSquareValues(arr)
        console.log(squareValues);
    }
    
    return (
        <>
            <div className="container-fluid ">
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
                    
                    
                    
                    <div className="row"  >
                        <div className="col d-flex justify-content-center border-bottom border-end border-5" onClick={(e) => handleClick("0")} ><i className={`${squareValues[0] === 'X'?'fas fa-times':squareValues[0] ==='0'?'far fa-circle':''}`}></i>.</div>
                        <div className="col d-flex justify-content-center border-bottom border-end border-5" onClick={(e) => handleClick("1")}><i className={`${squareValues[1] === 'X'?'fas fa-times':squareValues[1] ==='0'?'far fa-circle':''}`}></i>.</div>
                        <div className="col d-flex justify-content-center border-bottom border-5" onClick={(e) => handleClick("2")}><i className={`${squareValues[2] === 'X'?'fas fa-times':squareValues[2] ==='0'?'far fa-circle':''}`}></i>.</div>

                    </div>
                    <div className="row"  >
                        <div className="col d-flex justify-content-center border-bottom border-end border-5" onClick={(e) => handleClick("3")} ><i className={`${squareValues[3] === 'X'?'fas fa-times':squareValues[3] ==='0'?'far fa-circle':''}`}></i>.</div>
                        <div className="col d-flex justify-content-center border-bottom border-end border-5" onClick={(e) => handleClick("4")}><i className={`${squareValues[4] === 'X'?'fas fa-times':squareValues[4] ==='0'?'far fa-circle':''}`}></i>.</div>
                        <div className="col d-flex justify-content-center border-bottom border-5" onClick={(e) => handleClick("5")}><i className={`${squareValues[5] === 'X'?'fas fa-times':squareValues[5] ==='0'?'far fa-circle':''}`}></i>.</div>

                    </div>
                    <div className="row"  >
                        <div className="col d-flex justify-content-center border-bottom border-end border-5" onClick={(e) => handleClick("6")} ><i className={`${squareValues[6] === 'X'?'fas fa-times':squareValues[6] ==='0'?'far fa-circle':''}`}></i>.</div>
                        <div className="col d-flex justify-content-center border-bottom border-end border-5" onClick={(e) => handleClick("7")}><i className={`${squareValues[7] === 'X'?'fas fa-times':squareValues[7] ==='0'?'far fa-circle':''}`}></i>.</div>
                        <div className="col d-flex justify-content-center border-bottom border-5" onClick={(e) => handleClick("8")}><i className={`${squareValues[8] === 'X'?'fas fa-times':squareValues[8] ==='0'?'far fa-circle':''}`}></i>.</div>
                    </div>
                </div>

            </>
            );
};

            export default Board;

