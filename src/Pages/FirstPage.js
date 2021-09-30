import React from "react";
import {FirstPageContainer} from "../styles/ProductsElements";
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

export const FirstPage =() =>{
    return(
        <FirstPageContainer>
            <div className="centered title col-md-5">
                <h3>Sell Your House Instantly</h3>
                <p className="col-md-10">Simply tell us about your house and get
                    guarantee cash offer within 24 hours</p>
            </div>

            <InputGroup className="input-group class">
                {/*<span className="title ">daada</span>*/}
                <input type="text" className="form-control" placeholder="Submit your house details"
                       aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button className="btn btn-warning " id="basic-addon2">Get you offer</button>
            </InputGroup>
        </FirstPageContainer>
    )
}

