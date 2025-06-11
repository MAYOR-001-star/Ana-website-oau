import React from "react";

const Faq = () => {
  const [active, setActive] = React.useState(null);

  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className="flex justify-center items-center">
      <div className='hidden md:block relative right-[15rem]'>
        <img
          src="/vector.svg"
          alt="FAQ Background"
          className="w-full h-[20rem] md:h-[30rem] object-cover"
        />
      </div>
      <div className="p-[4.5rem_1.5rem] flex flex-col justify-center items-start md:items-center gap-[2.5rem]">
        <h1 className="special-font text-[1.5rem] lg:text-[2.75rem] text-left lg:text-center">
          FAQ
        </h1>
        <div className="w-[21.5625rem] lg:w-[28.125rem] p-[0rem_1rem] flex flex-col justify-center items-stretch gap-5 lg:p-[1rem_2.5rem] bg-white border border-[#B9BBC6] shadow-[8px_8px_0_0_rgba(0,0,0,0.08)] lg:shadow-[24px_24px_0_0_rgba(0,0,0,0.08)] rounded-md">
          <div
            onClick={() => toggleFAQ("ANA-OAU")}
            className="p-[1.5rem_0rem] flex flex-col justify-center items-start gap-[0.25rem] lg:gap-[1rem] border-b-2 border-[#e7e8ec]"
          >
            <div className="flex justify-between gap-[1rem] items-center w-full cursor-pointer">
              <p
                className={`${
                  active === "ANA-OAU"
                    ? "text-[#007D00] special-font"
                    : "text-[#1E1F24]"
                } text-[1rem] lg:text-[1.5rem]`}
              >
                What is ANA-OAU?
              </p>
              <img
                src={`${
                  active === "ANA-OAU" ? "/close-faq.svg" : "/open-faq.svg"
                }`}
                alt="FAQ"
                className="w-[1.5rem] h-[1.5rem] object-contain"
              />
            </div>
            <div
              className={`text-[#62636C] text-[0.875rem] lg:text-[1.125rem] ${
                active === "ANA-OAU" ? "block h-full" : "hidden h-0"
              }`}
            >
              ANA-OAU is an acronym for the Association of Nigerian Authors - Obafemi Awolowo University, Ile-Ife. We are a community of book-lovers, artists, and art enthusiasts on OAU Campus.
            </div>
          </div>

          <div
            onClick={() => toggleFAQ("New Tongues")}
            className="p-[1.5rem_0rem] flex flex-col justify-center items-start gap-[0.25rem] border-b-2 border-[#e7e8ec]"
          >
            <div className="flex justify-between items-center w-full cursor-pointer">
              <p
                className={`${
                  active === "New Tongues"
                    ? "text-[#007D00] special-font"
                    : "text-[#1E1F24]"
                } text-[1rem] lg:text-[1.5rem]`}
              >
                Why "New Tongues"?
              </p>
              <img
                src={`${
                  active === "New Tongues" ? "/close-faq.svg" : "/open-faq.svg"
                }`}
                alt="FAQ"
                className="w-[1.5rem] h-[1.5rem] object-contain"
              />
            </div>
            <div
              className={`text-[#62636C] text-[0.875rem] lg:text-[1.125rem] ${
                active === "New Tongues" ? "block h-full" : "hidden h-0"
              }`}
            >
              See what Hafvy did with "The Girl with English Class", yeah? We're turning it around and showing how languages can actually work together. Fimí, Cezie, Shallipopi (Laho), FOJ, Brymo, and ASA are some artists who come to mind.
            </div>
          </div>

          <div
            onClick={() => toggleFAQ("Art Festival")}
            className="p-[1.5rem_0rem] flex flex-col justify-center items-start gap-[0.25rem] border-b-2 border-[#e7e8ec]"
          >
            <div className="flex justify-between items-center w-full cursor-pointer">
              <p
                className={`${
                  active === "Art Festival"
                    ? "text-[#007D00] special-font"
                    : "text-[#1E1F24]"
                } text-[1rem] lg:text-[1.5rem]`}
              >
                What is an Art Festival?
              </p>
              <img
                src={`${
                  active === "Art Festival" ? "/close-faq.svg" : "/open-faq.svg"
                }`}
                alt="FAQ"
                className="w-[1.5rem] h-[1.5rem] object-contain"
              />
            </div>
            <div
              className={`text-[#62636C] text-[0.875rem] lg:text-[1.125rem] ${
                active === "Art Festival" ? "block h-full" : "hidden h-0"
              }`}
            >
              Erhm, erh, it's a little bit difficult to pin down. But check Ake Festival, Lipfest, and Sobafest on Insta or Twitter. We want to do something like that for university creatives: face painting, art exhibition, poetry, panel discussions, book giveaways, prizes, and music and drama performances.
            </div>
          </div>

          <div
            onClick={() => toggleFAQ("ticket")}
            className="p-[1.5rem_0rem] flex flex-col justify-center items-start gap-[0.25rem] border-b-2 border-[#e7e8ec]"
          >
            <div className="flex justify-between items-center w-full cursor-pointer">
              <p
                className={`${
                  active === "ticket"
                    ? "text-[#007D00] special-font"
                    : "text-[#1E1F24]"
                } text-[1rem] lg:text-[1.5rem]`}
              >
                How much is the ticket?
              </p>
              <img
                src={`${
                  active === "ticket" ? "/close-faq.svg" : "/open-faq.svg"
                }`}
                alt="FAQ"
                className="w-[1.5rem] h-[1.5rem] object-contain"
              />
            </div>
            <div
              className={`text-[#62636C] text-[0.875rem] lg:text-[1.125rem] ${
                active === "ticket" ? "block h-full" : "hidden h-0"
              }`}
            >
              One ticket costs one thousand naira only (₦1,000). But there are perks if you are two or five people. Check through the ticket link.
            </div>
          </div>

          <div
            onClick={() => toggleFAQ("festival hold")}
            className="p-[1.5rem_0rem] flex flex-col justify-center items-start gap-[0.25rem]"
          >
            <div className="flex justify-between items-center w-full cursor-pointer">
              <p
                className={`${
                  active === "festival hold"
                    ? "text-[#007D00] special-font"
                    : "text-[#1E1F24]"
                } text-[1rem] lg:text-[1.5rem]`}
              >
                When does the festival hold?
              </p>
              <img
                src={`${
                  active === "festival hold"
                    ? "/close-faq.svg"
                    : "/open-faq.svg"
                }`}
                alt="FAQ"
                className="w-[1.5rem] h-[1.5rem] object-contain"
              />
            </div>
            <div
              className={`text-[#62636C] text-[0.875rem] lg:text-[1.125rem] ${
                active === "festival hold" ? "block h-full" : "hidden h-0"
              }`}
            >
              It holds on Saturday, the 14th of June 2025, at BOOC Hall, OAU Campus and starts by 10AM.
            </div>
          </div>
        </div>
      </div>
      <div className='hidden md:block relative left-[15rem]'>
        <img
          src="/vector.svg"
          alt="FAQ Background"
          className="w-full h-[20rem] md:h-[30rem] object-cover"
        />
      </div>
    </div>
  );
};

export default Faq;
