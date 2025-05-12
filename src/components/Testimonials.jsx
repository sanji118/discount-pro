import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration for smooth animations
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      review: 'This is an amazing website! I found the best deals here and saved a lot of money.',
      rating: 5
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Highly recommend! The coupons worked perfectly and the site was very easy to navigate.',
      rating: 4
    },
    {
      id: 3,
      name: 'Chris Johnson',
      review: 'Fantastic! I was able to find a great deal on my favorite brand. Thank you!',
      rating: 5
    },
  ];

  return (
    <div className="px-4 md:px-10 py-6">
      <h2 className="text-center text-3xl font-bold oswald my-10">What Our Users Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            data-aos="fade-up" // AOS animation for fade-up
            className="testimonial-card p-5 border rounded-lg shadow-lg text-center"
          >
            <h3 className="font-semibold text-xl mb-2">{testimonial.name}</h3>
            <p className="text-gray-600 mb-4">{testimonial.review}</p>

            <div className="flex justify-center mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={`star-${i}`} className="text-yellow-400">★</span>
              ))}
            </div>

            <p className="text-sm text-gray-500">Rating: {testimonial.rating} out of 5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

