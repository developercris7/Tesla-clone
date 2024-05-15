import React from 'react'
import Navbar from '../Components/Navbar'
import Models from '../Components/Models';
import data from '../Assets/db.json'

const Home = () => {
 const teslaModels = data.models;
  return (
    <div>
        <Navbar />
     {teslaModels.map((model,index)=> ( <Models model={model} key={index}/>))}
    </div>
  )
}

export default Home