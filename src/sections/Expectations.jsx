import React from "react";

const Expectations = () => {
  return (
    <div className="bg-[#F9F9FB] px-6 py-20 lg:px-32 flex flex-col gap-[5rem]">
      <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-[5rem]">
        <h1 className="special-font text-left font-bold text-[1.5rem] lg:text-[2.75rem]">
          What to Expect at #ANAOAU25
        </h1>
        <img
          src="/stars.svg"
          alt="Stars"
          className="w-[12rem]"
        />
        <p className="text-[#62636C] text-left text-sm lg:text-base">
          This year's theme, “New Tongues”, explores how today's artists are
          fusing native languages and global genres—from Hausapiano to Yoruba
          rap. Come for the books. Stay for the beats.
        </p>
      </div>

      <div className="mt-12 bg-white border border-[#B9BBC6]  shadow-[8px_8px_0_0_rgba(0,0,0,0.08)] lg:shadow-[24px_24px_0_0_rgba(0,0,0,0.08)] rounded-md grid grid-cols-2 lg:grid-cols-8">
        <div className="border-b border-r border-[#B9BBC6] flex flex-col items-center text-center p-[1rem]">
          <img src="/book-store.svg" alt="Bookstore of the Day" className="w-10 h-12 mb-3" />
          <p className="text-[0.875rem] text-center font-medium">Bookstore of the Day</p>
        </div>
        <div className="border-b border-r border-[#B9BBC6] flex flex-col items-center text-center p-[1rem]">
          <img src="/face-paint.svg" alt="Face Painting" className="w-10 h-12 mb-3" />
          <p className="text-[0.875rem] text-center font-medium">Face Painting</p>
        </div>
        <div className="border-b border-r border-[#B9BBC6] flex flex-col items-center text-center p-[1rem]">
          <img src="/poetry-slam.svg" alt="Poetry Slam" className="w-10 h-12 mb-3" />
          <p className="text-[0.875rem] text-center font-medium">Poetry Slam</p>
        </div>
        <div className="border-b  border-r border-[#B9BBC6] flex flex-col items-center text-center p-[1rem]">
          <img src="/artists.svg" alt="Artists Panel Sessions" className="w-10 h-12 mb-3" />
          <p className="text-[0.875rem] text-center font-medium">Artists Panel Sessions</p>
        </div>
        <div className="border-b  border-r border-[#B9BBC6] flex flex-col items-center text-center p-[1rem]">
          <img src="/refreshments.svg" alt="Refreshments and fun" className="w-10 h-12 mb-3" />
          <p className="text-[0.875rem] text-center font-medium">Refreshments and fun</p>
        </div>
        <div className="border-b  border-r border-[#B9BBC6] flex flex-col items-center text-center p-[1rem]">
          <img src="/music-collabs.svg" alt="Music Collabs" className="w-10 h-12 mb-3" />
          <p className="text-[0.875rem] text-center font-medium">Music Collabs</p>
        </div>
        <div className="border-b  border-r border-[#B9BBC6] flex flex-col items-center text-center p-[1rem]">
          <img src="/drama.svg" alt="Drama Performances" className="w-10 h-12 mb-3" />
          <p className="text-[0.875rem] text-center font-medium">Drama Performances</p>
        </div>
        <div className="border-b  border-r border-[#B9BBC6] flex flex-col items-center text-center p-[1rem]">
          <img src="/giveaway.svg" alt="Giveaways and Audience prizes" className="w-10 h-12 mb-3" />
          <p className="text-[0.875rem] text-center font-medium">Giveaways and Audience prizes</p>
        </div>
      </div>
    </div>
  );
};

export default Expectations;
