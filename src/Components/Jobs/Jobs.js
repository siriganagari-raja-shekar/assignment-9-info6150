import React from 'react';
import Header from './../Header/Header';
import Card from './../Card/Card'
import './Jobs.scss';
import { Navigate } from 'react-router-dom';

export const Jobs = () => {

  if(!sessionStorage.getItem("user")){
    return(
      <Navigate to="/" />
    )
  }

  const jobsList = ["Software Analyst", "Full stack engineer", "HR specialist", 
  "Engineering Manager", "UI/UX engineer","Agile Project Manager"];

  return (
    <>
        <Header />

        <div className='container'>
            {
              jobsList.map(role => {
                  return(
                    <Card 
                      width={"20em"}
                      backgroundColor={"#232946"}
                      heading={role}                                     
                    >
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto architecto necessitatibus minima velit nobis!</p>
                    </Card>
                  )
              })
            }
        </div>
    </>
  )
}
