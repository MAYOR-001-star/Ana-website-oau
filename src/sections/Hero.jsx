import React from "react";

const Hero = () => {
  const [standClicked, setStandClicked] = React.useState(false);
  const [ticketClicked, setTicketClicked] = React.useState(false);

  return (
    <div className="bg-[#072422]">
      <div className="flex justify-around gap-7 items-center py-10">
        <div>
          <img
            src="/Ticket-top1.svg"
            alt="hero-bg"
            className="w-48 h-26 object-cover"
          />
        </div>
        <div>
          <img
            src="/Ticket-top2.svg"
            alt="hero-bg"
            className="w-48 h-26 object-cover"
          />
        </div>
      </div>
      <div className="p-[1rem_2.5rem] text-center">
        <h1 className="text-3xl lg:text-[3.257rem] md:w-[31.75rem] font-bold mx-auto special-font leading-[3.25rem] text-white">
          ANA-OAU BOOK AND ARTS FESTIVAL
        </h1>
        <p className="text-lg text-wrap text-[0.875rem] md:text-[1.125rem] text-white mt-7 md:w-[26.75rem] mx-auto">
          Celebrating the language of today's student artists—through books,
          music, paint & performance.
        </p>
        <div className="flex justify-center gap-5 items-center mt-6">
          <a
            href="https://anaoau.org/book-festival"
            rel="noopener noreferrer"
          >
            <button
              onClick={() => setStandClicked((prev) => !prev)}
              className={`bg-[#0B2422] text-[#89D383] px-6 py-2 border-2 border-[#000000] rounded mt-4 transition duration-300 ${
                standClicked
                  ? "shadow-[2px_2px_0px_0px_#000]"
                  : "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
              }`}
            >
              Get a Stand
            </button>
          </a>
          <a
            href="https://anaoau.org/book-festival"
            rel="noopener noreferrer"
          >
            <button
              onClick={() => setTicketClicked((prev) => !prev)}
              className={`bg-[#008300] text-white px-6 py-2 border-2 border-[#000000] rounded mt-4 transition duration-300 ${
                ticketClicked
                  ? "shadow-[2px_2px_0px_0px_#000]"
                  : "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
              }`}
            >
              Buy a Ticket
            </button>
          </a>
        </div>
        <div className="flex justify-center mt-10">
          <img src="/new-tongue.svg" alt="new-tongues" />
        </div>
        <div>
          <div className="flex justify-center mt-10">
            <img src="/group-tongues.svg" alt="new-tongues" />
          </div>
          <p className="text-white mt-2 text-[0.6875rem] md:text-[1rem]">
            More than 200 People have bought tickets
          </p>
        </div>
      </div>
      <div className="flex justify-around gap-7 items-center py-10">
        <div>
          <img
            src="/Ticket-bottom1.svg"
            alt="hero-bg"
            className="w-48 h-26 object-cover"
          />
        </div>
        <div>
          <img
            src="/Ticket-bottom2.svg"
            alt="hero-bg"
            className="w-48 h-26 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
