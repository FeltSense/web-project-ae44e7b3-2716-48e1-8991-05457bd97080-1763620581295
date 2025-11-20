import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse delay-700"></div>
    <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-200/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
  </div>

  {/* Navigation */}
  <nav className="relative z-20 px-6 py-6 lg:px-12">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3 group">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-300/50 transition-all duration-300 group-hover:scale-105">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          AntiVenom
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Features</a>
        <a href="#how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">How It Works</a>
        <a href="#pricing" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Pricing</a>
        <button className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-300/50 transition-all duration-300 hover:scale-105">
          Download App
        </button>
      </div>

      <button className="md:hidden p-2 text-gray-600 hover:text-emerald-600">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>

  {/* Hero Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-20 lg:pt-20 lg:pb-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Column - Text Content */}
      <div className="space-y-8 animate-fade-in">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-emerald-100">
          <span className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            AI-Powered
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-600">Trusted by 100K+ families</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Know What&apos;s
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent animate-gradient">
              Really Inside
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Your Products
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
            Scan any household product and instantly discover hidden toxins, chemicals, and health risks. Get personalized safer alternatives delivered to your door.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Instant AI Scanning</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse delay-300"></div>
            <span className="text-sm font-medium text-gray-700">10,000+ Toxins Tracked</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-700"></div>
            <span className="text-sm font-medium text-gray-700">Safer Alternatives</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-300/30 hover:shadow-2xl hover:shadow-emerald-400/40 transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Free Trial
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-bold text-lg hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              Watch Demo
            </span>
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-6 pt-6 border-t border-gray-200">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white shadow-md"></div>
            ))}
            <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white shadow-md flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">+99K</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">4.9/5</span> from health-conscious families
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - App Preview */}
      <div className="relative lg:pl-8">
        {/* Floating Cards Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute top-10 right-10 w-64 h-80 bg-gradient-to-br from-red-50 to-red-100 rounded-3xl shadow-xl rotate-6 opacity-60 animate-float"></div>
          <div className="absolute bottom-10 left-10 w-64 h-80 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl shadow-xl -rotate-6 opacity-60 animate-float delay-500"></div>
        </div>

        {/* Main Phone Mockup */}
        <div className="relative z-10 mx-auto max-w-sm animate-float-slow">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-20"></div>
            
            {/* Screen Content */}
            <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
              <Image 
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80" 
                width={800} 
                height={1600} 
                alt="AntiVenom app interface showing product scanning and toxin analysis"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay UI Elements */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
              
              {/* Scan Animation Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 border-4 border-emerald-500 rounded-3xl animate-pulse"></div>
                  <div className="absolute inset-0 w-full h-1 bg-emerald-500 animate-scan shadow-lg shadow-emerald-500/50"></div>
                </div>
              </div>

              {/* Bottom Alert Card */}
              <div className="absolute bottom-6 left-4 right-4 bg-white rounded-2xl p-4 shadow-2xl animate-slide-up">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-sm mb-1">3 Toxins Detected</h3>
                    <p className="text-xs text-gray-600 mb-2">BPA, Phthalates, Parabens</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-xs font-bold text-red-600">High Risk</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Status Indicator */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-bounce">
                Scanning Product...
              </div>
            </div>
          </div>

          {/* Floating Info Cards */}
          <div className="absolute -left-8 top-1/4 bg-white rounded-2xl p-4 shadow-xl max-w-[160px] animate-float-slow delay-300 hidden lg:block">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-bold text-gray-900">98% Safe</span>
            </div>
            <p className="text-xs text-gray-600">No harmful chemicals detected</p>
          </div>

          <div className="absolute -right-8 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl max-w-[160px] animate-float-slow delay-700 hidden lg:block">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-gray-900">12 Safer</span>
            </div>
            <p className="text-xs text-gray-600">Alternative products found</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(6deg); }
    50% { transform: translateY(-20px) rotate(6deg); }
  }
  
  @keyframes float-slow {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
  }
  
  @keyframes scan {
    0% { top: 0; }
    50% { top: 100%; }
    51% { top: 0; opacity: 0; }
    100% { top: 0; opacity: 1; }
  }
  
  @keyframes slide-up {
    from { 
      transform: translateY(100%);
      opacity: 0;
    }
    to { 
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }
  
  .animate-scan {
    animation: scan 3s ease-in-out infinite;
  }
  
  .animate-slide-up {
    animation: slide-up 0.6s ease-out forwards;
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }
  
  .delay-300 {
    animation-delay: 300ms;
  }
  
  .delay-500 {
    animation-delay: 500ms;
  }
  
  .delay-700 {
    animation-delay: 700ms;
  }
  
  .delay-1000 {
    animation-delay: 1000ms;
  }
`}</style>
  );
}