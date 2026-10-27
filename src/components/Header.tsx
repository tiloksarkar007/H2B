import React, { useState, useEffect, useRef } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';

export const Header: React.FC = () => {
  const { path } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);
  const wasOpenRef = useRef(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [path]);

  // Focus management when menu opens / closes
  useEffect(() => {
    if (mobileMenuOpen) {
      wasOpenRef.current = true;
      // Focus the close button when opened
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else if (wasOpenRef.current) {
      // Return focus to menu button when closed
      menuButtonRef.current?.focus();
      wasOpenRef.current = false;
    }
  }, [mobileMenuOpen]);

  // Keyboard trap and Escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!mobileMenuOpen) return;

      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        return;
      }

      // Trap focus within mobile navigation modal
      if (e.key === 'Tab' && mobileNavRef.current) {
        const focusableElements = mobileNavRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAFAF7] border-b border-[#E5E6DC] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo / Wordmark */}
            <Link 
              to="/" 
              className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] rounded-md px-1 py-0.5"
              aria-label="Hub2Biz homepage"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#10243A] text-white font-bold text-lg tracking-tight group-hover:bg-[#087F8C] transition-colors">
                H<span className="text-[#F28C45]">2</span>B
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-[#10243A]">
                Hub<span className="text-[#087F8C]">2</span>Biz
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = path === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                      isActive
                        ? 'text-[#087F8C] bg-[#EBF7F8]'
                        : 'text-[#10243A] hover:text-[#087F8C] hover:bg-black/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Header Action */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/contact?intent=consultation"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#087F8C] hover:bg-[#066570] shadow-sm transition-all active:scale-[0.98]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Request a Consultation</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-lg text-[#10243A] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
                aria-label="Open main menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div 
          ref={mobileNavRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="md:hidden fixed inset-0 z-50 bg-[#FAFAF7] flex flex-col justify-between overflow-y-auto"
        >
          {/* Mobile Overlay Header with Close Button */}
          <div className="flex items-center justify-between h-20 px-4 sm:px-6 border-b border-[#E5E6DC] bg-[#FAFAF7]">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2"
              aria-label="Hub2Biz homepage"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#10243A] text-white font-bold text-lg tracking-tight">
                H<span className="text-[#F28C45]">2</span>B
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-[#10243A]">
                Hub<span className="text-[#087F8C]">2</span>Biz
              </span>
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg text-[#10243A] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C]"
              aria-label="Close main menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links Body */}
          <div className="flex-1 p-6 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#5B6B7C] px-2">
              Main Menu
            </div>
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = path === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-bold ${
                      isActive
                        ? 'text-[#087F8C] bg-[#EBF7F8]'
                        : 'text-[#10243A] hover:bg-black/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#E5E6DC]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#5B6B7C] px-2 pb-2">
                Outreach Capabilities
              </div>
              <div className="space-y-1">
                <Link
                  to="/services#cold-calling"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-[#10243A] hover:bg-black/5 hover:text-[#087F8C]"
                >
                  B2B Cold Calling
                </Link>
                <Link
                  to="/services#lead-research"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-[#10243A] hover:bg-black/5 hover:text-[#087F8C]"
                >
                  Lead Research & Identification
                </Link>
                <Link
                  to="/services#lead-qualification"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-[#10243A] hover:bg-black/5 hover:text-[#087F8C]"
                >
                  Lead Qualification
                </Link>
                <Link
                  to="/services#appointment-setting"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-[#10243A] hover:bg-black/5 hover:text-[#087F8C]"
                >
                  Appointment Setting
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="p-6 border-t border-[#E5E6DC] bg-[#F3F3ED]/60 space-y-3">
            <Link
              to="/contact?intent=consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-base font-bold text-white bg-[#087F8C] hover:bg-[#066570] text-center shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Request a Consultation</span>
            </Link>
            <p className="text-xs text-center text-[#5B6B7C]">
              Focused outreach for B2B sales teams.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
