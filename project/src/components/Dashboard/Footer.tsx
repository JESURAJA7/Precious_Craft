import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-lg mb-4">ABOUT US</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press & Media</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">CUSTOMER CARE</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Track Order</a></li>
              <li><a href="#" className="hover:text-white">Returns & Exchange</a></li>
              <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">POLICIES</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Gold Rate</a></li>
              <li><a href="#" className="hover:text-white">Diamond Price</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">CONNECT WITH US</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-blue-200">Download Our App</p>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
            <p>© 2024 Precious Craft.com. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span>India's Most Trusted Online Jeweller</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900/50 py-8 px-4">
        <div className="max-w-7xl mx-auto text-xs text-blue-300 space-y-4">
          <p>
            <strong>Popular Searches:</strong> Gold Rings | Diamond Rings | Gold Earrings | Diamond Earrings | Gold Pendants | Diamond Pendants | Gold Chains | Gold Necklaces | Diamond Necklaces | Gold Bangles | Diamond Bangles | Gold Bracelets | Diamond Bracelets | Nose Pins | Mangalsutra | Gold Coins
          </p>
          <p>
            <strong>About Precious Craft:</strong> Precious Craft is India's favourite online jewellery store, with a wide selection of jewellery that has something for everyone. Our designs are certified by multiple international labs, and we offer free shipping across India. We also offer easy exchange, 30-day money-back, and lifetime exchange benefits.
          </p>
        </div>
      </div>
    </footer>
  );
}
