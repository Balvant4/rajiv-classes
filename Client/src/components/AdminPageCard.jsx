import React from "react";

function AdminPageCards({
  value,
  label,
  bgColor,
  iconBgColor,
  batchYear,
  logo: Logo,
}) {
  return (
    <div
      className={`w-full sm:w-[20rem] lg:w-[18rem] h-24 rounded-xl flex justify-between items-center p-4 sm:p-6 ${bgColor} font-sans`}
    >
      <div>
        <h1 className="text-xl flex font-semibold">
          <span>BATCH:</span>
          <span className="ml-2">{batchYear}</span>
        </h1>
        <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">{value}</h1>
        <span className="text-sm sm:text-base lg:text-lg">{label}</span>
      </div>
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex justify-center items-center rounded-full ${iconBgColor}`}
      >
        {Logo && <Logo className="text-white text-lg sm:text-xl lg:text-2xl" />}
      </div>
    </div>
  );
}

export default AdminPageCards;
