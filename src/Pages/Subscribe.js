import React from "react";
import {SubscribeContainer, SubscribeWallpaper} from "../styles/ProductsElements";
import styled from "styled-components";


const InputGroup = styled.div`
  position: relative;
  top: 20%!important;
  left: 50%!important;
  transform: translate(-50%, -50%)!important;
  max-width: 500px!important;
  border-style: solid!important;
  border-color: darkred!important;
  border-width: 7px!important;

  @media screen and (max-width: 500px) {
    max-width: 400px!important;
  }
    
`

export const Subscribe = () =>{
    return(
        <SubscribeContainer >
            <SubscribeWallpaper className="toTheRight"/>
            <div className="centered-right title col-md-5">
                <h3>Subscribe</h3>
                <p style={{marginLeft:"-40px"}} className=''>Sign up for real estate news.</p>
            </div>

            <InputGroup className="input-group">
                <i className="fas fa-envelope-open-text" style={{marginTop:"10px"}}></i>
                <input type="text" className="form-control fas fontAwesome" placeholder="Enter your email address"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                />
                <button className="btn btn-warning " id="basic-addon2">Get you offer</button>
            </InputGroup>
        </SubscribeContainer>
    )
}