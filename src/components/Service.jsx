import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Service = () => {
  return (
    <div className='flex  container flex-col justify-center items-center py-6 mt-14 overflow-hidden '>
        <h1 data-aos="fade-up"
             data-aos-offset="100" className=" text-4xl text-center md:text-5xl lg:text-6xl font-extrabold text-primary">Amazing <span className='text-secondary'>Services.</span> </h1>
        <div  className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3 mt-10 md:mt-20">
            <div data-aos="fade-up"
             data-aos-offset="200"  className="flex flex-col justify-center items-center hover:scale-110 duration-150">
              <img src="https://treact.owaiskhan.me/static/media/shop-icon.048628c95dd89e631ac8c652d04238fb.svg" alt="shop" />
              <h1 className='text-primary text-lg font-semibold'>230+ Locations
              </h1>
              <p className="text-center text-primary font-thin text-sm">Lorem ipsum donor amet siti ceali placeholder text</p>
              <div  className="flex items-center space-x-3">
                <p className='text-secondary text-sm  font-semibold'>Learn More</p>
                <FaArrowRight className='text-secondary' />
              </div>  
            </div>

            <div data-aos="fade-up"
             data-aos-offset="200" className="flex flex-col justify-center items-center hover:scale-110 duration-150">
              <img src="https://treact.owaiskhan.me/static/media/chef-icon.866e076bd2347712ef1d5cb77189d5fb.svg" alt="chef" />
              <h1 className='text-primary text-lg font-semibold'>Professional Chefs
              </h1>
              <p className="text-center text-primary font-thin text-sm">Lorem ipsum donor amet siti ceali placeholder text</p>
              <div className="flex items-center space-x-3">
                <p className='text-secondary text-sm  font-semibold'>Learn More</p>
                <FaArrowRight className='text-secondary' />
              </div>  
            </div>

            <div data-aos="fade-up"
             data-aos-offset="200" className="flex flex-col justify-center items-center hover:scale-110 duration-150">
              <img src="https://treact.owaiskhan.me/static/media/celebration-icon.0d9bb9633fcda75b7632a11eaf12bbac.svg " alt="celebrate" />
              <h1 className='text-primary text-lg font-semibold'>
              Birthday Catering
              </h1>
              <p className="text-center text-primary font-thin text-sm">Lorem ipsum donor amet siti ceali placeholder text</p>
              <div className="flex items-center space-x-3">
                <p className='text-secondary text-sm font-semibold'>Learn More</p>
                <FaArrowRight className='text-secondary' />
              </div>  
            </div>
            
            
            
      
        </div>
    </div>
  )
}

export default Service