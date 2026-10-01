import React, { useState } from 'react';
import { RESUME_BULLETS } from '../data/marketingData';
import { Briefcase, Copy, Check, Download, Award, Sparkles, MessageCircle, FileCheck, ExternalLink } from 'lucide-react';

export default function ResumePortfolioSection() {
  const [copiedRole, setCopiedRole] = useState(null);

  const copyToClipboard = (roleKey, textArray) => {
    const formattedText = textArray.map(b => `• ${b}`).join('\n');
    navigator.clipboard.writeText(formattedText);
    setCopiedRole(roleKey);
    setTimeout(() => setCopiedRole(null), 2000);
  };

  return (
    <div className="resume-section">
      <div className="section-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-cyan"><Briefcase size={14} /> Career & Portfolio Toolkit</span>
          <span className="badge badge-emerald"><Award size={14} /> Resume Ready</span>
        </div>
        <h2 className="section-title">
          Resume Bullet Points & STAR Interview Guide
        </h2>
        <p className="section-desc">
          Tailored bullet points and interview responses crafted for your resume. Copy role-specific accomplishments directly into your CV or use the STAR framework talking points during recruiter screens.
        </p>
      </div>

      {/* Role-Based Resume Bullets Grid */}
      <div className="grid-3" style={{ marginBottom: '2rem' }}>
        {/* PMM Card */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="badge badge-cyan">Product Marketing Manager</span>
              <button 
                className="btn-secondary" 
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                onClick={() => copyToClipboard('pmm', RESUME_BULLETS.pmm)}
              >
                {copiedRole === 'pmm' ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />} Copy
              </button>
            </div>

            <h3 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>
              PMM Accomplishments & Metrics
            </h3>

            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {RESUME_BULLETS.pmm.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Performance Marketing Card */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="badge badge-emerald">Performance / Paid Media</span>
              <button 
                className="btn-secondary" 
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                onClick={() => copyToClipboard('performance', RESUME_BULLETS.performance)}
              >
                {copiedRole === 'performance' ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />} Copy
              </button>
            </div>

            <h3 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>
              Paid Acquisition Accomplishments
            </h3>

            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {RESUME_BULLETS.performance.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Marketing Card */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="badge badge-violet">Content Marketing & SEO</span>
              <button 
                className="btn-secondary" 
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                onClick={() => copyToClipboard('content', RESUME_BULLETS.content)}
              >
                {copiedRole === 'content' ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />} Copy
              </button>
            </div>

            <h3 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>
              Content & Organic Strategy
            </h3>

            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {RESUME_BULLETS.content.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* STAR Framework Interview Masterclass */}
      <div className="glass-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageCircle size={18} color="var(--accent-cyan)" /> STAR Method Interview Talking Points
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              How to answer: "Tell me about a product marketing or performance campaign project you spearheaded."
            </p>
          </div>
          <span className="badge badge-violet"><Sparkles size={14} /> Interview Cheat Sheet</span>
        </div>

        <div className="grid-2">
          {/* Situation & Task */}
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--bg-card-border)' }}>
            <h4 style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              SITUATION & TASK
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6 }}>
              "Users and e-commerce merchants were facing severe spam SMS phishing vectors and bot-generated fake reviews that damaged store reputation and diluted ad ROAS. My goal was to develop a full product marketing and growth plan to commercialize an NLP-based trust detection engine."
            </p>
          </div>

          {/* Action & Result */}
          <div style={{ background: 'rgba(16,185,129,0.06)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(16,185,129,0.3)' }}>
            <h4 style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              ACTION & RESULTS
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6 }}>
              "I mapped out target buyer personas (B2B Shopify merchants & B2C consumers), designed multi-channel Meta/Google paid campaigns with a dynamic ROI calculator, authored an SEO pillar whitepaper targeting 45k+ keyword volume, and launched an interactive demo tool that boosted projected trial conversion rates by 34%."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
