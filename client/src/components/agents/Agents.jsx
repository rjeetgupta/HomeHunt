import React from 'react'
import { team } from "../../utils/data";
import { Link } from "react-router-dom";
import { IconBrandFacebookFilled, IconBrandLinkedin, IconBrandTwitter, IconBrandInstagram, IconBrandFacebook, IconLocation, IconMapPin } from "@tabler/icons-react"

function Agents() {
  return (
      <section className=''>
          <div className='max-w-7xl mx-auto px-6'>
              <h3 className='text-3xl md:text-4xl text-[#2d3954] text-center font-bold'>Our Featured Agents</h3>
              <p className='text-[#72809d] text-center w-[70%] mx-auto mt-5 font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

              <div className='flex flex-wrap justify-center  mt-15 mb-15 gap-10'>
                  {/* Agent Cards */}
                  {
                      team.map((item, index) => (
                          <div className='flex flex-col flex-wrap items-center border border-neutral-400 p-10 rounded-2xl transition-transform duration-500 ease-in-out hover:scale-105 '>
                              <img src={item.cover} alt={item.name} className='w-16 h-16 rounded-full '/>
                              <h4 className='text-lg font-bold mt-3'>{item.name}</h4>
                              <p className='flex gap-2 items-center text-sm text-neutral-500 mb-3 py-2 rounded-lg '> <IconMapPin size={24} /> {item.address}</p>

                              <p className='text-sm font-bold text-neutral-100 px-4 py-2 rounded-lg bg-amber-500 mb-5'>{item.list} Listings</p>

                              <div className='flex gap-4 mb-4'>
                                  <Link className='text-gray-500 border border-neutral-400 rounded-full p-2'><IconBrandFacebook size={24} /></Link>
                                  <Link className='text-gray-500 border border-neutral-400 rounded-full p-2'><IconBrandLinkedin size={24} className=''/></Link>
                                  <Link className='text-gray-500 border border-neutral-400 rounded-full p-2'><IconBrandTwitter size={24} className=''/></Link>
                                  <Link className='text-gray-500 border border-neutral-400 rounded-full p-2'><IconBrandInstagram size={24} className=''/></Link>
                              </div>
                              <div className='flex justify-between gap-4'>
                                  <button className='px-5 py-1.5 border border-neutral-400 rounded-lg bg-[#27ae60] text-neutral-100 cursor-pointer'>Message</button>
                                  <button className='px-5 py-1.5 border border-neutral-400 rounded-lg cursor-pointer'>Call</button>
                              </div>
                          </div>
                      ))
                  }
              </div>
          </div>
    </section>
  )
}

export default Agents