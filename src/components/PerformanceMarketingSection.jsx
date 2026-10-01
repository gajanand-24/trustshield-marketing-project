import React, { useState } from 'react';
import { PERFORMANCE_CAMPAIGNS } from '../data/marketingData';
import { TrendingUp, DollarSign, MousePointer, Target, Eye, Layers, Sliders, CheckSquare, Zap, ExternalLink } from 'lucide-react';

export default function PerformanceMarketingSection() {
  const [activeSubTab, setActiveSubTab] = useState('ad-sandbox'); // 'ad-sandbox', 'calculator', 'cro'
  const [selectedAdIdx, setSelectedAdIdx] = useState(0);

  // Dynamic ROI Calculator State
  const [monthlySpend, setMonthlySpend] = useState(5000);
  const [avgCpc, setAvgCpc] = useState(2.50);
  const [landingPageCvr, setLandingPageCvr] = useState(8.5); // %
  const [trialToPaidCvr, setTrialToPaidCvr] = useState(25.0); // %
  const [arpu, setArpu] = useState(79); // $ MRR per merchant customer

  // Dynamic Calculations
  const clicks = Math.round(monthlySpend / avgCpc);
  const trials = Math.round(clicks * (landingPageCvr / 100));
  const paidCustomers = Math.round(trials * (trialToPaidCvr / 100));
  const cac = paidCustomers > 0 ? Math.round(monthlySpend / paidCustomers) : 0;
  const monthlyRevenue = paidCustomers * arpu;
  const arr = monthlyRevenue * 12;
  const roas = monthlySpend > 0 ? (monthlyRevenue / monthlySpend).toFixed(2) : 0;

  const activeAd = PERFORMANCE_CAMPAIGNS[selectedAdIdx];

  return (
    <div className="performance-section">
      <div className="section-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-emerald"><TrendingUp size={14} /> Performance & Paid Media</span>
          <span className="badge badge-cyan"><DollarSign size={14} /> Unit Economics</span>
        </div>
        <h2 className="section-title">
          Performance Marketing, Ad Creatives & ROI Calculator
        </h2>
        <p className="section-desc">
          Execute scalable paid user acquisition across Meta, Google, and LinkedIn. Test real ad creatives, dynamically simulate customer acquisition costs (CAC) and ROAS, and analyze CRO experiment roadmaps.
        </p>
      </div>

      {/* Subnav Pills */}
      <div className="subnav-pills">
        <button 
          className={`subnav-pill ${activeSubTab === 'ad-sandbox' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('ad-sandbox')}
        >
          <MousePointer size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          Paid Ad Creative & Copy Sandbox
        </button>
        <button 
          className={`subnav-pill ${activeSubTab === 'calculator' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('calculator')}
        >
          <Sliders size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          Interactive ROI & CAC Calculator
        </button>
        <button 
          className={`subnav-pill ${activeSubTab === 'cro' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('cro')}
        >
          <Zap size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          Landing Page CRO A/B Experiments
        </button>
      </div>

      {/* SUBTAB 1: AD CREATIVE SANDBOX */}
      {activeSubTab === 'ad-sandbox' && (
        <div className="grid-2">
          {/* Ad Selection List */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={18} className="gradient-text-emerald" /> Select Paid Channel Strategy
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
              {PERFORMANCE_CAMPAIGNS.map((item, idx) => (
                <div 
                  key={idx}
                  className={`glass-card-interactive ${selectedAdIdx === idx ? 'active' : ''}`}
                  onClick={() => setSelectedAdIdx(idx)}
                  style={{ padding: '1rem' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>{item.platform}</span>
                    <span className="badge badge-emerald">CTR: {item.predictedCTR}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Format: {item.adFormat} | CPC: {item.estimatedCPC}
                  </div>
                </div>
              ))}
            </div>

            {/* Platform Strategy Breakdown */}
            <div className="highlight-box">
              <div style={{ fontWeight: 600, color: 'var(--accent-emerald)', marginBottom: '0.25rem' }}>Target Audience & Intent:</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{activeAd.targetAudience}</p>
            </div>
          </div>

          {/* Ad Card Mockup Preview */}
          <div className="glass-card" style={{ background: '#0b1120', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge badge-emerald"><Eye size={12} /> Live Ad Mockup</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>CPC: {activeAd.estimatedCPC}</span>
              </div>

              {/* Ad Image Render */}
              <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src="/ad-creative.png" alt="Ad Creative Mockup" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.85)', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', color: '#fff' }}>
                  Sponsored • TrustShield AI
                </div>
              </div>

              {/* Ad Copy Text */}
              <h4 style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 700, marginBottom: '0.5rem' }}>
                {activeAd.headline}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                {activeAd.primaryText}
              </p>

              {/* CTA Button Mockup */}
              <div style={{ background: 'var(--accent-emerald)', color: '#090d16', padding: '0.75rem', borderRadius: '8px', fontWeight: 700, textAlign: 'center', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                {activeAd.cta} <ExternalLink size={14} />
              </div>
            </div>

            <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              <span>Predicted CTR: <strong style={{ color: 'var(--accent-emerald)' }}>{activeAd.predictedCTR}</strong></span>
              <span>Audience Precision: <strong>High Intent B2B</strong></span>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: DYNAMIC ROI & CAC CALCULATOR */}
      {activeSubTab === 'calculator' && (
        <div className="grid-2">
          {/* Sliders Input Panel */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sliders size={18} className="gradient-text-cyan" /> Paid Acquisition Funnel Inputs
            </h3>

            {/* Slider 1: Monthly Spend */}
            <div className="slider-container">
              <div className="slider-header">
                <span className="slider-label">Monthly Ad Spend ($)</span>
                <span className="slider-value">${monthlySpend.toLocaleString()}</span>
              </div>
              <input type="range" min={1000} max={50000} step={500} value={monthlySpend} onChange={(e) => setMonthlySpend(Number(e.target.value))} />
            </div>

            {/* Slider 2: Average CPC */}
            <div className="slider-container">
              <div className="slider-header">
                <span className="slider-label">Average Cost Per Click (CPC)</span>
                <span className="slider-value">${avgCpc.toFixed(2)}</span>
              </div>
              <input type="range" min={0.50} max={10.00} step={0.25} value={avgCpc} onChange={(e) => setAvgCpc(Number(e.target.value))} />
            </div>

            {/* Slider 3: Landing Page CVR */}
            <div className="slider-container">
              <div className="slider-header">
                <span className="slider-label">Landing Page Free Trial CVR (%)</span>
                <span className="slider-value">{landingPageCvr.toFixed(1)}%</span>
              </div>
              <input type="range" min={1.0} max={25.0} step={0.5} value={landingPageCvr} onChange={(e) => setLandingPageCvr(Number(e.target.value))} />
            </div>

            {/* Slider 4: Trial to Paid CVR */}
            <div className="slider-container">
              <div className="slider-header">
                <span className="slider-label">Trial to Paid Conversion CVR (%)</span>
                <span className="slider-value">{trialToPaidCvr.toFixed(1)}%</span>
              </div>
              <input type="range" min={5.0} max={50.0} step={1.0} value={trialToPaidCvr} onChange={(e) => setTrialToPaidCvr(Number(e.target.value))} />
            </div>

            {/* Slider 5: ARPU */}
            <div className="slider-container">
              <div className="slider-header">
                <span className="slider-label">Avg Revenue Per Merchant (ARPU / MRR)</span>
                <span className="slider-value">${arpu}/mo</span>
              </div>
              <input type="range" min={29} max={299} step={10} value={arpu} onChange={(e) => setArpu(Number(e.target.value))} />
            </div>
          </div>

          {/* Unit Economics Results */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: '#fff' }}>Unit Economics & Financial Output</h3>
                <span className="badge badge-emerald">ROAS: {roas}x</span>
              </div>

              {/* Metric Cards Grid */}
              <div className="grid-2" style={{ gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--bg-card-border)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Estimated Paid Traffic</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                    {clicks.toLocaleString()} Clicks
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--bg-card-border)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Free Trial Leads</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-violet)', fontFamily: 'var(--font-mono)' }}>
                    {trials.toLocaleString()} Signups
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--bg-card-border)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>New Paid Customers</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                    {paidCustomers} Merchants
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--bg-card-border)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Customer Acquisition Cost (CAC)</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: cac > 300 ? 'var(--accent-rose)' : 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                    ${cac}
                  </div>
                </div>
              </div>

              {/* Revenue Projections */}
              <div style={{ background: 'rgba(16,185,129,0.08)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(16,185,129,0.3)', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Projected Monthly Recurring Revenue (MRR)</span>
                  <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                    ${monthlyRevenue.toLocaleString()}/mo
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <span>Annual Run Rate (ARR): <strong>${arr.toLocaleString()}</strong></span>
                  <span>Net Margin: <strong>{monthlyRevenue > monthlySpend ? `+$${(monthlyRevenue - monthlySpend).toLocaleString()}` : `-$${(monthlySpend - monthlyRevenue).toLocaleString()}`}</strong></span>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textAlign: 'center' }}>
              Unit economics modeled on SaaS benchmarks with 90% gross margins.
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 3: CRO A/B EXPERIMENTS */}
      {activeSubTab === 'cro' && (
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>
                Conversion Rate Optimization (CRO) Landing Page A/B Test Blueprint
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Testing value proposition hooks to optimize landing page signups.
              </p>
            </div>
            <span className="badge badge-cyan"><Zap size={14} /> Live Experiment</span>
          </div>

          <div className="grid-2">
            {/* Variant A */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--bg-card-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="badge badge-amber">Variant A (Control)</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Baseline CVR: 6.2%</span>
              </div>
              <h4 style={{ color: '#fff', fontSize: '1rem', margin: '0.5rem 0' }}>Focus: Loss Aversion & Threat Warning</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                "Stop Fake Reviews From Ruining Your Merchant Reputation and Triggering Store Bans."
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Hypothesis: Fear-based hooks drive higher immediate clicks from merchants facing active fraud attacks.</div>
            </div>

            {/* Variant B */}
            <div style={{ background: 'rgba(6,182,212,0.08)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(6,182,212,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="badge badge-emerald">Variant B (Winner +34%)</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>Test CVR: 8.5%</span>
              </div>
              <h4 style={{ color: '#fff', fontSize: '1rem', margin: '0.5rem 0' }}>Focus: Verified Social Proof & Revenue ROAS</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                "Boost Shopify Sales by 24% with Real-Time AI Review Verification and Verified Trust Badges."
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Hypothesis: Revenue expansion and trust badges resonate stronger with high-growth e-commerce brands.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
