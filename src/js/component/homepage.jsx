//  import { name } from "file-loader";
//  import React, { useState } from "react";




//  create your first component
//  const Homepage = () => {
//       const [playerName1, setPlayerName1] = useState("")
//       const [playerName2, setPlayerName2] = useState("")
//       const player1 = (name) => {
//           setPlayerName1(name)
//       }
//      return (
//          <>
//             <p>hello world!</p>
//          </>
//      )

/* <div>
            <div className="row fs-2 text">
                <div className="col">
                    <h2>Tic Tac Toe in React!</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
                    </div>
                </div>" />
            </div>
        </div> */





import React, { useState } from "react";


//create your first component
const ChoosePlayer = (props) => {

    const [playerNameX, setPlayerNameX] = useState("")
    const [playerName0, setPlayerName0] = useState("")
    const player1 = (name) => { }
    return (
        <div>
            <div className="row text-center">
                <div className="col">
                    <h1>Tic Tac Toe in React!</h1>
                </div>
            </div>
            <div className="row fs-2 text text-center">
                <div className="col">
                    <h2>Enter player names</h2>
                </div>
            </div>

            <div className="row m-4">
                <div className="col">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><i className="fas fa-times timesintro"></i></span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => { setPlayerNameX(e.target.value) }} />
                    </div>
                </div>
                <div className="col">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><i className="far fa-circle circleintro"></i></span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => { setPlayerName0(e.target.value) }} />
                    </div>
                </div>
                <div className="row fs-2 text text-center d-flex justify-content-center">
                    <div className="col">
                        <button type="button" className="btn btn-outline-light m-2"><i className="fas fa-times timesintro"></i></button>
                        <button type="button" className="btn btn-outline-light m-2"><i className="far fa-circle circleintro"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoosePlayer;
