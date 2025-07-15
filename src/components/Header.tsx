import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Search, User, Heart, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="bg-white shadow-sm">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="mb-2">
  <img
    src="/logo.png"
    alt="Vigovia Logo"
    className="h-10 object-contain"
  />
</div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-[#541C9C] transition-colors font-medium">
                Holidays
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-[#541C9C] transition-colors font-medium">
                Destinations
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-[#541C9C] transition-colors font-medium">
                Hotels
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-[#541C9C] transition-colors font-medium">
                Flights
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-[#541C9C] transition-colors font-medium">
                Visa
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-[#541C9C] transition-colors font-medium">
                Forex
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-[#541C9C] transition-colors font-medium">
                More
              </a>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search destinations, packages..."
                    className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#541C9C] focus:border-transparent"
                    autoFocus
                  />
                  <button
                    onClick={toggleSearch}
                    className="ml-2 p-2 text-gray-500 hover:text-[#541C9C] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={toggleSearch}
                  className="p-2 text-gray-500 hover:text-[#541C9C] transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            <button className="p-2 text-gray-500 hover:text-[#541C9C] transition-colors relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#541C9C] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>

            <button className="p-2 text-gray-500 hover:text-[#541C9C] transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#541C9C] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                1
              </span>
            </button>

            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#541C9C] transition-colors">
                <User className="w-5 h-5" />
                <span className="hidden sm:inline">Account</span>
              </button>
            </div>

            <button className="bg-[#541C9C] text-white px-6 py-2 rounded-full hover:bg-[#680099] transition-colors font-medium">
              Book Now
            </button>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-500 hover:text-[#541C9C] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            <a href="#" className="block text-gray-700 hover:text-[#541C9C] transition-colors font-medium">
              Holidays
            </a>
            <a href="#" className="block text-gray-700 hover:text-[#541C9C] transition-colors font-medium">
              Destinations
            </a>
            <a href="#" className="block text-gray-700 hover:text-[#541C9C] transition-colors font-medium">
              Hotels
            </a>
            <a href="#" className="block text-gray-700 hover:text-[#541C9C] transition-colors font-medium">
              Flights
            </a>
            <a href="#" className="block text-gray-700 hover:text-[#541C9C] transition-colors font-medium">
              Visa
            </a>
            <a href="#" className="block text-gray-700 hover:text-[#541C9C] transition-colors font-medium">
              Forex
            </a>
            <a href="#" className="block text-gray-700 hover:text-[#541C9C] transition-colors font-medium">
              More
            </a>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-[#541C9C] transition-colors">
                  <User className="w-5 h-5" />
                  <span>My Account</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-700 hover:text-[#541C9C] transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>Wishlist (2)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-[#541C9C] to-[#680099] text-white">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#" className="hover:text-[#936FE0] transition-colors">🔥 Hot Deals</a>
            <a href="#" className="hover:text-[#936FE0] transition-colors">✈️ Last Minute Bookings</a>
            <a href="#" className="hover:text-[#936FE0] transition-colors">🏖️ Summer Specials</a>
            <a href="#" className="hover:text-[#936FE0] transition-colors">💑 Honeymoon Packages</a>
            <a href="#" className="hover:text-[#936FE0] transition-colors">🎒 Group Tours</a>
            <a href="#" className="hover:text-[#936FE0] transition-colors">🌟 Featured Experiences</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;