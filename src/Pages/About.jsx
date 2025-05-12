import React from 'react';
import { FaUserFriends, FaHeart, FaUserPlus } from 'react-icons/fa';

const About = () => {
  return (
    <div className="px-6 md:px-20 py-10 max-w-5xl mx-auto space-y-10 text-gray-800">
      
      {/* Website Info */}
      <section className="space-y-4">
        <h1 className="oswald text-3xl md:text-4xl font-bold text-[#587717]">
          About Our Coupon Site
        </h1>
        <p className="text-lg leading-relaxed">
          Welcome to our <span className="font-semibold">Discount Pro</span> – your go-to destination
          for saving big on your favorite brands! We gather exclusive coupons, promo codes, and
          seasonal discounts to help you get the best deals without the hassle.
        </p>
      </section>

      {/* Fake Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white">
        <div className="bg-[#6d912e] p-6 rounded-lg shadow-md">
          <FaUserFriends className="text-3xl mx-auto mb-2" />
          <h3 className="text-xl font-bold oswald">25,000+</h3>
          <p className="text-sm opacity-80">Active Users</p>
        </div>
        <div className="bg-[#5f8715] p-6 rounded-lg shadow-md">
          <FaUserPlus className="text-3xl mx-auto mb-2" />
          <h3 className="text-xl font-bold oswald">8,400+</h3>
          <p className="text-sm opacity-80">Followers</p>
        </div>
        <div className="bg-[#4d6c12] p-6 rounded-lg shadow-md">
          <FaHeart className="text-3xl text-red-300 mx-auto mb-2" />
          <h3 className="text-xl font-bold oswald">36,000+</h3>
          <p className="text-sm opacity-80">Total Likes</p>
        </div>
      </section>

      {/* About Me */}
      <section className="space-y-4">
        <h2 className="oswald text-2xl font-bold text-[#5f8715]">About Me</h2>
        <p className="text-base leading-relaxed">
          I'm a passionate full-stack web developer with a strong focus on frontend development using
          <span className="font-medium"> React, Tailwind CSS, and Firebase</span>. I love building clean,
          responsive, and user-friendly interfaces.
        </p>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="oswald text-2xl font-bold text-[#5f8715]">Skills</h2>
        <ul className="list-disc list-inside text-base">
          <li>Frontend: React.js, Tailwind CSS, DaisyUI, JavaScript, HTML5, CSS3</li>
          <li>Backend: Firebase Auth, Firestore, Node.js (basic), Express (basic)</li>
          <li>Tools & Tech: Git, GitHub, Vite, REST API, React Router</li>
        </ul>
      </section>

      {/* Other Projects */}
      <section className="space-y-4">
        <h2 className="oswald text-2xl font-bold text-[#5f8715]">Other Projects</h2>
        <ul className="list-disc list-inside text-base">
          <li><span className="font-medium">Task Manager App</span> – A productivity tool with task boards, reminders, and Firebase auth.</li>
          <li><span className="font-medium">Recipe Sharing Platform</span> – Users can post, save, and explore recipes. Built with MERN stack.</li>
          <li><span className="font-medium">Portfolio Website</span> – A sleek personal portfolio to showcase projects and skills.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;


