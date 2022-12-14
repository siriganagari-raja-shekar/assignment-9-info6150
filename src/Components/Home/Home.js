import React from 'react';
import Header from './../Header/Header';
import Card from '../Card/Card';
import { Navigate } from 'react-router-dom';
import HouseImage from './../../Assets/Images/house.svg';

export const Home = () => {

  if(!sessionStorage.getItem("user")){
    return(
      <Navigate to="/" />
    )
  }

  const userGreetingStyle = {
    color: "#232946",
    fontStyle: "italic",
    fontSize: "3rem",
    margin: "2rem",
    textAlign:"center"
  }
  return (
    <>
      <Header />
      <h1 style={userGreetingStyle}>Welcome {JSON.parse(sessionStorage.getItem("user"))?.fullname}!!</h1>
      <Card 
        width={50+"%"}
        heading={"Home Page Section"} 
        backgroundColor={"#232946"} 
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeat illum sapiente quo sed modi veritatis voluptate hic. Sapiente esse odio nesciunt laborum corporis beatae repellat illo, est commodi unde Laborum soluta veritatis tempora expedita, praesentium asperiores nemo dolorem, modi sequi quod fuga provident, minima sint optio nulla vel! Hic facilis magni dolores tenetur unde illo cum, ab quam libero! Quidem ipsum voluptatem laudantium sit facilis quod illum. Beatae voluptates sequi vitae eveniet qui expedita molestiae at, nam fugiat ipsa maiores accusamus laudantium quod! Libero cupiditate fugit nam unde fugiat.</p>
        <img src={HouseImage} alt="House" style={{
          width: "15rem",
          height: "15rem",
        }}/>
      </Card>
    </>
    
  )
}
