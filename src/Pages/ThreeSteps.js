import React from "react";
import '../styles/App.css'
import ReactPlayer from 'react-player'
import {KeyFeaturesTitle, ThreeStepsContainer} from "../styles/ProductsElements";

export const ThreeSteps = () =>{
    return(
        <ThreeStepsContainer>
            <KeyFeaturesTitle > Sell in 3 Easy Steps</KeyFeaturesTitle>
            <hr  />
        <div className="row container" style={{marginLeft:"60px"}}>
            <div className="cards" style={{width: "18rem"}}>
                <div className="card-body1">
                    <h1 className="card-title text-center p-2">01</h1>
                    <h5 className="card-title text-center p-2" >
                        Submit your house details
                    </h5>
                    <p className="card-text text-center p-2">
                        Fill a quick form with details of your house
                    </p>
                </div>
            </div>
            <div className="cards" style={{width: "18rem"}}>
                <div className="card-body1">
                    <h1 className="card-title text-center p-2">02</h1>
                    <h5 className="card-title text-center p-2" >Get all cash offer within 24 hours</h5>
                    <p className="card-text text-center p-2">We review your details and submit you all cash offer
                    based on market price</p>

                </div>
            </div>
            <div className="cards" style={{width: "18rem"}}>
                <div className="card-body1">

                    <h1 className="card-title text-center p-2">03</h1>
                    <h5 className="card-title text-center p-2" >Receive your money</h5>
                    <p className="card-text text-center p-2">You can accept the offer, from offer to close within 3 days </p>

                </div>
            </div>
        </div>
            <div style={{marginTop:"50px"}} className="App">
                <ReactPlayer controls url="https://www.youtube.com/watch?v=7sDY4m8KNLc" />
            </div>
        </ThreeStepsContainer>
    )
}