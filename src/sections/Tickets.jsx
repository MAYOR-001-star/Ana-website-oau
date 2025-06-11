import React from "react";

const Tickets = () => {
  return (
    <div className=" bg-[#072422] flex flex-col md:flex-row justify-between items-center p-[4.5rem_0rem_3.77881rem_0rem] md:p[4.5rem_1.49975rem_3.5rem_2.5rem] lg:p-[3rem_7.5rem_3.02881rem_7.5rem] gap[3rem] lg:gap-[6.30731rem]">
      <div className="flex flex-col gap-5 flex-start justify-center items-center lg:items-start">
        <h1 className="text-3xl font-bold special-font lg:w-[22.8125rem] text-white">
          Get Your Ticket
        </h1>
        <p className="text-white lg:w-[23.6875rem] text-center lg:text-left p-[0_1rem] lg:p-0">
          Come enjoy performances, poetry, giveaways and more.
        </p>
        <a
            href="https://anaoau.org/book-festival"
            rel="noopener noreferrer"
          >
            <button className="bg-[#008300] lg:p-[0.5rem 1.5rem] text-white px-6 py-2 border-2 border-[#000000] rounded-[0.25rem] mt-4 transition duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              Buy a Ticket
            </button>
        </a>
      </div>
      <div>
        <img
          src="/tickets.svg"
          alt="festival highlights"
          className="block w-[35rem] md:w-full md:h-full object-cover mt-7"
        />
        
      </div>
    </div>
  );
};

export default Tickets;
