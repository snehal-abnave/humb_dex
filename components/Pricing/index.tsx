"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // ✅ Import Pagination
import "swiper/css";
import "swiper/css/pagination"; // ✅ Import Pagination CSS
import Image from "next/image";

const properties = [
  {
    title: "1. Saashwat\n Farm",
    subtitle: "Divine Riverside Abode in \nthe City of Chiplun",
    description: `Sprawling across 10 acres, this enticing property lies on the banks of the confluence
of 2 rivers, Koyna & Vashishti, in the forested city of Chiplun with 2.5 Lakhs of population. When was the last time you were home with nothing on your mind? No deadlines, no bottom-lines, nothing above or below the line. When was the last time you enjoyed a moment of peace, just gazing at the horizon? Or spent a beautiful evening with your family? If you're searching for that elusive feeling called peace of mind, then you'll find yourself at home at SAASHWAT FARM. Sip a cup of morning tea as you hear the birds tweet. Jog past the green landscape. And as you head home, the starlit sky will let you know that you’ve found a home for the mind.`,
    image: "/images/about/Frame 49.svg",
  },
  {
    title: "2. D’Indra UBUD Resort",
    subtitle: "Perfect harmony between \n nature, body and soul",
    description: `Sprawling across 10 acres, this enticing property lies on the banks of the confluenceof 2 rivers, Koyna & Vashishti, in the forested city of Chiplun with 2.5 Lakhs of population. When was the last time you were home with nothing on your mind? No deadlines, no bottom-lines, nothing above or below the line. When was the last time you enjoyed a moment of peace, just gazing at the horizon? Or spent a beautiful evening with your family? If you're searching for that elusive feeling called peace of mind, then you'll find yourself at home at SAASHWAT FARM. Sip a cup of morning tea as you hear the birds tweet. Jog past the green landscape. And as you head home, the starlit sky will let you know that you’ve found a home for the mind.`,
    image: "/images/about/Frame 50.png",
  },
  {
    title: "3. Dapoli Resort",
    subtitle: "Perfect harmony between nature, body and soul",
    description: `Sprawling across 10 acres, this enticing property lies on the banks of the confluenceof 2 rivers, Koyna & Vashishti, in the forested city of Chiplun with 2.5 Lakhs of population. When was the last time you were home with nothing on your mind? No deadlines, no bottom-lines, nothing above or below the line. When was the last time you enjoyed a moment of peace, just gazing at the horizon? Or spent a beautiful evening with your family? If you're searching for that elusive feeling called peace of mind, then you'll find yourself at home at SAASHWAT FARM. Sip a cup of morning tea as you hear the birds tweet. Jog past the green landscape. And as you head home, the starlit sky will let you know that you’ve found a home for the mind.`,
    image: "/images/about/Frame 51.png",
  },
];

const Pricing = () => {
  return (
    <>
      <section className="relative z-10 bg-gray-light pb-16 dark:bg-bg-color-dark md:pb-20 lg:pb-28">
        <img
          src="/images/about/Frame 24.svg"
          alt=""
          className="m-auto mb-4 w-full md:w-[40%]"
          loading="lazy"
        />

        <div
          className="container rounded-[32px] p-4 md:p-9 md:py-20"
          style={{
            backgroundImage: "url('/images/hero/Background.svg')",
            backgroundSize: "cover",
          }}
        >
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="pb-12"
            grabCursor={true}
            simulateTouch={true}
          >
            {properties.map((property, index) => (
              <SwiperSlide key={index}>
                <div className="text-section flex flex-col gap-6 lg:flex-row">
                  {/* Left Text Section */}
                  <div className="geist-font text-left text-white lg:w-[40%]">
                    <p className="rest-name text-2xl font-bold text-teal-400">
                      {property.title}
                    </p>
                    <p className="font20to30 mt-2 whitespace-pre-line text-lg font-semibold text-dark dark:text-white md:mt-8">
                      {property.subtitle}
                    </p>
                  </div>

                  {/* Right Description Section */}
                  <div className="font14to20 geist-font fw-normal text-justify text-dark dark:text-white lg:w-[60%]">
                    {property.description}
                  </div>
                </div>

                {/* Image */}
                <div className="mt-6">
                  <Image
                    src={property.image}
                    alt="property"
                    width={1200}
                    height={600}
                    className="w-full rounded-lg object-cover pb-[60px] md:pb-0"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Pricing;
