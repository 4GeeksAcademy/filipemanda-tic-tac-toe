import React from "react";



//create your first component
const Board = () => {
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
                        <div className="col d-flex justify-content-center border-bottom border-end border-5">1</div>
                        <div className="col d-flex justify-content-center border-bottom border-end border-5">2</div>
                        <div className="col d-flex justify-content-center border-bottom border-5">3</div>

                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center border-bottom border-end border-5">4</div>
                        <div className="col d-flex justify-content-center border-bottom border-end border-5">5</div>
                        <div className="col d-flex justify-content-center border-bottom border-5">6</div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center  border-end border-5">7</div>
                        <div className="col d-flex justify-content-center  border-end border-5">8</div>
                        <div className="col d-flex justify-content-center   border-5">9</div>
                    </div>
                </div>

            </>
            );
};

            export default Board;

