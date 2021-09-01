import React from "react";
import '../styles/App.css'
import {SellHouseContainer, SellHouseWallpaper} from "../styles/ProductsElements";

export const SellHouse = () =>{
    return(
        <SellHouseContainer>
            <SellHouseWallpaper />
        <div className="row container margin" style={{marginLeft:"60px",marginTop:"10px", position:"absolute"}}>

            <form  className="small-form">

                <div className="mb-4 sell-house">
                    <h5 className="card-title text-center p-2">Sell Your House Instantly</h5>
                    <p className="card-text text-center p-2">Simply tell us about your house and get a
                    guaranteed cash offer within 24 hours</p>
                    <input type="password" className="form-control sell-house" id="exampleInputPassword1" placeholder="Submit your house details"/>
                </div>
                <button type="submit" className="btn btn-warning sell-house">Get you offer</button>
            </form>
            <form className="card-form">
                <div className="col-md4 sell-house">
                    <h5 className="margin">Get in touch</h5>
                    <input type="text" className="form-control sell-house" name="Name " id="exampleInputPassword2" placeholder="Your name"/>
                    <input type="text" className="form-control sell-house" name="Email" id="exampleInputPassword3" placeholder="Your email address"/>
                    <input type="text" className="form-control sell-house" name="PhoneNumber" id="exampleInputPassword4" placeholder="Your phone number"/>
                    <input type="text" className="form-control sell-house" name="Subject" id="exampleInputPassword5" placeholder="Subject"/>
                    <textarea className="form-control sell-house"
                           rows="8"
                           cols="50"
                           name="message"
                              id="exampleInput6"
                              placeholder="Leave a message"/>



                </div>
                <button type="submit" className="btn btn-warning sell-house-submit">Submit Now</button>
            </form>
        </div>
        </SellHouseContainer>
    )
}