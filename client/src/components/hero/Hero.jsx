import React from 'react'
import bgImage from "../../assets/banner.png"

function Hero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better contrast */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide leading-tight">
          Search Your <span className="text-[#27AE60]">Next Home</span>
        </h1>
        <p className="text-neutral-300 text-lg mb-12">
          Find new & featured properties located in your local city.
        </p>

        {/* Search Bar */}
        <div className="bg-[#1D2636]/50 p-10 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6">
          
          {/* Location */}
          <div className="w-full md:w-56">
            <label className="block text-sm mb-2 text-neutral-200">Location</label>
            <input 
              type="text"
              placeholder="Enter City or Street"
              className="p-3 rounded-lg w-full border border-neutral-500 bg-transparent text-neutral-200 placeholder-neutral-400 focus:outline-none focus:border-[#27AE60] transition"
            />
          </div>

          {/* Property Type */}
          <div className="w-full md:w-56">
            <label className="block text-sm mb-2 text-neutral-200">Property Type</label>
            <select 
              className="p-3 rounded-lg w-full border border-neutral-500 bg-transparent text-neutral-200 focus:outline-none focus:border-[#27AE60] transition duration-300 ease-in-out"
            >
              <option value="rent" className='bg-[#1D2636]/90'>Rent</option>
              <option value="sale" className='bg-[#1D2636]/90'>Sale</option>
              <option value="all" className='bg-[#1D2636]/90'>All</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="w-full md:w-56">
            <label className="block text-sm mb-2 text-neutral-200">Price Range</label>
            <select 
              className="p-3 rounded-lg w-full border border-neutral-500 bg-transparent text-neutral-200 focus:outline-none focus:border-[#27AE60] transition"
            >
              {[1000,2000,3000,4000,5000,6000,7000,8000,9000,10000].map(price => (
                <option key={price} value={price} className='bg-[#1D2636]/90'>${price}</option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="w-full md:w-auto mt-7">
            <button className="bg-[#27AE60] hover:bg-[#12984a] px-8 py-3 text-neutral-100 font-semibold rounded-lg shadow-md cursor-pointer transition duration-300">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
