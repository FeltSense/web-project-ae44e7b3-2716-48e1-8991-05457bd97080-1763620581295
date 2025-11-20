'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-gray-800">
  {/* Main Footer Content */}
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
    <div className="grid md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
      {/* Brand Section */}
      <div className="flex flex-col">
        <div className="mb-6">
          <h3 className="text-white text-xl font-bold">Healthcare Business</h3>
          <p className="text-gray-400 text-sm mt-2">Transforming healthcare through innovation and compassion.</p>
        </div>
        <div className="flex gap-4 mt-6">
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Facebook">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Twitter">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 002.856-3.915 9.958 9.958 0 01-2.828.856 4.958 4.958 0 00-8.72 4.516A14.046 14.046 0 012.735 2.261a4.948 4.948 0 001.524 6.573 4.914 4.914 0 01-2.25-.616c-.054.3-.054.605 0 .905a4.961 4.961 0 003.97 4.857 4.939 4.939 0 01-2.224.084 4.968 4.968 0 004.636 3.445A9.959 9.959 0 012 18.846a14.047 14.047 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Instagram">
            <svg fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
          </a>
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.807 0-9.726h3.554v1.375c.427-.659 1.191-1.592 2.897-1.592 2.117 0 3.704 1.385 3.704 4.362v5.581zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.708 0-.951.77-1.708 1.915-1.708 1.144 0 1.915.757 1.915 1.708 0 .95-.771 1.708-1.915 1.708zm1.6 11.597H3.738V9.681h3.199v10.771zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z"/></svg>
          </a>
        </div>
      </div>

      {/* Company Links */}
      <div className="flex flex-col">
        <h4 className="text-white text-lg font-semibold mb-6">Company</h4>
        <ul className="space-y-2">
          <li><a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a></li>
          <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Services</a></li>
          <li><a href="#blog" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</a></li>
          <li><a href="#careers" className="text-gray-400 hover:text-cyan-400 transition-colors">Careers</a></li>
        </ul>
      </div>

      {/* Services Links */}
      <div className="flex flex-col">
        <h4 className="text-white text-lg font-semibold mb-6">Services</h4>
        <ul className="space-y-2">
          <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Patient Care</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Telemedicine</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Analytics</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Integration</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Support</a></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col">
        <h4 className="text-white text-lg font-semibold mb-6">Contact</h4>
        <div className="space-y-3">
          <div>
            <p className="text-gray-400 text-sm">Email</p>
            <a href="mailto:hello@healthcarebusiness.com" className="text-gray-300 hover:text-cyan-400 transition-colors">hello@healthcarebusiness.com</a>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Phone</p>
            <a href="tel:+1-800-HEALTH-1" className="text-gray-300 hover:text-cyan-400 transition-colors">+1 (800) 432-5824</a>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Hours</p>
            <p className="text-gray-300">24/7 Support Available</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-gray-400 text-sm">© 2025 Healthcare Business. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#privacy" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">Privacy Policy</a>
        <a href="#terms" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">Terms of Service</a>
        <a href="#compliance" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">Compliance</a>
      </div>
    </div>
  </div>
</footer>
  );
}