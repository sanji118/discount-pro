
import { FaQuestionCircle, FaShoppingBag, FaShareAlt, FaEnvelope, FaMobileAlt, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { BsCashCoin } from 'react-icons/bs';
import { HiOutlineNewspaper } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <FaQuestionCircle className="text-blue-600" /> Help & Support
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-600">How It Works</a></li>
              <li><a href="#" className="hover:text-blue-600">Missing Cashback Claims</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>

          {/* Discount Pro */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <FaShoppingBag className="text-blue-600" /> Discount Pro
            </h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Press</a></li>
              <li><a href="#" className="hover:text-blue-600">Media</a></li>
              <li><a href="#" className="hover:text-blue-600">List Your Business</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-bold items-center mb-4 flex gap-2">
              <BsCashCoin className="text-blue-600" /> Earning Benefits
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Shopping Assistant</a></li>
              <li><a href="#" className="hover:text-blue-600">Share & Earn</a></li>
              <li><a href="#" className="hover:text-blue-600">Refer & Earn</a></li>
            </ul>
          </div>

          
          <div className="col-span-3 flex flex-col md:flex-row gap-10 md:gap-20">
            
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <HiOutlineNewspaper className="text-blue-600" /> Latest From The Blog
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-600">Beat the Heat: Best Summer Essentials</a></li>
                <li><a href="#" className="hover:text-blue-600">Prettia Malevia</a></li>
              </ul>
            </div>

            
            <div className='w-1/2'>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <MdWork className="text-blue-600" /> We Are Hiring!
              </h3>
              <p className="mb-2">Seeking deal-driven superheroes! Join the discount hunters at Discount Pro and embark on an epic mission to save money and conquer the world of savings.</p>
              <a href="#" className="btn btn-sm btn-primary">See All Jobs</a>
            </div>
          </div>
        </div>

        {/* Subscribe section */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className='flex flex-col gap-3'>
              <div className="flex items-center gap-2">
                <FaMobileAlt className="text-2xl text-blue-600" />
                <h3 className="text-xl font-bold">Download App</h3>
              </div>
              <div className="flex gap-6 text-2xl justify-center">
                  <a
                    href="https://www.facebook.com/share/1L55ozQWig/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ade953] transition"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/.simply_daisy?igsh=MTJqMDM5MXh4bmpxdA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ade953] transition"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://github.com/sanji118"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ade953] transition"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <FaEnvelope className="text-blue-600" /> Subscribe To Discount Pro
              </h3>
              <p className="mb-2">Get The Best Deals & Offers In Your Email:</p>
              <div className="join w-full">
                <input 
                  type="email" 
                  placeholder="Enter your e-mail address" 
                  className="input bg-white shadow-md join-item w-full" 
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-300 text-center">
          <p className="text-sm">© 2025 Discount Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;