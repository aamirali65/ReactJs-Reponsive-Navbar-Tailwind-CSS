import React, { useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="flex p-3 bg-white justify-between items-center">
      <a href="/" className='flex gap-2 items-center'>
        <img src="https://cdn.freebiesupply.com/logos/large/2x/volkswagen-3-logo-png-transparent.png" alt="logo" className='max-w-14 object-cover max-h-14'/>
        <span className='text-lg font-medium font-body'>iCoderz</span>
      </a>
      <div id="nav-menu" className={`md:flex gap-12 px-10 ${isNavOpen ? '' : 'hidden'}`}>
        <a href="/" className='font-body hover:text-purple-700'>About Us</a>
        <a href="/" className='font-body hover:text-purple-700'>Faqs</a>
        <a href="/" className='font-body hover:text-purple-700'>Hero</a>
        <a href="/" className='font-body hover:text-purple-700'>Testamonial</a>
      </div>
      <button className='p-2 md:hidden' onClick={handleClick}>
        <i className={`fa ${isNavOpen ? 'fa-close' : 'fa-bars'} text-gray-600`}></i>
      </button>

      {isNavOpen && (
        <div id='nav-dialog' className="fixed bg-white inset-0 p-3">
          <div id="nav-bar" className='flex justify-between'>
            <a href="/" className='flex gap-2 items-center'>
              <img src="https://cdn.freebiesupply.com/logos/large/2x/volkswagen-3-logo-png-transparent.png" alt="logo" className='max-w-14 object-cover max-h-14'/>
              <span className='text-lg font-medium font-body'>iCoderz</span>
            </a>
            <button className='p-2' onClick={handleClick}>
              <i className="fa fa-close text-gray-600"></i>
            </button>
          </div>
          <div className='mt-6'>
          <a href="/" className='font-body m-3 p-3 hover:bg-gray-50 block rounded-lg'>About Us</a>
        <a href="/" className='font-body m-3 p-3 hover:bg-gray-50 block rounded-lg'>Faqs</a>
        <a href="/" className='font-body m-3 p-3 hover:bg-gray-50 block rounded-lg'>Hero</a>
        <a href="/" className='font-body m-3 p-3 hover:bg-gray-50 block rounded-lg'>Testamonial</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
