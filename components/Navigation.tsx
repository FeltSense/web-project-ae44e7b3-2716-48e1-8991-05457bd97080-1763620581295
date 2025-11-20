'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo & Brand */}
      <div className="flex items-center gap-2 flex-shrink-0 group cursor-pointer">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
          <span className="text-white font-bold text-lg">AV</span>
        </div>
        <div className="hidden sm:flex flex-col">
          <span className="font-semibold text-slate-900 text-sm leading-tight">AntiVenom</span>
          <span className="text-xs text-cyan-600 font-medium">HealthTech</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <Link href="/" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200">
          Home
        </Link>
        <a href="#about" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200">
          About
        </a>
        <a href="#blog" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200">
          Blog
        </a>
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200">
          Sign In
        </button>
        <button className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors">
        <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</nav>
  );
}