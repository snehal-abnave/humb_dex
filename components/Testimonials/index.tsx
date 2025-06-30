const Testimonials = () => {
  return (
    <>
      <section className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-16">
        <img
          src="/images/about/Frame 28 (1).svg"
          alt="why-choose"
          className="m-auto mb-4 w-full md:w-[40%]"
          loading="lazy"
        />
        <div style={{ backgroundImage: "url('/images/hero/Background.svg')" }}>
          <div className="container py-6 md:py-16">
            <div className="md:flex md:items-center md:justify-between">
              <div className="info-content">
                <ul>
                  <li className="font20to28 geist-font mb-6 text-white lg:mb-[3.5rem]">
                    <span className="check">✅</span>{" "}
                    <strong>Fully Transparent</strong> – Every property and
                    payout is recorded on-chain
                  </li>
                  <li className="font20to28 geist-font mb-6 text-white lg:mb-[3.5rem] ">
                    <span className="check">✅</span> <strong>Secure</strong> –
                    NFTs are protected by smart contract ownership
                  </li>
                  <li className="font20to28 geist-font mb-6 text-white lg:mb-[3.5rem] ">
                    <span className="check">✅</span>{" "}
                    <strong>Accessible</strong> – Start with a fraction, not a
                    fortune
                  </li>
                  <li className="font20to28 geist-font mb-6 text-white lg:mb-[3.5rem] ">
                    <span className="check">✅</span> <strong>Liquid</strong> –
                    Trade your fractions anytime
                  </li>
                  <li className="font20to28 geist-font mb-6 text-white lg:mb-[3.5rem] ">
                    <span className="check">✅</span> <strong>Global</strong> –
                    Invest in properties around the world
                  </li>
                </ul>
              </div>
              <div className="info-icon">
                <img
                  src="/images/about/Question Mark.svg"
                  alt="Question Mark"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
