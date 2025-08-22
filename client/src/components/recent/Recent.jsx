import React, { useState } from 'react'
import { IconHeart, IconHeartFilled } from '@tabler/icons-react'
import { list } from '../../utils/data'

function Recent() {
  const [liked, setLiked] = useState({})

  const toggleLike = (id) => {
    setLiked({
      ...liked,
      [id]: !liked[id],
    })
  }

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl text-center md:text-4xl font-bold text-neutral-800">
          Recent Property Listed
        </h2>
        <p className="text-neutral-500 text-center mt-3 mb-12">
          We have a diverse range of recent properties for you to explore.
        </p>

        {/* Property Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <img
                src={item.cover}
                alt={item.name}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
              />

              {/* Here category will be display */}

              <div className='flex justify-between items-center p-4'>
                <span className={`${item.category === 'For Sale' ? 'bg-[#c7f2d9] text-green-600' : 'bg-[#fff7c8] text-orange-400'} px-4 py-2 rounded-lg text-sm font-bold`}>{item.category}</span>
                {/* Heart Icon */}
                <span>
                  {liked[item.id] ? (
                    <IconHeartFilled
                      className="transition-colors fill-red-500 stroke-red-500 cursor-pointer"
                      onClick={() => toggleLike(item.id)}
                    />
                  ) : (
                    <IconHeart
                      className="transition-colors stroke-gray-400 cursor-pointer"
                      onClick={() => toggleLike(item.id)}
                    />
                  )}

                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-neutral-800">
                  {item.name}
                </h3>
                <p className="text-neutral-500 text-sm">{item.location}</p>

                {/* Price + Type */}
                <div className="flex justify-between items-center mt-4">
                  <span className="bg-[#27AE60] text-white px-6 py-3 hover:bg-[#12984a] transition duration-400 cursor-pointer rounded-lg text-sm font-medium">
                    {item.price}
                  </span>
                  <span className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-lg text-sm font-medium">
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Recent
