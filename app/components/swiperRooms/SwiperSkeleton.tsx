import React from "react";

const SwiperSkeleton = () => {
  return (
    <div className="animate-pulse border w-full h-full bg-slate-200 flex justify-center items-center">
      <div
        className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default SwiperSkeleton;
