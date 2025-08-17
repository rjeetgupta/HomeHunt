import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#1D2636] py-12 px-6">

      <div className="grid sm:grid-cols-6 gap-10 max-w-7xl mx-auto">
        
        <div className="sm:col-span-3 space-y-5 text-neutral-300">
          <span className="text-2xl font-bold text-[#27AE60]">Logo</span>
          <h2 className="text-2xl font-semibold text-neutral-100 leading-snug">
            Do You Need Help With Anything?
          </h2>
          <p className="text-neutral-400 font-semibold">
            Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month.
          </p>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-3 rounded-lg w-full border border-neutral-500 bg-transparent text-neutral-200 focus:outline-none focus:border-[#27AE60] transition"
            />
            <button className="bg-[#27AE60] hover:bg-[#12984a] px-6 py-2 text-neutral-100 font-medium shadow-md rounded-lg cursor-pointer transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4 text-neutral-400">
          <h2 className="text-md uppercase font-bold tracking-wide text-neutral-200">Layouts</h2>
          <nav className="flex flex-col gap-2">
            <Link className="hover:text-[#27AE60] transition duration-400">Home Page</Link>
            <Link className="hover:text-[#27AE60] transition duration-400">About Page</Link>
            <Link className="hover:text-[#27AE60] transition duration-400">Service Page</Link>
            <Link className="hover:text-[#27AE60] transition duration-400">Property Page</Link>
            <Link className="hover:text-[#27AE60] transition duration-400">Contact Page</Link>
            <Link className="hover:text-[#27AE60] transition duration-400">Single Blog</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-4 text-neutral-400">
          <h2 className="text-md uppercase font-bold tracking-wide text-neutral-200">All Sections</h2>
          <nav className="flex flex-col gap-2">
            <Link className="hover:text-[#27AE60] transition duration-400">Headers</Link>
            <Link className="hover:text-[#27AE60] transition duration-400">Features</Link>
            <Link className="hover:text-[#27AE60] transition duration-400">Attractive</Link>
            <Link className="hover:text-[#27AE60] transition duration-400">Testimonials</Link>
            <Link className="hover:text-[#27AE60] transition duration-400">Videos</Link>
            <Link className="hover:text-[#27AE60] transition duration-400">Footers</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-4 text-neutral-400">
          <h2 className="text-md uppercase font-bold tracking-wide text-neutral-200">Company</h2>
          <nav className="flex flex-col gap-2">
            <Link className="hover:text-[#27AE60] transition duration-400">About Us</Link>
            <Link className="hover:text-[#27AE60] transition duration-400">Blog</Link>
            <Link className="hover:text-[#27AE60] transition duration-400">Contact</Link>
            <Link className="hover:text-[#27AE60] transition duration-400">Pricing</Link>
            <Link className="hover:text-[#27AE60] transition duration-400">Affiliate</Link>
            <Link className="hover:text-[#27AE60] transition duration-400">Login</Link>
            <Link className="hover:text-[#27AE60] transition duration-400">Changelog</Link>
          </nav>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-neutral-700 mt-10" />

      {/* Bottom Section */}
      <div className="mt-6">
        <p className="text-center text-neutral-500 text-md font-semibold">
          © 2025 All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
