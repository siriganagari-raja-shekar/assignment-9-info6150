import React from 'react';
import Header from './../Header/Header';
import Card from './../Card/Card';
import { Navigate } from 'react-router-dom';

export const AboutUs = () => {

  if(!sessionStorage.getItem("user")){
    return(
      <Navigate to="/" />
    )
  }

  return (
    <>
        <Header />

        <Card
            width={50+"%"} 
            backgroundColor={"#232946"} 
            heading={"About Us section"}
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeat illum sapiente quo sed modi veritatis voluptate hic. Sapiente esse odio nesciunt laborum corporis beatae repellat illo, est commodi unde Laborum soluta veritatis tempora expedita, praesentium asperiores nemo dolorem, modi sequi quod fuga provident, minima sint optio nulla vel! Hic facilis magni dolores tenetur unde illo cum, ab quam libero! Quidem ipsum voluptatem laudantium sit facilis quod illum. Beatae voluptates sequi vitae eveniet qui expedita molestiae at, nam fugiat ipsa maiores accusamus laudantium quod! Libero cupiditate fugit nam unde fugiat.</p>
        </Card>
    </>
  )
}
