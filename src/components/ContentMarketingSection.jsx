import React, { useState } from 'react';
import { SEO_KEYWORDS, CONTENT_CALENDAR } from '../data/marketingData';
import { BookOpen, Search, Calendar, Mail, FileText, CheckCircle2, ChevronRight, Share2, Sparkles, ExternalLink } from 'lucide-react';

export default function ContentMarketingSection() {
  const [activeSubTab, setActiveSubTab] = useState('seo'); // 'seo', 'pillar', 'calendar', 'email'

  return (
    <div className="content-section">
      <div className="section-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-violet"><BookOpen size={14} /> Content & Organic Growth</span>
          <span className="badge badge-cyan"><Search size={14} /> SEO Strategy</span>
        </div>
        <h2 className="section-title">
          Content Marketing Strategy, SEO Matrix & Whitepaper
        </h2>
        <p className="section-desc">
          Build organic search authority, generate high-intent B2B leads, and establish thought leadership. Explores keyword clusters, long-form pillar assets, content distribution calendars, and email nurture sequences.
        </p>
      </div>

      {/* Subnav Pills */}
      <div className="subnav-pills">
        <button 
          className={`subnav-pill ${activeSubTab === 'seo' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('seo')}
        >
          <Search size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          SEO Keyword Universe Matrix
        </button>
        <button 
          className={`subnav-pill ${activeSubTab === 'pillar' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('pillar')}
        >
          <FileText size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          Long-Form Pillar Whitepaper
        </button>
        <button 
          className={`subnav-pill ${activeSubTab === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('calendar')}
        >
          <Calendar size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          30-Day Multi-Channel Calendar
        </button>
        <button 
          className={`subnav-pill ${activeSubTab === 'email' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('email')}
        >
          <Mail size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          B2B Email Nurture Sequence
        </button>
      </div>

      {/* SUBTAB 1: SEO KEYWORD UNIVERSE MATRIX */}
      {activeSubTab === 'seo' && (
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>
                High-Intent SEO Keyword Strategy Universe
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Targeting 45,000+ monthly search volume across commercial and informational intent queries.
              </p>
            </div>
            <span className="badge badge-violet">Search Intent Alignment</span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem' }}>Target Keyword</th>
                  <th style={{ padding: '0.75rem' }}>Monthly Volume</th>
                  <th style={{ padding: '0.75rem' }}>Keyword Difficulty (KD)</th>
                  <th style={{ padding: '0.75rem' }}>Search Intent</th>
                  <th style={{ padding: '0.75rem' }}>Mapped Content Asset</th>
                  <th style={{ padding: '0.75rem' }}>CVR Potential</th>
                </tr>
              </thead>
              <tbody>
                {SEO_KEYWORDS.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem 0.75rem', fontWeight: 700, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                      "{item.keyword}"
                    </td>
                    <td style={{ padding: '1rem 0.75rem', color: '#fff', fontWeight: 600 }}>{item.volume}</td>
                    <td style={{ padding: '1rem 0.75rem', color: 'var(--text-muted)' }}>{item.kd}</td>
                    <td style={{ padding: '1rem 0.75rem' }}>
                      <span className={`badge ${item.intent.includes('Commercial') ? 'badge-emerald' : 'badge-cyan'}`}>
                        {item.intent}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 0.75rem', color: '#e2e8f0', fontSize: '0.85rem' }}>{item.targetAsset}</td>
                    <td style={{ padding: '1rem 0.75rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>{item.cvrPotential}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SUBTAB 2: PILLAR WHITEPAPER */}
      {activeSubTab === 'pillar' && (
        <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', background: '#0b1120' }}>
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <span className="badge badge-violet" style={{ marginBottom: '0.75rem' }}><FileText size={12} /> Featured Pillar Whitepaper</span>
            <h2 style={{ fontSize: '1.6rem', color: '#fff', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.5rem' }}>
              The $1.5 Billion Fake Review Problem: How Synthetic AI Is Destroying Consumer Trust (And How Brands Can Fight Back)
            </h2>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', gap: '1.5rem' }}>
              <span>Author: TrustShield Growth Team</span>
              <span>Read Time: 6 min</span>
              <span>Published: Oct 2026</span>
            </div>
          </div>

          <div style={{ color: '#cbd5e1', lineHeight: 1.8, fontSize: '0.95rem' }}>
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              1. The Rise of Large Language Model (LLM) Review Bots
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              In 2026, over 38% of reviews across major e-commerce platforms show signs of automated synthesis. Modern bot farms no longer rely on simple repetitive copy—they leverage specialized fine-tuned LLMs to generate hyper-realistic, nuanced 5-star reviews with varied vocabulary, making legacy rule-based filters obsolete.
            </p>

            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              2. The Hidden Cost to E-Commerce Merchant ROAS
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              When a store accumulates fake bot reviews, refund rates spike by up to 215% within 60 days. Customers who purchase based on inflated ratings quickly experience post-purchase dissonance, leading to chargebacks, negative social proof, and merchant account suspensions on marketplaces like Amazon and Shopify.
            </p>

            <div className="highlight-box">
              <strong style={{ color: 'var(--accent-cyan)' }}>Key Insight:</strong> NLP token analysis reveals that bot-generated reviews exhibit unusually high syntactic uniformity (over 92%) despite high lexical diversity, making real-time NLP graph analysis the only scalable solution.
            </div>

            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              3. The TrustShield Solution: Dual-Graph Neural Filtering
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              By analyzing incoming reviews at the API level before publication, TrustShield AI evaluates sentiment consistency, reviewer IP cluster velocity, and syntax distribution, stopping fraud before it harms brand reputation.
            </p>
          </div>
        </div>
      )}

      {/* SUBTAB 3: 30-DAY CONTENT CALENDAR */}
      {activeSubTab === 'calendar' && (
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>
                30-Day Multi-Channel Content Distribution Calendar
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Cross-channel distribution roadmap across LinkedIn B2B, Blog/SEO, Twitter/X threads, and video assets.
              </p>
            </div>
            <span className="badge badge-cyan"><Calendar size={14} /> Full Month Plan</span>
          </div>

          <div className="grid-3">
            {CONTENT_CALENDAR.map((item, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--bg-card-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="badge badge-violet" style={{ fontSize: '0.75rem' }}>{item.day}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>{item.channel}</span>
                </div>
                <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, margin: '0.5rem 0' }}>{item.title}</h4>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Format: <strong>{item.format}</strong></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 4: B2B EMAIL NURTURE SEQUENCE */}
      {activeSubTab === 'email' && (
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>
                5-Stage B2B Merchant Email Nurture Drip Sequence
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Automated lifecycle onboarding sequence converting free trial signups into paying monthly subscribers.
              </p>
            </div>
            <span className="badge badge-emerald"><Mail size={14} /> 42.8% Open Rate Benchmark</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '10px', borderLeft: '4px solid var(--accent-cyan)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.2rem' }}>EMAIL 1 (Day 0 - Welcome & Instant Install)</div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>Subject: Welcome to TrustShield AI: Protect Your Store in 2 Minutes</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                Walks new merchant signups through 1-click Shopify app integration and presents their first baseline review risk audit.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '10px', borderLeft: '4px solid var(--accent-violet)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-violet)', fontWeight: 700, marginBottom: '0.2rem' }}>EMAIL 2 (Day 3 - Case Study & Value Reinforcement)</div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>Subject: How Merchant X Reduced Product Returns by 34% with NLP</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                Showcases real ROI metrics and customer testimonial video to build product adoption momentum during the free trial.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '10px', borderLeft: '4px solid var(--accent-emerald)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 700, marginBottom: '0.2rem' }}>EMAIL 3 (Day 7 - Upgrade Push / Free Trial End)</div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>Subject: Your Trial Analysis Report: 142 Bot Reviews Flagged</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                Presents concrete trial audit findings with a clear CTA button to lock in the Growth Plan subscription discount.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
