import React from "react";

const AboutSectionThree = () => {
  return (
    <section className="container bg-black py-12">
      <img
        src="/images/about/Frame 77.svg"
        className="m-auto mb-4 w-full md:w-[30%]"
        alt="heading"
      />
      <div className="flex flex-wrap justify-center gap-6">
        <img
          src="images/about/businessman-clicks-virtual-screen-mission.svg"
          alt="center-img"
        />

        <div>
          <p>
            <span className="text-dark">Mission Statement </span> - Mission
            Statement - At HUMB Assets, our mission is to transform healthcare
            infrastructure into fractional revenue-sharing digital tokens,
            empowering individuals and institutions to invest in real-world
            assets through a decentralized platform that ensures trust,
            transparency, and passive income generation.
          </p>
          <p>
            <span className="text-dark">Vision Statement </span>- To democratize
            access to income-generating healthcare assets by leveraging
            blockchain technology, enabling secure, transparent, and inclusive
            investment opportunities for a global community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
