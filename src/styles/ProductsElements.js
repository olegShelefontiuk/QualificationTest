import styled from 'styled-components';
import ImgBg from './Pictures/house3.jpg';
import ImgBg1 from './Pictures/EveningLake.jpg';
import ImgBg2 from './Pictures/house5.jpg'
import ImgBg3 from './Pictures/BottomPic.jpg'


export const FirstPageContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 70vh;
  justify-content: center;
  background-position: center;
  background-size: cover;
  
`;




export const KeyFeaturesContainer = styled.div`

  min-height: 100vh;
  padding-left: 15px;
  padding-right: 10px;
  margin-right: auto;
  margin-left: auto;
  
`;



export const KeyFeaturesTitle = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  margin-left: 40%;
  margin-top: 30px;
  margin-bottom: 20px;
  text-decoration-color: black;
  cursor: pointer;


  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;


export const OrangeCardContainer = styled.div`
  margin-top: 205px;
  min-height: 80vh;
  padding-left: 15px;
  padding-right: 10px;
  margin-right: auto;
  margin-left: auto;
  
`;

export const ThreeStepsContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${ImgBg1});
  height: 100vh;
  background-size: cover;
`;



export const SubscribeContainer = styled.div`
  background-color: darkorange;
  height: 80vh;
  justify-content: center;
  overflow: auto;
  margin-bottom: 3rem;
  position: relative;  
`;
export const SubscribeWallpaper = styled.div`
  
  background-image: url(${ImgBg2});
  height: 240px;
  width: 380px;
  //float: end;
  position: absolute;
  bottom: 0;
  right: 0;
  //float: bottom;
  //margin-top: 100px;
  //background-size: ;
  `


export const SellHouseContainer = styled.div`
  background-color: white;
  height: 140vh;
  justify-content: center;
  overflow: auto;
  //margin-bottom: 10rem;
  position: relative;  
`;

export const SellHouseWallpaper = styled.div`
  background-image: 
  url(${ImgBg3});
  height: 290px;
  width: 450px;
  position: absolute;
  bottom: 0;
  left: 0;
  `




export const FooterContainer = styled.footer`
  background-color: black;
`;

export const FooterWrap = styled.div`
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  color: white;
  font-size: 0.7rem;
`;




