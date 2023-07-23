import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Header = () => {
    return (
       <div className='pt-10'>
        
      <Carousel className="text-center">
        <div>
        <img className='' src="https://news.ucmerced.edu/sites/news.ucmerced.edu/files/news/image/rankings_2020_-_pano_870x450_page_2a.jpg" alt="" />
        </div>
        <div>
          <img src='https://img.freepik.com/free-vector/flat-design-private-school-facebook-cover_23-2149726562.jpg?w=2000'/>
        </div>
        <div>
          <img src="https://eduempire.com/wp-content/uploads/2021/09/eduempire-college-admission-in-vimannagar-in-pune.jpeg" />
        </div>
        {/* <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div> */}
      </Carousel>
    </div>
       
    );
};

export default Header;