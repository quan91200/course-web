import React from "react"
import { blog } from "../../../dummydata"

const Footer = () => {
  return (
    <>
      <section className='bg-[#1eb2a6] py-12 text-gray-100'>
        <div className='flex items-center justify-between space-x-4 mx-5'>
          <div className='flex flex-col space-y-2'>
            <h1 className="text-2xl font-bold">Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='flex w-1/2 items-center space-x-1'>
            <input type='text' placeholder='Enter email address' className="p-2 rounded-sm w-full border-none outline-none text-black" />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='flex items-start justify-between space-x-4 w-full px-5 py-5'>
          <div className='flex flex-col space-y-4'>
            <h1 className="font-bold text-2xl">ACADEMIA</h1>
            <span className="text-[#1eb2a6]">ONLINE EDUCATION & LEARNING</span>
            <p className="text-gray-500">A small river named Duden flows by their place
              <br />and supplies it with the necessary regelialia.</p>

            <div className="flex items-center space-x-2">
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-instagram icon'></i>
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <h1 className="font-bold text-md">Explore</h1>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='flex flex-col space-y-4'>
            <h1 className="font-bold text-md">Quick Links</h1>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='flex flex-col space-y-4'>
            <h1 className="font-bold text-md">Recent Post</h1>
            {blog.slice(0, 3).map((val) => (
              <div className='flex items-center space-x-2'>
                <div className='h-12 w-12 rounded-full object-cover'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text-sm flex flex-col'>
                  <div className="flex items-center space-x-1">
                    <span className="text-[#1eb2a6] space-x-1">
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>{val.date}</label>
                    </span>
                    <span className="space-x-1">
                      <i className='fa fa-user'></i>
                      <label htmlFor=''>{val.type}</label>
                    </span>
                  </div>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='flex flex-col space-y-4'>
            <h1 className="font-bold text-md">Have a Questions?</h1>
            <ul className="space-y-2">
              <li>
                <i className='fa fa-map mr-2'></i>
                Hanoi, Vietnam
              </li>
              <li>
                <i className='fa fa-phone-alt mr-2'></i>
                +84 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane mr-2'></i>
                xb91200@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='text-[#1eb2a6] text-center py-8'>
        <p>
          Copyright ©2025 All rights reserved | This template is made with <i className='fa fa-heart'></i> by <span style={{ color: "blue", fontWeight: "bold" }}>Cobham</span>
        </p>
      </div>
    </>
  )
}

export default Footer
