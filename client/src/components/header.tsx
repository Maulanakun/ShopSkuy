import React from 'react';

const Header = () => {
  return (
    <>
      <header className="py-4 shadow-sm bg-red">
        <div className="container flex items-center justify-between">
          {/* <!-- logo --> */}
          <a>
            <img src="../../public/images/house_5.png" className="w-32" />
          </a>
          {/* <!-- search --> */}
          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <i className="fas fa-search"></i>
            </span>
            <form className="flex">
              <input
                name="search"
                type="text"
                className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
                placeholder="search"
              />
              <button className="z-0 bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
                search
              </button>
            </form>
          </div>
          {/* <!-- icons --> */}
          <div className="flex items-center space-x-4">
            <a className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl">
                <i className="fas fa-heart"></i>
              </div>
              <div className="text-xs leading-3">Wishlist</div>
              <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </div>
            </a>
            <a className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl">
                <i className="fas fa-user"></i>
              </div>
              <div className="text-xs leading-3">Account</div>
              <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                ?
              </div>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
