import React from 'react'
//import Navbar from './components/Navbar'
import Hero from '../components/Hero';
import HomeCards from '../components/Homecards';
import JobListings from '../components/JobListings';
import JobListing from '../components/JobListing';
import ViewAllJobs from '../components/ViewAllJobs';



const HomePage = () => {
  return (
    <div>
      <Hero />
      <HomeCards />
      <JobListings isHome = {true}/>     
      < ViewAllJobs />
    </div>
  )
};

export default HomePage;