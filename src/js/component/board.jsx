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
                        <div className="col d-flex justify-content-center border-bottom border-end border-5"><i className="far fa-circle"></i></div>
                        <div className="col d-flex justify-content-center border-bottom border-end border-5"><i className="fas fa-times"></i></div>
                        <div className="col d-flex justify-content-center border-bottom border-5"><i className="fas fa-times"></i></div>

                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center border-bottom border-end border-5"><i className="fas fa-times"></i></div>
                        <div className="col d-flex justify-content-center border-bottom border-end border-5"><i className="far fa-circle"></i></div>
                        <div className="col d-flex justify-content-center border-bottom border-5"><i className="far fa-circle"></i></div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center border-end border-5"><i className="far fa-circle"></i></div>
                        <div className="col d-flex justify-content-center border-end border-5"><i className="far fa-circle"></i></div>
                        <div className="col d-flex justify-content-center border-5"><i className="fas fa-times"></i></div>
                    </div>
                </div>

            </>
            );
};

            export default Board;

