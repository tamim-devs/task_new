import React, { useState } from 'react';

const Section3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Customer Focused',
      content: 'We prioritize our customers’ needs and ensure the best experience for them.',
      imageUrl: 'https://via.placeholder.com/800x400/3498db/ffffff?text=Customer+Focused'
    },
    {
      title: 'Agile and Adaptable',
      content: 'We embrace change and adapt quickly to ensure continuous improvement.',
      imageUrl: 'https://via.placeholder.com/800x400/2ecc71/ffffff?text=Agile+and+Adaptable'
    },
    {
      title: 'Compliance Ready',
      content: 'We adhere to industry standards and regulations for maximum compliance.',
      imageUrl: 'https://via.placeholder.com/800x400/e74c3c/ffffff?text=Compliance+Ready'
    },
    {
      title: 'Secure and Safe',
      content: 'Security is our top priority to protect users and their data.',
      imageUrl: 'https://via.placeholder.com/800x400/f39c12/ffffff?text=Secure+and+Safe'
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`px-4 py-2 font-medium rounded-lg transition-all duration-300 ${
              currentSlide === index
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            {slide.title}
          </button>
        ))}
      </div>

      {/* Slide Content */}
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
        <div className="flex w-full transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 flex flex-row items-center">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-1/2 h-full object-cover rounded-l-lg"
              />
              <div className="w-1/2 p-6 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {slide.title}
                </h2>
                <p className="text-gray-600 text-lg">
                  {slide.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
