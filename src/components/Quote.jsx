import React from 'react';

const Quote = () => {
  return (
    <div className="bg-[#7b3f00] p-8  font-netflixm h-64 flex flex-col justify-center text-[#faf9f6]">
      <p className="text-2xl ">
        The car has become an article of dress without which we feel uncertain, unclad, and incomplete.
      </p>
      <div className="text-right mt-4">
        <p className="font-light italic text-base">
          - Aliyu Shehu Muhammed
        </p>
        <p className="text-sm font-light italic">
          Director of MBS
        </p>
      </div>
    </div>
  );
};

export default Quote;
