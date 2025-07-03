import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import Header from './components/Navbar/Navbar';

// data:

import ApiData from "./data.jsx"

// icons:
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import Cards from './components/cards/cards';
import Btn from './components/Button/button';
import Mycarousel from './components/Carousel/carousel.jsx';





const App = () => {
  return (

    <>
<div>
    
      <Header />
      <h1 className='head'>Using Bootstrap and React Icons in React</h1>
      <br />

      {/* carousel section */}

      <Mycarousel/>


{/* card section */}
<div className="carddiv">
            
{

ApiData.map((e)=>{
  return(

    <Cards src={e.image} title={e.title} desc={e.desc}/>
  )
})
}
</div>


{/* <Cards src={ApiData} title="" desc=""/> */}

{/* <div className='cardsdiv'>


      <Cards className="card"/>

        <Cards className="card"/>

          <Cards className="card"/>

            <Cards className="card"/>
</div> */}

<br />
<br />

<div style={{display:"flex",gap:"30px",justifyContent:"center"}}>

<Btn title="Login"/>
<Btn title="Signup"/>
<Btn title="Submit"/>
<Btn title="Send"/>
</div>

{/* <div>
      <h2>Follow me on:</h2>
      <div className='social'>

      <a href="">
        <FaFacebook />

      </a>
      <a href="">
        <FaSquareXTwitter />

      </a>
      <a href="">
        <FaGithubSquare />

      </a>
      </div> */}

      


    
    </div>
  </>
  );
}

export default App;
