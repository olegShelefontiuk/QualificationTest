
import React from "react";


import './styles/App.css';


import {Navbar} from "./Navbar";
import {FirstPage} from "./Pages/FirstPage";
import {KeyFeatures} from "./Pages/KeyFeatures";
import {ThreeSteps} from "./Pages/ThreeSteps";
import {OrangeCards} from "./Pages/OrangeCards";
import {Subscribe} from "./Pages/Subscribe";
import {SellHouse} from "./Pages/SellHouse";
import {Footer} from "./Footer";



function App() {
  return (<div  style={{
          cursor:"pointer"}}>

<Navbar />
      <FirstPage />

          <KeyFeatures  />

          <ThreeSteps/>

              <OrangeCards />

                <Subscribe />

              <SellHouse />
<Footer />
      </div>
  );
}
export default App;
