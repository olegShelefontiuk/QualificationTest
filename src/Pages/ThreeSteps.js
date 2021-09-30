import React from "react";
import '../styles/App.css'

import ReactPlayer from 'react-player'
import {KeyFeaturesTitle, ThreeStepsContainer} from "../styles/ProductsElements";
import styled from "styled-components";


const Container = styled.div`
  margin-left: 60px;
  @media{
    @media screen and (max-width: 500px) {
    margin-left: 10px;
    }
  }
`

const Cards = styled.div`
  border-style: initial;
  margin-right: 7px;
  width: 18rem;
  box-shadow: 1px 1px lightblue, -.5em 0 .4em lightblue;
  @media screen and (max-width: 1000px) {
  //  
  //  margin-bottom: 5px;
    width: 10rem;
  //  font-size: 1.3rem;
  }
  
`

const CardThree = styled.div`
  border-style: initial;
  margin-right: 7px;
  width: 18rem;
  box-shadow: 1px 1px lightblue, -.5em 0 .4em lightblue;
  @media screen and (max-width: 1000px) {
    width: 10rem;
  }
  @media screen and (max-width: 700px) {
    
  display: none;
  }
  
`

const CardBody = styled.div`
  
    height: 250px;
    background-color: white;
  
`

const CardTitle = styled.h1`
  font-size: 2.8rem;
  @media screen and (max-width: 1000px) {
    font-size: 1.8rem;
  }
`

const CardSubTitle = styled.h5`
  font-size: 2rem;
  @media screen and (max-width: 1000px) {

    font-size: 1rem;
  }
`

export const ThreeSteps = () =>{
    return(
        <ThreeStepsContainer>
            <KeyFeaturesTitle > Sell in 3 Easy Steps</KeyFeaturesTitle>
            <hr  />
        <Container className="row container" >
            <Cards>
                <CardBody>
                    <CardTitle className="card-title text-center p-2">01</CardTitle>
                    <CardSubTitle className="card-title text-center p-2" >
                        Submit your house details
                    </CardSubTitle>
                    <p className="card-text text-center p-2">
                        Fill a quick form with details of your house
                    </p>
                </CardBody>
            </Cards>
            <Cards>
                <div className="card-body1">
                    <CardTitle className="card-title text-center p-2">02</CardTitle>
                    <CardSubTitle className="card-title text-center p-2" >Get all cash offer within 24 hours</CardSubTitle>
                    <p className="card-text text-center p-2">We review your details and submit you all cash offer
                    based on market price</p>

                </div>
            </Cards>
            <CardThree>
                <div className="card-body1">

                    <CardTitle className="card-title text-center p-2">03</CardTitle>
                    <CardSubTitle className="card-title text-center p-2" >Receive your money</CardSubTitle>
                    <p className="card-text text-center p-2">You can accept the offer, from offer to close within 3 days </p>

                </div>
            </CardThree>
        </Container>
            <div style={{marginTop:"50px"}} className="App">
                <ReactPlayer controls url="https://www.youtube.com/watch?v=7sDY4m8KNLc" />
            </div>
        </ThreeStepsContainer>
    )
}