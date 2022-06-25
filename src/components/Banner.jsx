import React from "react";
import BannerImage from "../banner.webp";

function Banner() {
  return (
    // Breakpoint prefix	Minimum width	CSS
    // sm	640px	@media (min-width: 640px) { ... }
    // md	768px	@media (min-width: 768px) { ... }
    // lg	1024px	@media (min-width: 1024px) { ... }
    // xl	1280px	@media (min-width: 1280px) { ... }
    // 2xl	1536px
    <div style={{ height: "100vh" }}>
      {/* <div style={{backgroungImage:" linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 72.53%), url(https://cdn.t.shef.com/unsafe/2400x0/center/middle/https://cdn.shef.com/static/media/bas_hero_d.dbb55085.jpg);"
        }}>hi</div> */}
      <div className='relative w-full h-full'>
        <img
          src='/assets/banner.webp'
          className='w-full h-full brightness-75 object-cover md:object-contain'
        />
        <div className='absolute top-10 md:top-40 w-11/12 md:w-4/5 bg '>
          <p className='text-4xl md:text-6xl xl:text-7xl text-white font-bold m-6 md:px-28'>
            Earn money doing
            <br /> what you love
          </p>
          <p className='text-2xl md:text-3xl lg:text-4xl text-white mx-6 md:px-28'>
            Sign up to be your own boss and cook whenever <br /> you want.
          </p>
          <div className='md:flex m-8 items-center'>
            <input
              type='text'
              placeholder='Phone number'
              className='p-2 md:ml-28 mr-6 px-8 my-2 md:px-16 h-16 rounded'
            />
            <div className='flex-col'>
              <div className='my-2'>
                <input
                  type='checkbox'
                  name='chk1'
                  id=''
                  className='p-4 w-4 h-4'
                />
                <label for='chk1' className='text-white md:text-xl mx-2'>
                  I am an Afghan refugee applying for expedited review
                </label>
                <br />
              </div>
              <div className='my-2'>
                <input
                  type='checkbox'
                  name='chk1'
                  id=''
                  className='p-4 w-4 h-4 '
                />
                <label for='chk1' className='text-white md:text-xl mx-2'>
                  I agree to Shef's Terms of Service & Privacy Policy.
                </label>
              </div>
            </div>
          </div>
          <p className='text-2xl text-white p-2 px-9 rounded-3xl mx-8 md:mx-28 my-12 bg-[#d93A4a] w-fit'>
            Get Started
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;