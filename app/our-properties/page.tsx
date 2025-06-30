'use client';

import Image from 'next/image';

const OurPropertiesData = [
  {
    title: '1. Saashwat Farm',
    subtitle: 'Divine Riverside Abode in the City of Chiplun',
    description: `Sprawling across 10 acres, this enticing property lies on the banks of the confluence
of 2 rivers, Koyna & Vashishti, in the forested city of Chiplun with 2.5 Lakhs of population. When was the last time you were home with nothing on your mind? No deadlines, no bottom-lines, nothing above or below the line. When was the last time you enjoyed a moment of peace, just gazing at the horizon? Or spent a beautiful evening with your family? If you're searching for that elusive feeling called peace of mind, then you'll find yourself at home at SAASHWAT FARM. Sip a cup of morning tea as you hear the birds tweet. Jog past the green landscape. And as you head home, the starlit sky will let you know that you’ve found a home for the mind.`,
    image: '/images/about/Frame 49.svg',
  },
  {
    title: '2. D’Indra UBUD Resort',
    subtitle: 'Perfect harmony between nature, body and soul',
    description: `Sprawling across 10 acres, this enticing property lies on the banks of the confluenceof 2 rivers, Koyna & Vashishti, in the forested city of Chiplun with 2.5 Lakhs of population. When was the last time you were home with nothing on your mind? No deadlines, no bottom-lines, nothing above or below the line. When was the last time you enjoyed a moment of peace, just gazing at the horizon? Or spent a beautiful evening with your family? If you're searching for that elusive feeling called peace of mind, then you'll find yourself at home at SAASHWAT FARM. Sip a cup of morning tea as you hear the birds tweet. Jog past the green landscape. And as you head home, the starlit sky will let you know that you’ve found a home for the mind.`,
    image: '/images/about/Frame 50.png',
  },
  {
    title: '3. Dapoli Resort',
    subtitle: 'Perfect harmony between nature, body and soul',
    description: `Sprawling across 10 acres, this enticing property lies on the banks of the confluenceof 2 rivers, Koyna & Vashishti, in the forested city of Chiplun with 2.5 Lakhs of population. When was the last time you were home with nothing on your mind? No deadlines, no bottom-lines, nothing above or below the line. When was the last time you enjoyed a moment of peace, just gazing at the horizon? Or spent a beautiful evening with your family? If you're searching for that elusive feeling called peace of mind, then you'll find yourself at home at SAASHWAT FARM. Sip a cup of morning tea as you hear the birds tweet. Jog past the green landscape. And as you head home, the starlit sky will let you know that you’ve found a home for the mind.`,
    image: '/images/about/Frame 51.png',
  },
];

const OurProperties = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-16">
     
      <div className="container space-y-16">
        {OurPropertiesData.map((property, index) => (
          <div key={index} className="flex flex-col gap-6">
            {/* Text Section */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="text-left lg:w-[40%] geist-font text-white">
                <p className="rest-name text-2xl font-bold text-teal-400">{property.title}</p>
                <p className="font14to20 fw-medium text-lg mt-2 text-dark dark:text-white">{property.subtitle}</p>
              </div>
              <div className="text-justify font14to20 lg:w-[60%] geist-font fw-normal whitespace-pre-line text-dark dark:text-white">
                {property.description}
              </div>
            </div>

            {/* Image Section */}
            <div>
              <Image
                src={property.image}
                alt="property"
                width={1200}
                height={600}
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProperties ;
