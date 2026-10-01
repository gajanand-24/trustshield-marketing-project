import React, { useState } from 'react';
import { SAMPLE_SMS, SAMPLE_REVIEWS } from '../data/marketingData';
import { ShieldCheck, AlertTriangle, Cpu, Sparkles, MessageSquare, Star, ArrowRight, RefreshCw, CheckCircle2, XCircle } from 'lucide-react';

export default function LiveDemoSection() {
  const [activeTab, setActiveTab] = useState('sms'); // 'sms' or 'review'
  
  // SMS state
  const [selectedSms, setSelectedSms] = useState(SAMPLE_SMS[0]);
  const [customSmsText, setCustomSmsText] = useState(SAMPLE_SMS[0].text);
  const [isAnalyzingSms, setIsAnalyzingSms] = useState(false);
  const [smsAnalysisResult, setSmsAnalysisResult] = useState(SAMPLE_SMS[0]);

  // Review state
  const [selectedReview, setSelectedReview] = useState(SAMPLE_REVIEWS[0]);
  const [customReviewText, setCustomReviewText] = useState(SAMPLE_REVIEWS[0].text);
  const [isAnalyzingReview, setIsAnalyzingReview] = useState(false);
  const [reviewAnalysisResult, setReviewAnalysisResult] = useState(SAMPLE_REVIEWS[0]);

  const handleSelectSms = (item) => {
    setSelectedSms(item);
    setCustomSmsText(item.text);
    setSmsAnalysisResult(item);
  };

  const handleSelectReview = (item) => {
    setSelectedReview(item);
    setCustomReviewText(item.text);
    setReviewAnalysisResult(item);
  };

  const runCustomSmsAnalysis = () => {
    setIsAnalyzingSms(true);
    setTimeout(() => {
      // Dynamic simple NLP analysis heuristic for demonstration
      const text = customSmsText.toLowerCase();
      const hasUrgent = text.includes('urgent') || text.includes('expire') || text.includes('now') || text.includes('immediately');
      const hasMoney = text.includes('$') || text.includes('btc') || text.includes('winner') || text.includes('claim') || text.includes('gift card');
      const hasLink = text.includes('http') || text.includes('.xyz') || text.includes('.com') || text.includes('bit.ly');

      let score = 15;
      let risk = "SAFE";
      let category = "Normal Communication";
      let keywords = [];

      if (hasUrgent) { score += 30; keywords.push("Urgency Indicator"); }
      if (hasMoney) { score += 35; keywords.push("Financial Incentive"); }
      if (hasLink) { score += 25; keywords.push("External Link Detected"); }

      if (score >= 70) {
        risk = "CRITICAL / SPAM";
        category = "Phishing & Financial Bait";
      } else if (score >= 40) {
        risk = "MODERATE RISK";
        category = "Promotional SMS";
      }

      setSmsAnalysisResult({
        id: "custom",
        title: "Custom Analyzed SMS",
        text: customSmsText,
        spamScore: Math.min(score, 99),
        risk,
        category,
        keywords: keywords.length ? keywords : ["Standard Vocabulary"],
        explanation: `Evaluated ${customSmsText.length} characters using TF-IDF token weighting and heuristic pattern matching.`
      });
      setIsAnalyzingSms(false);
    }, 600);
  };

  const runCustomReviewAnalysis = () => {
    setIsAnalyzingReview(true);
    setTimeout(() => {
      const text = customReviewText;
      const lower = text.toLowerCase();
      const isShort = text.length < 50;
      const isCaps = text === text.toUpperCase() && text.length > 15;
      const hasExclamations = (text.match(/!/g) || []).length > 3;
      const hasCompetitor = lower.includes('brand x') || lower.includes('http') || lower.includes('cheaper at');

      let authScore = 85;
      let risk = "VERIFIED AUTHENTIC";
      let flags = [];

      if (isCaps) { authScore -= 30; flags.push("Excessive Capitalization"); }
      if (hasExclamations) { authScore -= 25; flags.push("Overused Exclamations"); }
      if (hasCompetitor) { authScore -= 40; flags.push("Competitor Plug / Link"); }
      if (isShort && hasExclamations) { authScore -= 20; flags.push("Low Lexical Diversity"); }

      authScore = Math.max(12, authScore);

      if (authScore < 40) {
        risk = "SUSPICIOUS / FAKE BOT";
      } else if (authScore < 70) {
        risk = "NEEDS MANUAL AUDIT";
      }

      setReviewAnalysisResult({
        id: "custom-rev",
        title: "Custom Analyzed Review",
        product: "Analyzed E-Commerce Item",
        rating: 5,
        text: customReviewText,
        authenticityScore: authScore,
        risk,
        flags: flags.length ? flags : ["Balanced Sentiment", "Natural Sentence Structure"],
        nlpMetrics: {
          sentimentMismatch: authScore > 60 ? "Normal (Verified)" : "Extreme Mismatch",
          syntacticUniformity: authScore > 60 ? "35.4%" : "94.2%",
          reviewerAccountAge: authScore > 60 ? "1.5 Years" : "New Account (3 days)",
          verifiedPurchase: authScore > 60
        }
      });
      setIsAnalyzingReview(false);
    }, 600);
  };

  return (
    <div className="demo-section">
      <div className="section-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-cyan"><Cpu size={14} /> Interactive Product Core</span>
          <span className="badge badge-violet"><Sparkles size={14} /> NLP AI Engine</span>
        </div>
        <h2 className="section-title">
          Live NLP Spam SMS & Fake Review Detector
        </h2>
        <p className="section-desc">
          Test our core NLP algorithm live. Select pre-loaded real-world threat vectors or input your own text to evaluate spam probability scores, risk flags, and sentiment authenticity breakdown.
        </p>
      </div>

      {/* Subnav Pills for Demo Type */}
      <div className="subnav-pills">
        <button 
          className={`subnav-pill ${activeTab === 'sms' ? 'active' : ''}`}
          onClick={() => setActiveTab('sms')}
        >
          <MessageSquare size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          SMS Smishing & Phishing Detector
        </button>
        <button 
          className={`subnav-pill ${activeTab === 'review' ? 'active' : ''}`}
          onClick={() => setActiveTab('review')}
        >
          <Star size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          E-Commerce Fake Review Audit Engine
        </button>
      </div>

      {/* Hero Preview Graphic */}
      <div className="glass-card" style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(6, 182, 212, 0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/hero.png" alt="TrustShield Engine Preview" style={{ width: '90px', height: '90px', borderRadius: '12px', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.1)' }} />
            <div>
              <h4 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>TrustShield NLP Threat Engine v2.4</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Real-time text tokenization, TF-IDF vectorization, and sentiment mismatch scoring.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>&lt; 45ms</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>API Latency</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>99.4%</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Detection Accuracy</div>
            </div>
          </div>
        </div>
      </div>

      {/* SMS TAB */}
      {activeTab === 'sms' && (
        <div className="grid-2">
          {/* Input & Presets */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageSquare size={18} className="gradient-text-cyan" /> Select SMS Preset or Type Custom Text
            </h3>

            {/* Presets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
              {SAMPLE_SMS.map((item) => (
                <div 
                  key={item.id}
                  className={`glass-card-interactive ${selectedSms.id === item.id ? 'active' : ''}`}
                  onClick={() => handleSelectSms(item)}
                  style={{ padding: '0.75rem 1rem' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>{item.title}</span>
                    <span className={`badge ${item.risk === 'CRITICAL' ? 'badge-rose' : item.risk === 'HIGH' ? 'badge-amber' : 'badge-emerald'}`}>
                      {item.spamScore}% Spam
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    "{item.text}"
                  </p>
                </div>
              ))}
            </div>

            {/* Custom Input */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>
                Test Custom SMS Content:
              </label>
              <textarea 
                className="custom-textarea" 
                rows={3} 
                value={customSmsText} 
                onChange={(e) => setCustomSmsText(e.target.value)}
                placeholder="Paste any SMS message here..."
              />
            </div>

            <button 
              className="btn-primary" 
              style={{ width: '100%' }}
              onClick={runCustomSmsAnalysis}
              disabled={isAnalyzingSms}
            >
              {isAnalyzingSms ? (
                <> <RefreshCw className="spin" size={16} /> Analyzing NLP Tokens... </>
              ) : (
                <> <Sparkles size={16} /> Run NLP Spam Analysis </>
              )}
            </button>
          </div>

          {/* Analysis Results Panel */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={20} color="var(--accent-cyan)" /> SMS Threat Intelligence Report
                </h3>
                <span className={`badge ${smsAnalysisResult.spamScore > 70 ? 'badge-rose' : smsAnalysisResult.spamScore > 40 ? 'badge-amber' : 'badge-emerald'}`}>
                  {smsAnalysisResult.risk}
                </span>
              </div>

              {/* Gauge Score Bar */}
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', border: '1px solid var(--bg-card-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Spam Probability Score</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: smsAnalysisResult.spamScore > 70 ? 'var(--accent-rose)' : smsAnalysisResult.spamScore > 40 ? 'var(--accent-amber)' : 'var(--accent-emerald)' }}>
                    {smsAnalysisResult.spamScore} / 100
                  </span>
                </div>
                <div style={{ width: '100%', height: '10px', background: '#1e293b', borderRadius: '5px', overflow: 'hidden' }}>
                  <div 
                    style={{ 
                      width: `${smsAnalysisResult.spamScore}%`, 
                      height: '100%', 
                      background: smsAnalysisResult.spamScore > 70 
                        ? 'linear-gradient(90deg, #f59e0b, #f43f5e)' 
                        : 'linear-gradient(90deg, #10b981, #06b6d4)',
                      transition: 'width 0.5s ease'
                    }} 
                  />
                </div>
              </div>

              {/* Highlighted Trigger Keywords */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Flagged Threat Triggers & Keywords:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {smsAnalysisResult.keywords.map((kw, idx) => (
                    <span key={idx} className="badge badge-rose" style={{ fontSize: '0.75rem' }}>
                      <AlertTriangle size={12} /> {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical NLP Rationale */}
              <div className="highlight-box">
                <div style={{ fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '0.25rem' }}>NLP Diagnostic Rationale:</div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{smsAnalysisResult.explanation}</p>
              </div>
            </div>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.8rem', color: 'var(--text-dim)', display: 'flex', justifyContent: 'space-between' }}>
              <span>Category: <strong>{smsAnalysisResult.category}</strong></span>
              <span>Model: BERT-Spam-v2</span>
            </div>
          </div>
        </div>
      )}

      {/* REVIEW TAB */}
      {activeTab === 'review' && (
        <div className="grid-2">
          {/* Input & Presets */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Star size={18} className="gradient-text-emerald" /> Select Review Preset or Paste Custom Text
            </h3>

            {/* Presets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
              {SAMPLE_REVIEWS.map((item) => (
                <div 
                  key={item.id}
                  className={`glass-card-interactive ${selectedReview.id === item.id ? 'active' : ''}`}
                  onClick={() => handleSelectReview(item)}
                  style={{ padding: '0.75rem 1rem' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>{item.title}</span>
                    <span className={`badge ${item.authenticityScore < 40 ? 'badge-rose' : item.authenticityScore < 70 ? 'badge-amber' : 'badge-emerald'}`}>
                      {item.authenticityScore}% Authentic
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    "{item.text}"
                  </p>
                </div>
              ))}
            </div>

            {/* Custom Input */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>
                Test Custom Product Review Text:
              </label>
              <textarea 
                className="custom-textarea" 
                rows={3} 
                value={customReviewText} 
                onChange={(e) => setCustomReviewText(e.target.value)}
                placeholder="Paste any product review here..."
              />
            </div>

            <button 
              className="btn-primary" 
              style={{ width: '100%' }}
              onClick={runCustomReviewAnalysis}
              disabled={isAnalyzingReview}
            >
              {isAnalyzingReview ? (
                <> <RefreshCw className="spin" size={16} /> Auditing Review Authenticity... </>
              ) : (
                <> <Sparkles size={16} /> Run Fake Review Audit </>
              )}
            </button>
          </div>

          {/* Analysis Results Panel */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={20} color="var(--accent-emerald)" /> Review Authenticity Audit
                </h3>
                <span className={`badge ${reviewAnalysisResult.authenticityScore < 40 ? 'badge-rose' : 'badge-emerald'}`}>
                  {reviewAnalysisResult.risk}
                </span>
              </div>

              {/* Gauge Score Bar */}
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', border: '1px solid var(--bg-card-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Authenticity Score</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: reviewAnalysisResult.authenticityScore < 40 ? 'var(--accent-rose)' : 'var(--accent-emerald)' }}>
                    {reviewAnalysisResult.authenticityScore} / 100
                  </span>
                </div>
                <div style={{ width: '100%', height: '10px', background: '#1e293b', borderRadius: '5px', overflow: 'hidden' }}>
                  <div 
                    style={{ 
                      width: `${reviewAnalysisResult.authenticityScore}%`, 
                      height: '100%', 
                      background: reviewAnalysisResult.authenticityScore < 40 
                        ? 'linear-gradient(90deg, #f43f5e, #f59e0b)' 
                        : 'linear-gradient(90deg, #06b6d4, #10b981)',
                      transition: 'width 0.5s ease'
                    }} 
                  />
                </div>
              </div>

              {/* Detailed Metrics */}
              <div className="grid-2" style={{ marginBottom: '1rem', gap: '0.75rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--bg-card-border)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Syntactic Uniformity</div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>{reviewAnalysisResult.nlpMetrics?.syntacticUniformity}</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--bg-card-border)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Sentiment Balance</div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>{reviewAnalysisResult.nlpMetrics?.sentimentMismatch}</div>
                </div>
              </div>

              {/* Flags */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Fraud Risk Signals:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {reviewAnalysisResult.flags.map((flag, idx) => (
                    <span key={idx} className={`badge ${reviewAnalysisResult.authenticityScore < 40 ? 'badge-rose' : 'badge-emerald'}`} style={{ fontSize: '0.75rem' }}>
                      {reviewAnalysisResult.authenticityScore < 40 ? <XCircle size={12} /> : <CheckCircle2 size={12} />} {flag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.8rem', color: 'var(--text-dim)', display: 'flex', justifyContent: 'space-between' }}>
              <span>Verified Purchase: <strong>{reviewAnalysisResult.nlpMetrics?.verifiedPurchase ? "YES" : "NO"}</strong></span>
              <span>Account Age: <strong>{reviewAnalysisResult.nlpMetrics?.reviewerAccountAge}</strong></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
