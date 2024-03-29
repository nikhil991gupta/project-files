import logo from '../assets/KunalEnterprise.png';

const Navbar = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">Company Name</span>
                <img className=" w-auto h-8 sm:h-8" src={logo} loading="lazy" width="120" height="35" alt="Company Logo" />
              </a>
              <div className="flex items-center -mr-2 md:hidden">
                <button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50" type="button" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10 list-none">
            <li>
              <a href="#" className="text-base font-normal text-gray-500 list-none hover:text-gray-900" target="">Home</a>
            </li>
            <li>
              <a href="#" className="text-base font-normal text-gray-500 list-none hover:text-gray-900" target="">About Us</a>
            </li>
            <li>
              <a href="#" className="text-base font-normal text-gray-500 list-none hover:text-gray-900" target="_blank">Blog</a>
            </li>
            <li>
              <a href="#" className="text-base font-normal text-gray-500 list-none hover:text-gray-900" target="_blank">Contact Us</a>
            </li>
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <div className="inline-flex rounded-full shadow">
              <div className="inline-flex rounded-full shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900 mr-2" viewBox="0 0 101 101" id="user">
                  <path d="M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900 mr-2" viewBox="0 0 101 101" id="user">
                  <path d="M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" id="heart"><path d="M1664 596q0-81-21.5-143t-55-98.5T1506 295t-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64T478 256t-98 8-94 31-81.5 59.5-55 98.5T128 596q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344z"></path></svg>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
