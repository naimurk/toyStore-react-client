import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import halfS from '../assets/img/icon/rating.png'
import fullS from '../assets/img/icon/star (4).png'


const Testomonial = () => {
    return (
        <div className='lg:py-24 px-5 py-10'>
            <h1 className='lg:py-16 py-5 text-4xl text-center lg:text-7xl'>Our Happy Customer</h1>
            <div className="carousel mt-5 w-full">

                <div id="item1" className=" flex-col flex justify-center items-center carousel-item w-full">
                    <div data-aos = 'slide-left' className='border w-full bg-gray-200 rounded-lg p-8 lg:w-1/2 flex flex-col justify-center items-center'>
                        <img className='avatar h-24 w-24 rounded-full' src="https://i.ibb.co/7vzVxzx/pexels-chloe-1043471.jpg" alt="" />
                        <p className='text-center py-5'> “The history of the labor movement needs to be taught in every school in this land. America is a living testimonial to what free men and women, organized in free democratic trade unions can do to make a better life. We ought to be proud of it “
                        </p>
                        <div className='flex gap-x-2 justify-between'>
                             <img className='w-8' src={fullS} alt="" />
                             <img className='w-8' src={fullS} alt="" />
                             <img className='w-8' src={fullS} alt="" />
                             <img className='w-8' src={fullS} alt="" />
                             <img className='w-8' src={halfS} alt="" />
                        </div>
                        <p className=' py-4 text-red-400 font-bold'>Rima jhon</p>
                        
                        


                    </div>
                </div>
                <div id="item2" className=" flex-col flex justify-center items-center carousel-item w-full">
                    <div data-aos = 'slide-left' className='border w-full bg-gray-200 rounded-lg p-8 lg:w-1/2 flex flex-col justify-center items-center'>
                        <img className='avatar h-24 w-24 rounded-full' src="https://i.ibb.co/CnkLRh9/Fj-U2lkc-WYAg-NG6d.jpg" alt="" />
                        <p className='text-center py-5'> “The history of the labor movement needs to be taught in every school in this land. America is a living testimonial to what free men and women, organized in free democratic trade unions can do to make a better life. We ought to be proud of it “
                        </p>
                        <div className='flex gap-x-2 justify-between'>
                             <img className='w-8' src={fullS} alt="" />
                             <img className='w-8' src={fullS} alt="" />
                             <img className='w-8' src={fullS} alt="" />
                             <img className='w-8' src={fullS} alt="" />
                             <img className='w-8' src={halfS} alt="" />
                        </div>
                        <p className=' py-4 text-red-400 font-bold'>Rima jhon</p>
                        
                        


                    </div>
                </div>
                <div id="item3" className=" flex-col flex justify-center items-center carousel-item w-full">
                    <div data-aos = 'slide-left' className='border w-full bg-gray-200 rounded-lg p-8 lg:w-1/2 flex flex-col justify-center items-center'>
                        <img className='avatar h-24 w-24 rounded-full' src="https://i.ibb.co/c2bJ9n9/pexels-pixabay-220453.jpg" alt="" />
                        <p className='text-center py-5'> “The history of the labor movement needs to be taught in every school in this land. America is a living testimonial to what free men and women, organized in free democratic trade unions can do to make a better life. We ought to be proud of it “
                        </p>
                        <div className='flex gap-x-2 justify-between'>
                             <img className='w-8' src={fullS} alt="" />
                             <img className='w-8' src={fullS} alt="" />
                             <img className='w-8' src={fullS} alt="" />
                             <img className='w-8' src={fullS} alt="" />
                             <img className='w-8' src={halfS} alt="" />
                        </div>
                        <p className=' py-4 text-red-400 font-bold'>Rima jhon</p>
                        
                        


                    </div>
                </div>
                <div id="item4" className=" flex-col flex justify-center items-center carousel-item w-full">
                    <div data-aos = 'slide-left' className='border w-full bg-gray-200 rounded-lg p-8 lg:w-1/2 flex flex-col justify-center items-center'>
                        <img className='avatar h-24 w-24 rounded-full' src="https://i.ibb.co/3W6DYpR/pexels-pixabay-415829.jpg" alt="" />
                        <p className='text-center py-5'> “The history of the labor movement needs to be taught in every school in this land. America is a living testimonial to what free men and women, organized in free democratic trade unions can do to make a better life. We ought to be proud of it “
                        </p>
                        <div className='flex gap-x-2 justify-between'>
                             <img className='w-8' src={fullS} alt="" />
                             <img className='w-8' src={fullS} alt="" />
                             <img className='w-8' src={fullS} alt="" />
                             <img className='w-8' src={fullS} alt="" />
                             <img className='w-8' src={halfS} alt="" />
                        </div>
                        <p className=' py-4 text-red-400 font-bold'>Rima jhon</p>
                        
                        


                    </div>
                </div>
              

            </div>
            <div className="flex my-5 lg:mt-5 justify-center w-full lg:py-2 gap-2">
                <a href="#item1" className="btn btn-md">1</a>
                <a href="#item2" className="btn btn-md">2</a>
                <a href="#item3" className="btn btn-md">3</a>
                <a href="#item4" className="btn btn-md">4</a>
            </div>
        </div>
    );
};

export default Testomonial;