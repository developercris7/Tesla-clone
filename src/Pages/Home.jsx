import React from 'react'
import Navbar from '../Components/Navbar'
import Models from '../Components/Models';
import data from '../Assets/db.json'

const Home = () => {
 const arr = data.models;
  return (
    <div>
        <Navbar />
     {arr.map((model)=> ( <Models model={model}/>))}
    </div>
  )
}

export default Home