import React from "react";
import {FirstPageContainer} from "../styles/ProductsElements";

export const FirstPage =() =>{
    return(
        <FirstPageContainer>
            <div className="centered title col-md-5">
                <h3>Sell Your House Instantly</h3>
                <p className="col-md-10">Simply tell us about your house and get
                    guarantee cash offer within 24 hours</p>
            </div>

            <div className="input-group class">
                {/*<span className="title ">daada</span>*/}
                <input type="text" className="form-control" placeholder="Submit your house details"
                       aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button className="btn btn-warning " id="basic-addon2">Get you offer</button>
            </div>
        </FirstPageContainer>
    )
}

