import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="hero relative relative z-10 mt-[4rem] flex h-full w-full items-center justify-center overflow-hidden bg-white bg-cover bg-center pb-16 pt-[120px] dark:bg-gray-dark md:h-screen md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[100px] 2xl:pb-[250px] 2xl:pt-[210px]"
      >
        <Image
          src="/images/hero/New version copy.png"
          className="object-cover"
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
          <div className="my-3 flex justify-center">
            <a
              href="https://dindrainternational.id"
              target="_blank"
              rel="noopener noreferrer"
              className="font14to16 ease-in-up rounded-[50px] bg-primary px-7 py-3 text-base font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:px-9 lg:px-9"
            >
              Join Dindra Token Presale
            </a>
          </div>
          <p className="font14to22 px-6 py-2 font-semibold">
            Limited presale access to tokenised real estate assets. Join the
            Dindra Token presale before the window closes.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
