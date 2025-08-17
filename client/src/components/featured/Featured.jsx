import React from 'react'
import { featured } from '../../utils/data'

function Featured() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
          Featured Property Types
        </h2>
        <p className="text-neutral-500 mt-3 mb-12">
          Find all types of properties tailored for you
        </p>

        {/* Featured Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {featured.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white border border-neutral-200 py-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.cover}
                alt={item.name}
                className="w-20 h-20 object-contain"
              />
              <h3 className="text-lg font-semibold text-neutral-800 mt-4">
                {item.name}
              </h3>
              <p className="text-neutral-500 text-sm mt-1">
                {item.total} Property
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
