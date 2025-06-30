"use client";

import React from "react";

const Video = () => {
  const steps = [
    "Properties\nTokenized",
    "Buy\nFractions",
    "Earn\nReturns",
    "Trade\nFreely",
  ];

  return (
    <>
      <div className="container text-center">
        <div>
          <img
            src="/images/about/Frame 27.svg"
            alt="how-it-works"
            className="m-auto mb-4 w-full md:w-[25%]"
            loading="lazy"
          />
        </div>
      </div>

      <section className="relative w-full overflow-hidden py-16 md:h-screen md:py-20 lg:py-28">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-0 top-0 z-0 h-full w-full object-cover"
        >
          <source src="/images/video/Cyber_Globe.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Layer */}
        <div
          className="absolute left-0 top-0 z-10 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero/Background.svg')",
            backgroundColor: "rgba(0,0,0,0.7)",
            backgroundBlendMode: "overlay",
            opacity: "0.8",
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-white">
          <div className="flex flex-col flex-wrap items-center justify-center gap-6 lg:flex-row lg:gap-0">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Circle */}
                <div className="font14to18 font20to30 flex h-36 w-36 items-center justify-center whitespace-pre-line rounded-full border border-white bg-primary px-4 text-center font-bold text-white shadow-lg md:h-[6rem] md:w-[6rem] lg:h-56 lg:w-56">
                  {step}
                </div>

                {/* Dotted line between circles (except last one) */}
                {index < steps.length - 1 && (
                  <div className="hidden h-px w-10 border-t-2 border-dotted border-teal-400 lg:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
