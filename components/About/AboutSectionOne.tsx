import React from "react";

const AboutSectionOne = () => {
  return (
    <section
      className="relative flex min-h-[80vh] items-center bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('/images/about/Dex about us.svg')`,
      }}
    >
      <div className="absolute left-0 top-0 z-0 h-full w-full"></div>

      <div className="relative z-10 max-w-4xl px-6 py-16 md:px-12 lg:px-20">
        <h1 className="mb-6 text-3xl font-bold text-cyan-400 md:text-5xl">
          “Invest In Real Healthcare. <br />
          Earn Real Income.”
        </h1>
        <p className="mb-4 text-base leading-relaxed text-gray-200 md:text-lg">
          Turn Healthcare Infrastructure Income — From Equipment To Diagnostics
          To Infrastructure — Into Digital Revenue-Sharing Tokens With Humb
          Assets
        </p>
        <p className="mb-8 font-semibold text-white">
          Simple | Secure | Decentralized
        </p>
        <button className="w-full rounded-md bg-cyan-800 px-6 py-2 font-semibold text-white hover:bg-cyan-700 md:w-1/2">
          Partner with us
        </button>
      </div>
    </section>
  );
};

export default AboutSectionOne;
