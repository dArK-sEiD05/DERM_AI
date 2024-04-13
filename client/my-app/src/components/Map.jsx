import React from 'react';

const BenefitItem = ({ icon, desc }) => (
  <div className="flex items-center  mb-4">
    <div className="rounded-full bg-gray-200 h-8 w-8 flex items-end justify-end mr-4">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="text-gray-600">
        <path d={icon}></path>
      </svg>
    </div>
    <p className="text-sm">{desc}</p>
  </div>
);

const Map = () => {
  const data = [
    {
      title: 'Early detection of Skin cancer',
      items: [
        { icon: 'M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z', desc: 'Early detection of Skin cancer (basal cell carcinoma, and melanoma)' },
      ]
    },
    {
      title: 'Benign skin lesions',
      items: [
        { icon: 'M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z', desc: 'Benign skin lesions ( Moles, Skin tags, etc.)' },
      ]
    },
    {
      title: 'All types of acne',
      items: [
        { icon: 'M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z', desc: 'All types of acne' },
      ]
    },
    {
      title: 'Doctor Consultation',
      items: [
        { icon: 'M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z', desc: 'Doctor Consultation' },
      ]
    },
    {
      title: 'Quick Assessments',
      items: [
        { icon: 'M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z', desc: 'Quick Assessments' },
      ]
    },
  ];

  return (
    <div className="  w-[100%] text-black bg-gray-100 p-8 rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold mb-4">Why DermCare.AI worth using?</h2>
      <p className="mb-6">AI dermatology offers a promising solution to many of the challenges faced in dermatological care, such as accessibility, accuracy, and speed. It complements the expertise of human dermatologists and has the potential to improve patient outcomes while reducing healthcare costs.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            {section.items.map((item, idx) => (
              <BenefitItem key={idx} icon={item.icon} desc={item.desc} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
