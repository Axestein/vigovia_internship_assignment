import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-[#541C9C] transition-colors">Bali Tour Packages</a>
            <a href="#" className="hover:text-[#541C9C] transition-colors">Japan Tour Packages</a>
            <a href="#" className="hover:text-[#541C9C] transition-colors">Vietnam Tour Packages</a>
            <a href="#" className="hover:text-[#541C9C] transition-colors">Malaysia Tour Packages</a>
            <a href="#" className="hover:text-[#541C9C] transition-colors">Thailand Tour Packages</a>
            <a href="#" className="hover:text-[#541C9C] transition-colors">Europe Tour Packages</a>
            <a href="#" className="hover:text-[#541C9C] transition-colors">Cultural Tour Packages</a>
            <a href="#" className="hover:text-[#541C9C] transition-colors">Luxury Tour packages</a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
            <a href="#" className="hover:text-[#541C9C] transition-colors">Dubai Tour Packages</a>
            <a href="#" className="hover:text-[#541C9C] transition-colors">Turkey Tour Packages</a>
            <a href="#" className="hover:text-[#541C9C] transition-colors">UAE Tour Packages</a>
            <a href="#" className="hover:text-[#541C9C] transition-colors">Singapore Tour Packages</a>
            <a href="#" className="hover:text-[#541C9C] transition-colors">Australia Tour Packages</a>
            <a href="#" className="hover:text-[#541C9C] transition-colors">South Korea Tour Packages</a>
            <a href="#" className="hover:text-[#541C9C] transition-colors">Honeymoon Tour packages</a>
            <a href="#" className="hover:text-[#541C9C] transition-colors">Adventure Tour packages</a>
          </div>
        </div>
      </div>

      <div className="bg-[#FBF4FF] px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Our offerings</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Holidays</a></li>
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Visa</a></li>
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Forex</a></li>
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Hotels</a></li>
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Flights</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Popular destinations</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Dubai</a></li>
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Bali</a></li>
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Thailand</a></li>
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Singapore</a></li>
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Malaysia</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Vigovia Specials</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Featured Experience</a></li>
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Group Tours</a></li>
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Backpackers Club</a></li>
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Offline Events</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Vigovia Blog</a></li>
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Partner Portal</a></li>
                <li><a href="#" className="hover:text-[#541C9C] transition-colors">Accreditations</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">More</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-[#541C9C] transition-colors">Investor Relations</a></li>
                  <li><a href="#" className="hover:text-[#541C9C] transition-colors">Forex</a></li>
                  <li><a href="#" className="hover:text-[#541C9C] transition-colors">FAQs</a></li>
                  <li><a href="#" className="hover:text-[#541C9C] transition-colors">Domestic Holidays</a></li>
                </ul>
              </div>

              <div>
                <div className="bg-[#541C9C] text-white px-4 py-2 rounded-full text-sm inline-block mb-3">
                  Need Help? Call us
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">+91-98xxx64641</div>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold mb-1">Email</div>
                  <div className="mb-3">contact@vigovia.com</div>
                  <div className="font-semibold mb-1">Address</div>
                  <div className="leading-relaxed">
                    HD-108 Cinnamon Hills,Links Business<br />
                    Park,Bangalore<br />
                    North,Bangalore,Karnataka,India-560071
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-6 md:mb-0">
<div className="mb-2">
  <img
    src="/logo.png"
    alt="Vigovia Logo"
    className="h-10 object-contain"
  />
</div>
              </div>
              
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900 mb-2">Payments</div>
                <div className="flex gap-2">
                  <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center">💳</div>
                  <div className="w-8 h-6 bg-orange-500 rounded text-white text-xs flex items-center justify-center">💳</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#321E5D] px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white text-sm mb-4 md:mb-0">
              © 2025 Vigovia Travel Technologies (P) Ltd. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Facebook className="w-4 h-4 text-[#321E5D]" />
                </a>
                <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Instagram className="w-4 h-4 text-[#321E5D]" />
                </a>
                <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Linkedin className="w-4 h-4 text-[#321E5D]" />
                </a>
                <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Youtube className="w-4 h-4 text-[#321E5D]" />
                </a>
              </div>
              
              <div className="flex gap-4 text-sm text-white">
                <a href="#" className="hover:text-gray-300 transition-colors">Privacy policy</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Legal notice</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;