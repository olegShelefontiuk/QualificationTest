import React from "react";
import {SubscribeContainer, SubscribeWallpaper} from "../styles/ProductsElements";

export const Subscribe = () =>{
    return(
        <SubscribeContainer >
            <SubscribeWallpaper className="toTheRight"/>
            <div className="centered-right title col-md-5">
                <h3>Subscribe</h3>
                <p style={{marginLeft:"-40px"}} className=''>Sign up for real estate news.</p>
            </div>

            <div className="input-group class">
                <i className="fas fa-envelope-open-text" style={{marginTop:"10px"}}></i>
                <input type="text" className="form-control fas fontAwesome" placeholder="Enter your email address"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                />
                <button className="btn btn-warning " id="basic-addon2">Get you offer</button>
            </div>
        </SubscribeContainer>
    )
}