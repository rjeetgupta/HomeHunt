import React from 'react'
import { location } from "../../utils/data";


function Explore() {
    return (
        <section className=''>
            <div className='max-w-7xl mx-auto px-6'>
                <h3 className='text-3xl md:text-4xl text-[#2d3954] text-center font-bold'>Explore By Location</h3>
                <p className='text-[#72809d] text-center w-[70%] mx-auto mt-5 font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                <div className='flex flex-wrap justify-center  mt-15 mb-15 gap-10'>
                    {
                        location.map((item, index) => (
                            <div key={index} className='flex justify-center items-center rounded-2xl relative overflow-hidden cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-2'>
                                <div>
                                    <img src={item.cover} alt={item.name} className='w-96 ' />
                                    <div className='absolute inset-0 bg-black/40'></div>
                                </div>
                                <div className='absolute left-16'>
                                    <h4 className='text-2xl text-white font-serif'>{item.name}</h4>
                                    <span className='flex flex-wrap mt-2 gap-4'>
                                        <p className='text-md text-neutral-300'>{item.Villas}</p>
                                        <p className='text-md text-neutral-300'>{item.Apartments}</p>
                                        <p className='text-md text-neutral-300'>{item.Offices}</p>
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Explore