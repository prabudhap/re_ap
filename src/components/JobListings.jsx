import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';
import jobs from '../jobs.json';

const JobListings = ({ isHome = false }) => {
  //const jobListings = isHome ? jobs.slice(0, 3) : jobs ;'
  
  //useState take 2 things (jobs- the name of the state) , (setJobs- funciton which would change the name of the function j)
  // to get the jobs and update their state 
   const [jobs, setJobs] = useState([]);
  
   // for the loading window, for showing a spinner
   const [loading , setLoading] = useState(true);

   //used to perform side effects in func. components and takes in a function and also an dependency array 
   useEffect(() => {
    const fetchJobs= async () => {
      const apiUrl  = isHome ? 'http://localhost:8000/jobs?_limit=3' : 'http://localhost:8000/jobs'; 
    try{
     const res = await fetch(apiUrl); 
     const data = await res.json();
      setJobs(data);
    } catch(error){
      console.log("error fetching data",error)
    }finally{
      setLoading(false);
    }

    }
    fetchJobs();
   }, []);
  

  return (
    <section className='bg-blue-50 px-4 py-10 '>
      <div className='container-s lg:container m-auto'>

        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
           {isHome ? 'Recent Jobs' : 'Browse Jobs'}          
        </h2>  

            {loading ? 
            <Spinner loading={loading} />             
            : (
              <div div className='grid grid-cols-1 md:grid-cols-3 gap-6'> 
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
            </div>
            )}         
          </div>
        
    </section>
  );
};
export default JobListings;