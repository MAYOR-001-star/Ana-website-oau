import React from "react";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const navLists = ["Guests", "Sponsors", "FAQ", "Contact Us"];

  return (
    <nav className="bg-[#072422] p-[1rem_1.5rem] md:px-20 lg:px-28 text-white relative">
      <div className="flex justify-between items-center h-24">
        <a href="/" className="flex items-center cursor-pointer">
          <img src="/real logo.svg" alt="analogo" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-[3rem] list-none special-font">
          {navLists.map((item, index) => (
            <li key={index} className="text-white text-[1rem] cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenu((prev) => !prev)}
          className="block lg:hidden z-[1001]"
        >
          <img
            src={menu ? "/menu.svg" : "/close.svg"}
            alt="menu-toggle"
            className="w-[2rem]"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {!menu && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-[1000] flex flex-col items-start p-5">
          <ul className="flex flex-col items-start gap-6 mt-16 text-black text-[1.25rem] font-medium special-font">
            {navLists.map((item, index) => (
              <li key={index} className="cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
