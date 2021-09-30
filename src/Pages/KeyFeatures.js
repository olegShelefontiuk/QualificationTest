import React from "react";
import '../styles/App.css'
import logo from "../styles/Pictures/orangeHome.jpg";
import logo1 from "../styles/Pictures/orangeHome1.jpg";
import logo2 from "../styles/Pictures/HouseDolar.png";
import {KeyFeaturesTitle, KeyFeaturesContainer} from "../styles/ProductsElements";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 60px;
    @media screen and (max-width: 800px) {
    margin-left: 0px;
  }
`
const Cards = styled.div`
  border-style: initial;
  margin-right: 8px;
  width: 18rem;
  box-shadow: 1px 1px lightblue, -.5em 0 .4em lightblue;
  @media screen and (max-width: 800px) {
    margin-right: 5px;
    position: relative;
    margin-bottom: 5px;
    width: 13rem;
    font-size: 0.3rem;
  }
  
`

const Img1 = styled.img`
  width:130px;
  height:80px;
  margin-left:40px;
  border-radius:50%;
  box-shadow: 1px 1px lightblue, -.0em 0 .4em lightblue;

  @media screen and (max-width: 800px) {
    width:90px;
    height:60px;
    margin-left:40px;
    
  }

`

export const KeyFeatures = () =>{
    return(

        <KeyFeaturesContainer>
            <KeyFeaturesTitle > Key Features</KeyFeaturesTitle>
            <hr  />
        <Container className="row container" >
        <Cards>
            <div className="card-body">
                <div className="container-fluid logo image ">
                    <Img1 src={logo1}
                         className="img-fluid" alt="Avatar" />
                </div>
                <h5 className="card-title text-center p-2" >No Viewing or Showing to Strangers</h5>
                <p className="card-text">Nervous about your property adventure? Don't be. Whether you're getting
                ready to by or sell, in the middle of it, or just looking for some answers, our top-notch skills
                ensure you get the best experience possible. It's what we love to do. </p>
            </div>
        </Cards>
            <Cards>
                <div className="card-body">
                    <div className="container-fluid logo image ">
                        <Img1 src={logo2}
                             className="img-fluid" alt="Avatar" />
                    </div>
                    <h5 className="card-title text-center p-2" >Save Thousands of Dollars in Agent Fees</h5>
                    <p className="card-text">Large or small, condo or mansion, we can find it and get it
                    for you at the price that's right. TICs? Fixed-uppers? Luxury? We can help with all of it.
                    We always have a current list of available properties for you to check out.</p>

                </div>
            </Cards>
            <Cards>
                <div className="card-body">

                    <div className="container-fluid logo image ">
                        <Img1 src={logo}
                             className="img-fluid" alt="Avatar" />
                    </div>

                    <h5 className="card-title text-center p-2" >No Viewing or Showing to Strangers</h5>
                    <p className="card-text">Nervous about your property adventure? Don't be. Whether you're getting
                        ready to by or sell, in the middle of it, or just looking for some answers, our top-notch skills
                        ensure you get the best experience possible. It's what we love to do. </p>

                </div>
            </Cards>
        </Container>

        </KeyFeaturesContainer>
    )
}