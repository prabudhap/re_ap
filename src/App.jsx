// import React from 'react'
// const App = () => {
//   const name = 'shit';
//   const names = ['shit','shit2','shit3'];
//   const loggedIn= true
//   const message = loggedIn ? 'hello sir' : 'wrong onej';
//   const styles = {
//     color :'purple',
//     fontSize : '50px'
//   }
//   return (
//     <>
//     <div className='text-5xl font-fantasy '>App</div>
//     <p style={styles}>hello {name}</p> 
//     <ul>
//       {names.map((name, index) => (
//         <li key={index}>{name}</li>
//       ))}
//     </ul>
//     </>
//   )
// }
// export default App;

import {
   Route,
   createRoutesFromElements,
   RouterProvider,
   createBrowserRouter,
   Router
    }  from 'react-router-dom';
import React from 'react'
import HomePage from './ pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './ pages/JobsPage';
import NotFoundPage from './ pages/NotFoundPage';
import JobListing from './components/JobListing';

const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<MainLayout />}>
     <Route index element={<HomePage />}/> 
     <Route path='/job-listing' element={<JobListing />} />
     <Route path='/jobs' element= {<JobsPage></JobsPage>} />
     <Route path='/*' element={<NotFoundPage />} />
     </Route>
    )
) ;

const App = () => {
  return <RouterProvider  router ={router}/>
};

export default App;
