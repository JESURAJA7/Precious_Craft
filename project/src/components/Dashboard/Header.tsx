import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, User, Heart, ShoppingBag, Menu, Phone, UserPlus } from "lucide-react"
import logo from "../../assets/logo.png"

export default function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200  z-50 shadow-sm hover:shadow-md transition-shadow">
      {/* Top Bar - Reduced height */}
      <div className="bg-navy-900 text-white text-xs py-1.5 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="truncate">FREE SHIPPING | COD AVAILABLE | 100% CERTIFIED JEWELLERY</p>
        </div>
      </div>

      {/* Contact & Auth Bar - Reduced height */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center gap-11">
          {/* Contact Info */}
          {/* <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            <span>1-800-419-0066</span>
          </div> */}
           {/* Left Section - Menu & Logo */}
          <div className="flex items-center gap-6 flex-1 ">
            <button className="lg:hidden p-1 hover:bg-gray-100 rounded-md transition-colors">
              <Menu className="w-5 h-5 text-gray-700" />
            </button>

            <Link to="/" className="flex items-center gap-2 min-w-0">
              <div className="w-10 h-10 flex-shrink-0">
                <img 
                  src={logo} 
                  alt="Precious Craft Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl italic font-bold text-purple-900 whitespace-nowrap">
                Precious Craft
              </span>
            </Link>
          </div>

               {/* Search Bar - Center */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search jewelry, designs, etc..."
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent bg-white text-gray-900 placeholder-gray-500 transition-all duration-200 text-sm"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
          
          {/* Auth Links */}
          <div className="flex items-center gap-4">
            <Link to="#" className="hover:text-accent transition-colors duration-200">
              Video Call Cart
            </Link>
            <button className="hover:text-accent transition-colors duration-200 flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              Login
            </button>
            <button className="hover:text-accent transition-colors duration-200 flex items-center gap-1">
              <UserPlus className="w-3.5 h-3.5" />
              Signup
            </button>
          </div>

          {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button className="flex flex-col items-center gap-0.5 hover:text-blue-900 transition-colors group">
                <User className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
                <span className="text-xs">Account</span>
              </button>
              <button className="flex flex-col items-center gap-0.5 hover:text-blue-900 transition-colors group">
                <Heart className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
                <span className="text-xs">Wishlist</span>
              </button>
              <button className="flex flex-col items-center gap-0.5 hover:text-blue-900 transition-colors group relative">
                <ShoppingBag className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
                <span className="text-xs">Cart</span>
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  0
                </span>
              </button>
            </div>
        </div>
      </div>

      {/* Main Header - Reduced padding */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-6">
         

     

          {/* Right Actions */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Mobile Search */}
            <button className="md:hidden p-1.5 hover:bg-gray-100 rounded-md transition-colors">
              <Search className="w-4.5 h-4.5 text-gray-700" />
            </button>
            
            

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-3">
              <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors relative">
                <User className="w-4.5 h-4.5" />
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors">
                <Heart className="w-4.5 h-4.5" />
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors relative">
                <ShoppingBag className="w-4.5 h-4.5" />
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs w-3.5 h-3.5 rounded-full flex items-center justify-center text-[10px]">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation - Reduced height */}
      <nav className="border-t border-purple-200 bg-purple-50 sticky top-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-6 py-2 overflow-x-auto text-[13px] font-medium text-purple-700">
            <Link 
              to="#" 
              className="whitespace-nowrap hover:text-purple-900 transition-colors duration-200 py-1 px-2 rounded-md hover:bg-purple-100"
            >
              Home
            </Link>
            <Link 
              to="#" 
              className="whitespace-nowrap hover:text-purple-900 transition-colors duration-200 py-1 px-2 rounded-md hover:bg-purple-100"
            >
              Gold
            </Link>
            <Link 
              to="#" 
              className="whitespace-nowrap hover:text-purple-900 transition-colors duration-200 py-1 px-2 rounded-md hover:bg-purple-100"
            >
              Silver
            </Link>
            <Link 
              to="#" 
              className="whitespace-nowrap hover:text-purple-900 transition-colors duration-200 py-1 px-2 rounded-md hover:bg-purple-100"
            >
              Brass
            </Link>
            <Link 
              to="#" 
              className="whitespace-nowrap hover:text-purple-900 transition-colors duration-200 py-1 px-2 rounded-md hover:bg-purple-100"
            >
              About us
            </Link>
            <Link 
              to="#" 
              className="whitespace-nowrap hover:text-purple-900 transition-colors duration-200 py-1 px-2 rounded-md hover:bg-purple-100"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}