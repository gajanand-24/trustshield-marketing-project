import React, { useState } from 'react';
import LiveDemoSection from './components/LiveDemoSection';
import ProductMarketingSection from './components/ProductMarketingSection';
import PerformanceMarketingSection from './components/PerformanceMarketingSection';
import ContentMarketingSection from './components/ContentMarketingSection';
import ResumePortfolioSection from './components/ResumePortfolioSection';

import { ShieldCheck, Cpu, Target, TrendingUp, BookOpen, Briefcase, Sparkles, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('demo'); // 'demo', 'pmm', 'performance', 'content', 'resume'

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <header className="navbar">
        <div className="brand-logo">
          <div className="brand-icon">
            <ShieldCheck size={26} />
          </div>
          <div>
            <div className="brand-title">
              <span className="gradient-text">TrustShield</span> AI
            </div>
            <div className="brand-subtitle">NLP Spam SMS & Fake Review Detection — Marketing & Portfolio Suite</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="nav-tabs">
          <button 
            className={`nav-tab-btn ${activeTab === 'demo' ? 'active' : ''}`}
            onClick={() => setActiveTab('demo')}
          >
            <Cpu size={16} /> Live Product Demo
          </button>
          <button 
            className={`nav-tab-btn ${activeTab === 'pmm' ? 'active' : ''}`}
            onClick={() => setActiveTab('pmm')}
          >
            <Target size={16} /> Product Marketing (PMM)
          </button>
          <button 
            className={`nav-tab-btn ${activeTab === 'performance' ? 'active' : ''}`}
            onClick={() => setActiveTab('performance')}
          >
            <TrendingUp size={16} /> Performance & Paid Media
          </button>
          <button 
            className={`nav-tab-btn ${activeTab === 'content' ? 'active' : ''}`}
            onClick={() => setActiveTab('content')}
          >
            <BookOpen size={16} /> Content & SEO Strategy
          </button>
          <button 
            className={`nav-tab-btn ${activeTab === 'resume' ? 'active' : ''}`}
            onClick={() => setActiveTab('resume')}
          >
            <Briefcase size={16} /> Resume & Portfolio Kit
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main>
        {activeTab === 'demo' && <LiveDemoSection />}
        {activeTab === 'pmm' && <ProductMarketingSection />}
        {activeTab === 'performance' && <PerformanceMarketingSection />}
        {activeTab === 'content' && <ContentMarketingSection />}
        {activeTab === 'resume' && <ResumePortfolioSection />}
      </main>

      {/* Footer */}
      <footer style={{ marginTop: '4rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        <p>
          TrustShield AI Portfolio Project • Built for <strong>Product Marketing</strong> | <strong>Performance Marketing</strong> | <strong>Content Marketing</strong> Roles
        </p>
      </footer>
    </div>
  );
}
