import React from "react";
import '../styles/App.css'
import logo from "../styles/Pictures/orangeHome.jpg";
import logo1 from "../styles/Pictures/orangeHome1.jpg";
import logo2 from "../styles/Pictures/HouseDolar.png";
import {KeyFeaturesTitle, KeyFeaturesContainer} from "../styles/ProductsElements";
export const KeyFeatures = () =>{
    return(

        <KeyFeaturesContainer>
            <KeyFeaturesTitle > Key Features</KeyFeaturesTitle>
            <hr  />
        <div className="row container" style={{marginLeft:"60px"}}>
        <div className="cards" style={{width: "18rem"}}>
            <div className="card-body">
                <div className="container-fluid logo image ">
                    <img src={logo1} style={{
                        width:"130px",
                        height:"80px",
                        marginLeft:"40px",
                        borderRadius:"50%",
                        boxShadow: "1px 1px lightblue, -.0em 0 .4em lightblue"
                    }}
                         className="img-fluid" alt="Avatar" />
                </div>
                <h5 className="card-title text-center p-2" >No Viewing or Showing to Strangers</h5>
                <p className="card-text">Nervous about your property adventure? Don't be. Whether you're getting
                ready to by or sell, in the middle of it, or just looking for some answers, our top-notch skills
                ensure you get the best experience possible. It's what we love to do. </p>
            </div>
        </div>
            <div className="cards" style={{width: "18rem"}}>
                <div className="card-body">
                    <div className="container-fluid logo image ">
                        <img src={logo2} style={{
                            width:"130px",
                            height:"80px",
                            marginLeft:"40px",
                            borderRadius:"50%",
                            boxShadow: "1px 1px lightblue, -.0em 0 .4em lightblue"
                        }}
                             className="img-fluid" alt="Avatar" />
                    </div>
                    <h5 className="card-title text-center p-2" >Save Thousands of Dollars in Agent Fees</h5>
                    <p className="card-text">Large or small, condo or mansion, we can find it and get it
                    for you at the price that's right. TICs? Fixed-uppers? Luxury? We can help with all of it.
                    We always have a current list of available properties for you to check out.</p>

                </div>
            </div>
            <div className="cards" style={{width: "18rem"}}>
                <div className="card-body">

                    <div className="container-fluid logo image ">
                        <img src={logo} style={{
                            width:"130px",
                            height:"90px",
                            marginLeft:"40px",
                            borderRadius:"50%",
                            boxShadow: "1px 1px lightblue, -.0em 0 .4em lightblue"
                        }}
                             className="img-fluid" alt="Avatar" />
                    </div>

                    <h5 className="card-title text-center p-2" >No Viewing or Showing to Strangers</h5>
                    <p className="card-text">Nervous about your property adventure? Don't be. Whether you're getting
                        ready to by or sell, in the middle of it, or just looking for some answers, our top-notch skills
                        ensure you get the best experience possible. It's what we love to do. </p>

                </div>
            </div>
        </div>

        </KeyFeaturesContainer>
    )
}