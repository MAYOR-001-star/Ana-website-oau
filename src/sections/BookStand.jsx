import React from "react";

const BookStand = () => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:rounded-[1.5rem] lg:border lg:border-[#B9BBC6] bg-[#C2EEF2] lg:m-10 lg:p-[6.5rem_7.5rem] lg:w-[75rem] lg:h-[25rem]">
      <div className="flex flex-col gap-5 flex-start w-full px-5 pt-14 pb-4 lg:w-auto lg:px-0 lg:py-0 text-center lg:text-left">
        <h1 className="text-3xl font-bold special-font lg:max-w-[22.8125rem] text-[#1E1F24]">
          Book a Stand
        </h1>
        <p className="text-[#62636C] lg:max-w-[26.75rem]">
          Have something to sell or showcase? Join the marketplace of creativity.
        </p>
        <a
          href="https://anaoau.org/book-festival"
          rel="noopener noreferrer"
          className="mt-2 mb-8 lg:mb-0"
        >
          <button
            onClick={() => setClicked(true)}
            className={`${clicked
              ? 'shadow-[2px_2px_0px_0px_#000]'
              : 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]'} bg-[#2D93D0] lg:bg-[#3D63DD] text-white p-[0.5rem_1.5rem] lg:p-[0.5rem_1.5rem] border-2 border-[#000000] rounded my-4 transition duration-300`}
          >
            <span className="lg:hidden">Book a Stand</span>
            <span className="hidden lg:inline">Partner With Us</span>
          </button>
        </a>
      </div>
      <div className="w-full lg:w-auto px-5 lg:px-0 lg:pr-5">
        <img
          src="/shop1.svg"
          alt="Book Stand Illustration"
          className="w-full h-auto object-contain max-w-[32.5625rem] max-h-[25.3125rem]"
        />
      </div>
    </div>
  );
};

export default BookStand;
