/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { matchedRoute, queryParams } = useRouter();

  // Dynamic document title update for accessible navigation
  useEffect(() => {
    switch (matchedRoute) {
      case '/':
        document.title = 'Hub2Biz | B2B Cold Calling & Lead Generation';
        break;
      case '/about':
        document.title = 'About Hub2Biz | Human-Led B2B Outreach';
        break;
      case '/services':
        document.title = 'Services | Cold Calling, Research & Appointment Setting | Hub2Biz';
        break;
      case '/contact':
        if (queryParams.intent === 'callback') {
          document.title = 'Request a Phone Callback | Hub2Biz';
        } else {
          document.title = 'Request a Consultation | Hub2Biz';
        }
        break;
      case '/privacy':
        document.title = 'Privacy Policy & Deployment Guide | Hub2Biz';
        break;
      default:
        document.title = 'Page Not Found | Hub2Biz';
        break;
    }
  }, [matchedRoute, queryParams.intent]);

  const renderActivePage = () => {
    switch (matchedRoute) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/services':
        return <ServicesPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy':
        return <PrivacyPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#10243A] selection:bg-[#087F8C] selection:text-white">
      {/* Skip to main content link for screen reader accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#087F8C] focus:text-white focus:rounded-md focus:shadow-md"
      >
        Skip to main content
      </a>

      <Header />
      <main id="main-content" className="flex-1 focus:outline-none">
        {renderActivePage()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
