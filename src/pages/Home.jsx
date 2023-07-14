import React from 'react'
import { Link } from 'react-router-dom'
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import ".././styles/Home.css"
const Home = () => {
  return (
    <div className='home'>
      <div className='homeContainer container'> 
      <h1>Pizza-Mania </h1>
      <Link to={'/menu'}>
      <button className='d-flex'><CallTwoToneIcon/> Order Now</button>
      </Link>
      </div>
    </div>
  )
}

export default Home