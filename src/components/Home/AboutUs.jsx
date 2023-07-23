import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AboutUs = () => {
    return (
        <div className='mt-40'>

        <div data-aos="fade-up">
        <h2 className='text-center text-4xl font-bold text-sky-500 '>Why are You choose us?</h2>
        <p className="text-center">Here are some reasons why in choosing us you will have made the best decision for you and your addmitions.</p>
        <hr className="mb-6 pb-5 mt-1 lg:mb-1" />
        </div>
  
        <div className="grid md:grid-cols-3 gap-5 items-center justify-center ">
          <div
            
            className="mt-4 mb-11"
          >
            <div data-aos="fade-right" className="mb-11">
              <h2 className="text-xl font-bold uppercase">Qualified, friendly teachers</h2>
              <hr />
              <p className='text-slate-400'>
                Toys are one of the most stringently regulated products; as a toy
                manufacturer, wholesaler, or retailer, navigating these
                regulations can be difficult and time consuming.
              </p>
            </div>
            <div data-aos="fade-right">
              <h2 className="text-xl font-bold uppercase">Experience teaching children</h2>
              <hr />
              <p className='text-slate-400'>
                Trusted by millions of customer worldwide & Chosen by leading
                marketplaces. Track the status of your payments & Choose how to
                use your funds. Fully Approved & Licensed.
              </p>
            </div>
          </div>
  
          <div  data-aos="fade-up">
            <img
              src="https://images.squarespace-cdn.com/content/v1/56348d6de4b026a6bf1f3115/1450072688829-YKSWKTCGSIVIRJBEHDMU/Jazz+dance+classes+Mathis+Dance+Studios+Melbourne?format=1000w"
              alt=""
            />
          </div>
  
          <div >
            <div   className="mb-11">
              <h2 className="text-xl font-bold uppercase">A big show at the end of the year</h2>
              <hr />
              <p className='text-slate-400'>
                Save money and grab the best free shipping iin world. Now get the
                fastest free home delivery to save money at Toy vehicles online
                shopping app✓No delivery ...
              </p>
            </div>
            <div   className="pt-11">
              <h2 className="text-xl font-bold uppercase">Customers service</h2>
              <hr />
              <p className='text-slate-400'>
                While both phone and email could be part of a customer service
                strategy, customers increasingly expect as many communication
                options provided by a company as they like to use themselves.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;