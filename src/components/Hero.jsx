import React from 'react'

import { logo } from '../assets';

const Hero = () => {
  return (
    <header className= "w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-5 pt-3">
        <img src={logo} alt='condensify_logo' className="w-40 h-50 object-contain" />

        <button
          type='button'
          onClick={() => window.open('https://github.com/eacher24')}
          className='black_btn'
        >
          GitHub
        </button>

      </nav>

      <h1 className="head_text">
        Condense Long Articles with <br className='max-md:hidden'/>
        <span
        className='blue_gradient'>OpenAI</span>

      </h1>
      <h2 className='font-satoshi'>(With the help of GPT-4)</h2>


      <h2 className="desc">
        Speed up your reading with Condensify, an open-source article condenser that transforms lengthy articles into clear and concise summaries.
      </h2>

    </header>
  )
}

export default Hero