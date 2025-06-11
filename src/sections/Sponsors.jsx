import React from "react";

const Sponsors = () => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start p-[4.5rem_1.5rem;] lg:p[4.5rem_1.49975rem_3.5rem_2.5rem] lg:p-[6.5rem_7.49975rem_6.5rem_7.5rem] gap[2.5rem] lg:gap-[11.70363rem]">
      <div className="flex flex-col gap-5 flex-start items-start">
        <h1 className="text-3xl font-bold special-font lg:w-[22.8125rem]">
          Our Sponsors & Partners
        </h1>
        <p className="text-[#62636C] lg:w-[26.75rem]">
          8 incredible guest artists, poets, and creators will join us to speak,
          perform, and inspire.
        </p>
        <a
          href="https://anaoau.org/book-festival"
          rel="noopener noreferrer"
        >
          <button
            onClick={() => setClicked((prev) => !prev)}
            className={`bg-[#008300] text-white px-6 py-2 border-2 border-[#000000] rounded my-4 transition duration-300 ${
              clicked
                ? "shadow-[2px_2px_0px_0px_#000]"
                : "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            }`}
          >
            Partner With Us
          </button>
        </a>
      </div>
      <div className="grid grid-cols-4 grid-rows-3 mt-10 lg:mt-0 gap-[1rem] lg:gap-[2.5rem] lg:w-[29.375rem] lg:h-[38.25rem] justify-center mx-auto">
        <div className="rounded p-[3.9375rem_0rem] bg-[#FCFCD7] col-span-2 row-span-2 flex justify-center items-center">
          <img
            src="/bookbuzz.svg"
            alt="bookbuzz_foundation"
            className="w-40 h-10"
          />
        </div>
        <div className="rounded p-[5.8125rem_2.8865rem_5.8125rem_2.824rem] bg-[#FCF2E8] row-span-1 col-span-2 flex justify-center items-center">
          <img
            src="/spur.svg"
            alt="the_spur_hub"
            className="w-24 h-12"
          />
        </div>
        <div className="rounded p[2.6875rem_0rem] bg-[#EDFAE6] col-span-2 row-span-2 flex justify-center items-center">
          <img
            src="/watermark.svg"
            alt="paradigm_book_reading_charity"
            className="w-48 h-16"
          />
        </div>
        <div className="rounded p-[0rem_2.5rem] bg-[#FCF2FC] row-span-1 col-span-2 flex justify-center items-center">
          <img
            src="/Ujesa.svg"
            alt="Ujesa_tribe"
            className="w-16 h-16 rounded-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
