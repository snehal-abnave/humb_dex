import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="hero relative relative z-10 mt-[4rem] flex h-full w-full items-center justify-center overflow-hidden bg-white bg-cover bg-center pb-16 pt-[120px] dark:bg-gray-dark md:h-screen md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[100px] 2xl:pb-[250px] 2xl:pt-[210px]"
      >
        {/* Background image */}
        {/* <img
    src="/images/hero/New version copy.png"
    alt="Hero Background"
    loading="eager"
    className="absolute w-full h-full object-cover z-0"
  /> */}
        <Image
          src="/images/hero/New version copy.png"
          alt="Hero Background"
          fill
          priority
          quality={75}
        />
        {/* Overlay */}
        <div className="absolute bg-black/50"></div>

        {/* Centered Content */}
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="font font-bold">
            Welcome To
            <br /> HUMB Property DEX
          </h1>
          <p className="font32 px-6 py-2 font-medium">
            Where Real Estate Meets The Future
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
