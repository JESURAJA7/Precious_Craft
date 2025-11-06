import { useState, useEffect } from "react";

interface Testimonial {
  id: string;
  image: string;
  name: string;
  age: number;
  quote: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Calculate visible testimonials for different screen sizes
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const visibleCount = getVisibleCount();
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  return (
    <div className="w-full py-16 bg-gradient-to-b from-white to-pink-50/30">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 font-serif">
        Customer Testimonials
      </h2>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextTestimonial}
          disabled={currentIndex >= maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Container */}
        <div 
          className="flex gap-8 transition-transform duration-500 ease-out overflow-hidden"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 transition-all duration-500 ease-out"
              style={{
                width: `${100 / visibleCount}%`,
                minWidth: `${100 / visibleCount}%`,
              }}
            >
              <div
                className={`relative pt-12 pb-6 transition-all duration-500 ${
                  index === currentIndex 
                    ? 'scale-105 opacity-100' 
                    : index === currentIndex + 1 || index === currentIndex - 1
                    ? 'scale-100 opacity-80'
                    : 'scale-95 opacity-60'
                }`}
                style={{
                  transform: `perspective(1200px) rotateY(${
                    (index - currentIndex) * 8
                  }deg) rotateZ(${
                    (index - currentIndex) * 2
                  }deg)`,
                }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full shadow-lg">
                    <div className="w-6 h-6 border-2 border-pink-500 rounded-full" />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-200/50">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-200/40 to-transparent" />
                    
                    {/* Active indicator */}
                    {index === currentIndex && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                          Active
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <p className="text-sm font-semibold text-gray-900">
                      {testimonial.name}
                      <span className="font-normal text-gray-700">, {testimonial.age}</span>
                    </p>

                    <p className="text-xs text-gray-500 mt-1 font-medium">BlueStone Customer</p>

                    <p className="text-sm text-gray-700 leading-relaxed mt-4 line-clamp-5">
                      {testimonial.quote}
                    </p>

                    {/* Rating Stars */}
                    <div className="flex items-center mt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-xs text-gray-500">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {testimonials.slice(0, maxIndex + 1).map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-pink-500 w-8 h-3'
                  : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play toggle */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            <div className={`w-3 h-3 rounded-full border-2 border-gray-600 ${isAutoPlaying ? 'bg-gray-600' : ''}`} />
            {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
          </button>
        </div>
      </div>
    </div>
  );
}