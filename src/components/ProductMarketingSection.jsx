import React, { useState } from 'react';
import { POSITIONING_MATRIX, GTM_LAUNCH_PLAN, COMPETITIVE_BATTLECARD } from '../data/marketingData';
import { Target, Layers, Rocket, ShieldAlert, CheckCircle, HelpCircle, ChevronRight, Award, UserCheck } from 'lucide-react';

export default function ProductMarketingSection() {
  const [selectedPersonaIdx, setSelectedPersonaIdx] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState('positioning'); // 'positioning', 'gtm', 'battlecard'

  const activePersona = POSITIONING_MATRIX[selectedPersonaIdx];

  return (
    <div className="pmm-section">
      <div className="section-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-cyan"><Target size={14} /> Product Marketing (PMM) Suite</span>
          <span className="badge badge-violet"><Rocket size={14} /> Strategic Frameworks</span>
        </div>
        <h2 className="section-title">
          Product Positioning, GTM Strategy & Battlecards
        </h2>
        <p className="section-desc">
          Strategic product marketing deliverables crafted for TrustShield AI. Explores value proposition hierarchies, multi-persona positioning matrices, 90-day launch blueprints, and competitive positioning.
        </p>
      </div>

      {/* Subnav Pills */}
      <div className="subnav-pills">
        <button 
          className={`subnav-pill ${activeSubTab === 'positioning' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('positioning')}
        >
          <Layers size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          Product Positioning & Persona Matrix
        </button>
        <button 
          className={`subnav-pill ${activeSubTab === 'gtm' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('gtm')}
        >
          <Rocket size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          Go-To-Market (GTM) Launch Blueprint
        </button>
        <button 
          className={`subnav-pill ${activeSubTab === 'battlecard' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('battlecard')}
        >
          <ShieldAlert size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          Competitive Battlecard
        </button>
      </div>

      {/* SUBTAB 1: POSITIONING & PERSONA MATRIX */}
      {activeSubTab === 'positioning' && (
        <div className="grid-2">
          {/* Persona Selection Card */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <UserCheck size={18} className="gradient-text-cyan" /> Target Audience & Personas
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Select a target segment to review the audience-specific messaging strategy, core pain points, and product differentiation factors.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {POSITIONING_MATRIX.map((item, idx) => (
                <div 
                  key={idx}
                  className={`glass-card-interactive ${selectedPersonaIdx === idx ? 'active' : ''}`}
                  onClick={() => setSelectedPersonaIdx(idx)}
                  style={{ padding: '1rem' }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', marginBottom: '0.25rem' }}>
                    {item.persona}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontStyle: 'italic' }}>
                    "{item.tagline}"
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Positioning Details Matrix */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge badge-violet">PMM Messaging Framework</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Segment #{selectedPersonaIdx + 1}</span>
              </div>

              <h3 style={{ fontSize: '1.3rem', color: '#fff', fontWeight: 700, marginBottom: '0.5rem' }}>
                {activePersona.persona}
              </h3>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                  Core Pain Point Addressed:
                </div>
                <div style={{ background: 'rgba(244,63,94,0.06)', borderLeft: '3px solid var(--accent-rose)', padding: '0.75rem 1rem', borderRadius: '0 8px 8px 0', fontSize: '0.9rem', color: '#e2e8f0' }}>
                  {activePersona.painPoints}
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                  Primary Value Proposition:
                </div>
                <div style={{ background: 'rgba(6,182,212,0.06)', borderLeft: '3px solid var(--accent-cyan)', padding: '0.75rem 1rem', borderRadius: '0 8px 8px 0', fontSize: '0.9rem', color: '#e2e8f0' }}>
                  {activePersona.valueProp}
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                  Key Hero Message:
                </div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--accent-cyan)' }}>
                  "{activePersona.keyMessage}"
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                  Moat & Competitive Differentiator:
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  {activePersona.diffFactor}
                </p>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Category Tagline</span>
              <span className="badge badge-cyan">{activePersona.tagline}</span>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: GTM LAUNCH BLUEPRINT */}
      {activeSubTab === 'gtm' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {GTM_LAUNCH_PLAN.map((plan, idx) => (
            <div key={idx} className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Rocket size={18} color="var(--accent-cyan)" /> {plan.phase}
                </h3>
                <span className="badge badge-cyan">GTM Milestone</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                <strong>Strategic Focus:</strong> {plan.focus}
              </p>

              <div className="grid-2" style={{ gap: '0.75rem' }}>
                {plan.deliverables.map((item, dIdx) => (
                  <div key={dIdx} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--bg-card-border)', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <CheckCircle size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.88rem', color: '#e2e8f0' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SUBTAB 3: COMPETITIVE BATTLECARD */}
      {activeSubTab === 'battlecard' && (
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>
                Competitive Matrix & Positioning Battlecard
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Head-to-head breakdown used by PMM & Sales Enablement to position TrustShield against existing market alternatives.
              </p>
            </div>
            <span className="badge badge-violet"><Award size={14} /> Sales Enablement Ready</span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem' }}>Solution</th>
                  <th style={{ padding: '0.75rem' }}>Category</th>
                  <th style={{ padding: '0.75rem' }}>SMS Protection</th>
                  <th style={{ padding: '0.75rem' }}>Review Verification</th>
                  <th style={{ padding: '0.75rem' }}>Price Point</th>
                  <th style={{ padding: '0.75rem' }}>Core Advantage</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITIVE_BATTLECARD.competitors.map((comp, idx) => (
                  <tr 
                    key={idx} 
                    style={{ 
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      background: comp.name.includes('TrustShield') ? 'rgba(6,182,212,0.08)' : 'transparent'
                    }}
                  >
                    <td style={{ padding: '1rem 0.75rem', fontWeight: 700, color: comp.name.includes('TrustShield') ? 'var(--accent-cyan)' : '#fff' }}>
                      {comp.name}
                    </td>
                    <td style={{ padding: '1rem 0.75rem', color: 'var(--text-muted)' }}>{comp.type}</td>
                    <td style={{ padding: '1rem 0.75rem', color: '#e2e8f0' }}>{comp.smsFiltering}</td>
                    <td style={{ padding: '1rem 0.75rem', color: '#e2e8f0' }}>{comp.reviewVerification}</td>
                    <td style={{ padding: '1rem 0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)' }}>{comp.price}</td>
                    <td style={{ padding: '1rem 0.75rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>{comp.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
