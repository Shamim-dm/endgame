import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useRouteError } from 'react-router-dom';
// import './error.css'



const ErrorPage = () => {
    // const { error, status } = useRouteError()
    // useTitle("errorPage")
    return (
     <div className='errorpage bg-white'>
       <Helmet>
        <title>Dance Expressions | ErrorPage</title>
            </Helmet>
         <section className='flex items-center h-screen  text-purple-900 '>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className=''>
          <img className=' w-12/12 mx-auto' src='https://st.depositphotos.com/1006899/2650/i/450/depositphotos_26505551-stock-photo-error-metaphor.jpg' alt="" />
        </div>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-purple-600'>
            <span className='sr-only'>Error  </span> 
          </h2>
          <p className='text-2xl text-red-500 font-bold md:text-5xl mb-8'>
            Page Not found!!!
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-purple-500 text-white mb-4'
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
     </div>
    );
};

export default ErrorPage;