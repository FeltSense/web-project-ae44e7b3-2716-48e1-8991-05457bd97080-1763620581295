import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
  {/* Floating background elements */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-16 space-y-4">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
        <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-sm font-semibold text-emerald-700">Trusted by 50,000+ Families</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
        Real families, real results
      </h2>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        Discover how AntiVenom is helping people uncover hidden toxins and create healthier homes
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {/* Testimonial 1 - Parent Success */}
      <div className="bg-white rounded-3xl p-8 shadow-lg shadow-emerald-100/50 hover:shadow-xl hover:shadow-emerald-200/50 transition-all duration-300 hover:-translate-y-1 border border-emerald-100/50">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 text-lg leading-relaxed mb-6">
          "I scanned my daughter&apos;s favorite shampoo and discovered it contained 3 endocrine disruptors. Within two weeks of switching to AntiVenom&apos;s recommended alternatives, her eczema improved by 80%. I&apos;ve now replaced 47 products in our home and feel like I&apos;m finally protecting my kids properly."
        </p>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
              width={56} 
              height={56} 
              alt="Sarah Mitchell"
              className="rounded-full object-cover ring-4 ring-emerald-100"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Sarah Mitchell</h4>
            <p className="text-sm text-slate-500">Mother of 3, Portland</p>
            <p className="text-xs text-emerald-600 font-semibold mt-1">Premium Member • 6 months</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 - Fertility Journey */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 shadow-lg shadow-emerald-300/50 hover:shadow-xl hover:shadow-emerald-400/50 transition-all duration-300 hover:-translate-y-1 text-white lg:col-span-1 md:col-span-2 lg:row-span-2">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="space-y-6">
          <p className="text-white/95 text-xl leading-relaxed">
            "After 18 months trying to conceive, my fertility doctor recommended reducing chemical exposure. AntiVenom&apos;s pregnancy mode was a game-changer. I identified 23 hormone-disrupting products I was using daily—cleaning sprays, cosmetics, even my water bottle."
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="text-white/95 text-lg leading-relaxed mb-4">
              "I replaced everything with safer alternatives from their marketplace. Four months later, we got our positive test. My doctor said reducing toxin exposure likely played a significant role. This app literally helped us start our family."
            </p>
          </div>
          <div className="flex items-center gap-4 pt-4 border-t border-white/20">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
                width={64} 
                height={64} 
                alt="Jessica Chen"
                className="rounded-full object-cover ring-4 ring-white/30"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-emerald-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white text-lg">Jessica Chen</h4>
              <p className="text-sm text-white/80">Marketing Director, San Francisco</p>
              <p className="text-xs text-amber-300 font-semibold mt-1">Family Plan Member • 1 year</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 - Chemical Sensitivity */}
      <div className="bg-white rounded-3xl p-8 shadow-lg shadow-teal-100/50 hover:shadow-xl hover:shadow-teal-200/50 transition-all duration-300 hover:-translate-y-1 border border-teal-100/50">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 text-lg leading-relaxed mb-6">
          "Living with multiple chemical sensitivity meant spending hours researching every product. AntiVenom cut my shopping time from 3 hours to 20 minutes. The barcode scanner instantly tells me if something will trigger my symptoms. I&apos;ve scanned over 300 products and haven&apos;t had a reaction since switching to their recommendations."
        </p>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
              width={56} 
              height={56} 
              alt="Marcus Johnson"
              className="rounded-full object-cover ring-4 ring-teal-100"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-teal-500 rounded-full border-2 border-white flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Marcus Johnson</h4>
            <p className="text-sm text-slate-500">Software Engineer, Austin</p>
            <p className="text-xs text-teal-600 font-semibold mt-1">Premium Member • 8 months</p>
          </div>
        </div>
      </div>

      {/* Testimonial 4 - Budget-Conscious Parent */}
      <div className="bg-white rounded-3xl p-8 shadow-lg shadow-emerald-100/50 hover:shadow-xl hover:shadow-emerald-200/50 transition-all duration-300 hover:-translate-y-1 border border-emerald-100/50 lg:col-span-2">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              "I thought &apos;non-toxic&apos; meant expensive organic brands I couldn&apos;t afford. AntiVenom showed me budget-friendly alternatives at Target and Walmart that scored just as well as the pricey stuff. My son&apos;s asthma attacks dropped from 2-3 per month to zero after replacing our cleaning products."
            </p>
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
              <p className="text-slate-700 text-base">
                "The price comparison feature saved me $340 last year while still getting safer products. Worth every penny of the subscription."
              </p>
            </div>
          </div>
          <div className="flex md:flex-col items-center md:items-end gap-4">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop" 
                width={80} 
                height={80} 
                alt="Priya Patel"
                className="rounded-full object-cover ring-4 ring-emerald-100"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-left md:text-right">
              <h4 className="font-bold text-slate-900 text-lg">Priya Patel</h4>
              <p className="text-sm text-slate-500">Teacher & Mom, Chicago</p>
              <p className="text-xs text-emerald-600 font-semibold mt-1">Family Plan • 10 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Bar */}
    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-emerald-300/30">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold mb-2">2.1M+</div>
          <div className="text-emerald-100 text-sm md:text-base">Products Scanned</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
          <div className="text-emerald-100 text-sm md:text-base">Active Families</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold mb-2">89%</div>
          <div className="text-emerald-100 text-sm md:text-base">Report Health Improvements</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold mb-2">4.9★</div>
          <div className="text-emerald-100 text-sm md:text-base">App Store Rating</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}