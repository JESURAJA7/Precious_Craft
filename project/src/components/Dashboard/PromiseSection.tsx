import { Shield, Award, Truck, RefreshCw } from 'lucide-react';

export default function PromiseSection() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-white mb-4">
            <span className="text-blue-300">BlueStone</span> Promise
          </h2>
          <p className="text-blue-100 text-lg">Your trust is our foundation</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">100% Certified</h3>
            <p className="text-blue-100 text-sm">Every piece comes with certification</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Lifetime Exchange</h3>
            <p className="text-blue-100 text-sm">Exchange old gold anytime</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Free Shipping</h3>
            <p className="text-blue-100 text-sm">Delivered safe to your doorstep</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">30-Day Returns</h3>
            <p className="text-blue-100 text-sm">Easy returns and refunds</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8">
          <div className="grid md:grid-cols-4 gap-6 items-center">
            <div className="text-center">
              <img src="https://images.pexels.com/photos/262438/pexels-photo-262438.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Times" className="h-12 mx-auto grayscale opacity-60" />
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-bold text-xl">Entrepreneur</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-bold text-xl">VOGUE</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-bold text-xl">ELLE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
