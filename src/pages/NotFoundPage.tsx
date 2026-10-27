import React from 'react';
import { Link } from '../context/RouterContext';
import { Home, PhoneCall, AlertCircle, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 sm:py-32 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
      <div className="w-16 h-16 rounded-2xl bg-[#EBF7F8] text-[#087F8C] flex items-center justify-center mx-auto shadow-sm">
        <AlertCircle className="w-8 h-8" />
      </div>

      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#087F8C]">
          Error 404 — Page Not Found
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#10243A] tracking-tight">
          The requested page could not be found.
        </h1>
        <p className="text-base sm:text-lg text-[#475569] max-w-lg mx-auto leading-relaxed">
          The link you followed may be outdated, or the address may have been entered incorrectly. You can return home or contact our team directly.
        </p>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#10243A] hover:bg-[#087F8C] transition-colors w-full sm:w-auto shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#10243A] bg-white border border-[#E5E6DC] hover:bg-[#F3F3ED] transition-colors w-full sm:w-auto shadow-xs"
        >
          <PhoneCall className="w-4 h-4 text-[#087F8C]" />
          <span>Contact Hub2Biz</span>
        </Link>
      </div>

      <div className="pt-8 border-t border-[#E5E6DC] max-w-sm mx-auto text-xs text-[#5B6B7C]">
        Looking for our core services? Jump to{' '}
        <Link to="/services" className="text-[#087F8C] underline font-semibold hover:text-[#066570]">
          Services Overview
        </Link>
        .
      </div>
    </div>
  );
};
