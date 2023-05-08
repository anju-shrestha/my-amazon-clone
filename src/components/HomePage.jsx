import React from 'react';
import Carousel from './Carousel';
import HomPageCard from './HomPageCard';
import CarouselCategory from './CarouselCategory';
import CarouselProduct from './CarouselProduct'; 

const HomePage = () => {
  return (
    <div className='bg-amazon-background'>
      <div className='min-w-[1000px] max-w-[1500px] mx-auto '>
        <Carousel/>
        <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80'>
          <HomPageCard 
            title={"We have a surprise for you"}
            img={"../images/home_grid_1.jpg"}
            link={"see terms and conditions."}
          />
           <HomPageCard 
            title={"Watch the rings or power"}
            img={"../images/home_grid_2.jpg"}
            link={"Start streaming now."}
          />
           <HomPageCard 
            title={"Unlimited Streaming"}
            img={"../images/home_grid_3.jpg"}
            link={"Find Out More."}
          />
           <HomPageCard 
            title={"More titles to explore"}
            img={"../images/home_grid_4.jpg"}
            link={"Browse kindle unlimited."}
          />
           <HomPageCard 
            title={"Shop Pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"See more."}
          />
           <HomPageCard 
            title={"Spring Sale"}
            img={"../images/home_grid_6.jpg"}
            link={"See the deals."}
          />
           <HomPageCard 
            title={"Echo Buds"}
            img={"../images/home_grid_7.jpg"}
            link={"See more."}
          />
           <HomPageCard 
            title={"Family Plan: 3 months free"}
            img={"../images/home_grid_8.jpg"}
            link={"Learn more."}
          />
          <div className='m-3 pt-8'>
            <img className='xl:hidden ' src="../images/banner_image_2.jpg" alt="" />
          </div>
        </div>
        <CarouselProduct/>
        <CarouselCategory/>
        <div className='h-[200px]'>
          <img className='h-[100%] m-auto' src={'../images/banner_image.jpg'} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
