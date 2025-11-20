export default function Pricing() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
  <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Healthcare Business</h2>
      <p className="text-gray-600 text-sm mb-6">Complete toxin detection solution</p>
      <div className="text-5xl font-bold text-blue-600 mb-2">$29</div>
      <p className="text-gray-600 text-sm">one-time payment</p>
    </div>

    <div className="space-y-4 mb-8">
      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700 text-sm">AI-powered scanning: Camera-based product recognition and barcode scanning for instant toxin identification</span>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700 text-sm">Comprehensive toxin database: Microplastics, EDCs, VOCs, heavy metals, carcinogens with health impact analysis</span>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700 text-sm">Personalized health profiles: Custom recommendations based on pregnancy, fertility, children, or specific health conditions</span>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700 text-sm">Safer alternatives marketplace: Curated products with price comparison and user reviews</span>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700 text-sm">Household health tracking: Room-by-room safety scores and progress monitoring as you replace harmful products</span>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700 text-sm">Scientific backing: Research citations and expert verification from toxicologists</span>
      </div>
    </div>

    <button onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=ae44e7b3-2716-48e1-8991-05457bd97080'} className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700">
      Get Your Website - $29
    </button>
  </div>
</section>
  );
}