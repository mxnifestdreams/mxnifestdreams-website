import React, { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function MxnifestdreamsWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    
    if (!email) {
      setEmailError('Email is required');
      return;
    }

    try {
      // Using Formspree for email capture (free, no backend needed)
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message: 'Email signup from mxnifestdreams website' })
      });

      if (response.ok) {
        setEmailSubmitted(true);
        setEmail('');
        setTimeout(() => setEmailSubmitted(false), 4000);
      } else {
        setEmailError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setEmailError('Error submitting. Try again later.');
    }
  };

  const handleStripeCheckout = () => {
    // This redirects to your Stripe checkout session
    window.location.href = 'https://buy.stripe.com/YOUR_STRIPE_LINK';
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <div style={{ minHeight: 'calc(100vh - 200px)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
              <div style={{ paddingTop: '5rem', paddingBottom: '4rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '48px', fontWeight: 500, marginBottom: '2rem', color: 'var(--color-text-primary)', lineHeight: 1.2 }}>
                  Become the version of you who already has what you want
                </h1>
                
                <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--color-text-primary)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                  I'm Evan. I teach you how to become the person who already has what you want — whether that's your SP, a new life, or anything else. That's it. And I'm here to help you do the same 🤍
                </p>
                
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
                  <button 
                    onClick={() => setCurrentPage('inner-room')}
                    style={{ 
                      padding: '1rem 2.5rem', 
                      backgroundColor: '#f5e6d3', 
                      color: '#2c2c2c', 
                      border: 'none', 
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#ead9c3';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#f5e6d3';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Join the Inner Room <ArrowRight size={18} />
                  </button>
                  <a href="https://substack.com/@mxnifestdreams" target="_blank" rel="noopener noreferrer"
                    style={{ 
                      padding: '1rem 2rem', 
                      backgroundColor: 'transparent', 
                      color: 'var(--color-text-primary)', 
                      border: '2px solid var(--color-border-secondary)', 
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      display: 'inline-block',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'var(--color-background-secondary)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    Free Substack
                  </a>
                </div>

                <div style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid var(--color-border-tertiary)' }}>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-tertiary)', marginBottom: '3rem', textAlign: 'center' }}>Client results</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    <div style={{ backgroundColor: 'var(--color-background-secondary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-border-tertiary)' }}>
                      <p style={{ fontSize: '13px', fontWeight: 500, color: '#f5e6d3', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>SP Comeback</p>
                      <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        "He literally just texted me out of nowhere after 3 months of silence... Your content changed everything I swear."
                      </p>
                    </div>

                    <div style={{ backgroundColor: 'var(--color-background-secondary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-border-tertiary)' }}>
                      <p style={{ fontSize: '13px', fontWeight: 500, color: '#f5e6d3', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>No Contact Rule</p>
                      <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        "He came back... He already planned everything like he made the reservation himself. I'm seeing him this weekend."
                      </p>
                    </div>

                    <div style={{ backgroundColor: 'var(--color-background-secondary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-border-tertiary)' }}>
                      <p style={{ fontSize: '13px', fontWeight: 500, color: '#f5e6d3', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Manifestation Shift</p>
                      <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        "She shifted without me doing anything. I stayed in the new story even when my mind tried to spiral... it keeps unfolding in my favor."
                      </p>
                    </div>

                    <div style={{ backgroundColor: 'var(--color-background-secondary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-border-tertiary)' }}>
                      <p style={{ fontSize: '13px', fontWeight: 500, color: '#f5e6d3', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Detachment Success</p>
                      <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        "Fastest manifestations occurred by me putting myself into calmness and being unmoved. Not detached from the desire, just lived from having it."
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '4rem', paddingTop: '2rem' }}>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-tertiary)', marginBottom: '2rem' }}>What you get:</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '700px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '24px', marginBottom: '0.5rem' }}>💬</div>
                      <p style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>1:1 Coaching</p>
                      <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>Email, Instagram, TikTok, or WhatsApp</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '24px', marginBottom: '0.5rem' }}>📚</div>
                      <p style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>Weekly content</p>
                      <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>Self-concept and inner work</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '24px', marginBottom: '0.5rem' }}>🎯</div>
                      <p style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>Direct access</p>
                      <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>Ask questions anytime</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'about':
        return (
          <div style={{ minHeight: 'calc(100vh - 200px)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
              <div style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
                <h2 style={{ fontSize: '36px', fontWeight: 500, marginBottom: '2rem', color: 'var(--color-text-primary)' }}>
                  About me
                </h2>
                <div style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                  <p style={{ marginBottom: '1.5rem' }}>
                    I've spent 6+ years studying and applying Neville Goddard's Law of Assumption — not as theory, but as a lived practice. Every major thing in my life was deliberately created using these principles. My SP, my career, my lifestyle, my peace of mind. All intentional.
                  </p>
                  <p style={{ marginBottom: '1.5rem' }}>
                    My coaching is direct and practical. No fluff, no "universe energy" language, no vague spirituality. Just the core mechanics of how consciousness works, how to shift your self-concept, and how to embody the version of you who already has what you want.
                  </p>
                  <p style={{ marginBottom: '1.5rem' }}>
                    I work with people on specific desires—SPs, careers, financial goals, lifestyle changes—and what they find is that the method is the same. The inner work translates everywhere. The core principle never changes: you must become who you need to be before you can have what you want.
                  </p>
                  <p style={{ marginBottom: '2rem' }}>
                    My goal is to help you cut through the noise and actually become who you need to be to have what you want. Not someday. Now.
                  </p>

                  <div style={{ backgroundColor: 'var(--color-background-secondary)', padding: '2rem', borderRadius: '12px', marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
                      What I don't do:
                    </h3>
                    <ul style={{ marginLeft: '1.5rem', fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                      <li style={{ marginBottom: '0.75rem' }}>I don't use LOA language ("align your energy", "raise your vibration", "attract what you want")</li>
                      <li style={{ marginBottom: '0.75rem' }}>I don't sell false hope or overnight transformations</li>
                      <li>I don't work with people who aren't ready to do the inner work</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'inner-room':
        return (
          <div style={{ minHeight: 'calc(100vh - 200px)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
              <div style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
                <h2 style={{ fontSize: '36px', fontWeight: 500, marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>
                  The Inner Room
                </h2>
                
                <div style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--color-text-secondary)', marginBottom: '3rem' }}>
                  <p style={{ marginBottom: '1.5rem' }}>
                    A private, members-only community where I share weekly coaching on self-concept, inner conversation, and the mechanics of conscious creation. This is where the real work happens.
                  </p>
                  <p style={{ marginBottom: '2rem', fontSize: '17px', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                    What you get each week:
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                  <div style={{ backgroundColor: 'var(--color-background-secondary)', padding: '1.5rem', borderRadius: '12px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>Monday</h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>Self-concept lock-in assignment</p>
                  </div>
                  <div style={{ backgroundColor: 'var(--color-background-secondary)', padding: '1.5rem', borderRadius: '12px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>Wednesday</h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>Deep methodology post (the mechanics)</p>
                  </div>
                  <div style={{ backgroundColor: 'var(--color-background-secondary)', padding: '1.5rem', borderRadius: '12px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>Friday</h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>Reflection post to anchor practice</p>
                  </div>
                  <div style={{ backgroundColor: 'var(--color-background-secondary)', padding: '1.5rem', borderRadius: '12px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>Any day</h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>Direct access to ask questions</p>
                  </div>
                </div>

                <div style={{ 
                  backgroundColor: '#f5e6d3',
                  color: '#2c2c2c',
                  padding: '2.5rem',
                  borderRadius: '12px',
                  marginBottom: '2rem'
                }}>
                  <h3 style={{ fontSize: '28px', fontWeight: 500, marginBottom: '0.5rem' }}>
                    €10/month
                  </h3>
                  <p style={{ fontSize: '15px', marginBottom: '1.5rem', opacity: 0.9 }}>
                    Cancel anytime. Full access immediately. No locked content.
                  </p>
                  <p style={{ fontSize: '13px', marginBottom: '1.5rem', opacity: 0.85 }}>
                    Pay with card or PayPal — both options available at checkout.
                  </p>
                  <button 
                    onClick={handleStripeCheckout}
                    style={{ 
                      padding: '1rem 2rem', 
                      backgroundColor: '#2c2c2c', 
                      color: '#f5e6d3', 
                      border: 'none', 
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    Subscribe Now
                  </button>
                </div>

                <div style={{ backgroundColor: 'var(--color-background-secondary)', padding: '1.5rem', borderRadius: '12px' }}>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                    <strong style={{ color: 'var(--color-text-primary)' }}>First time here?</strong> Start with the free Substack to see if the approach resonates with you.
                  </p>
                  <a href="https://substack.com/@mxnifestdreams" target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '14px', color: '#f5e6d3', textDecoration: 'none', fontWeight: 500 }}
                  >
                    Read free posts →
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'resources':
        return (
          <div style={{ minHeight: 'calc(100vh - 200px)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
              <div style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
                <h2 style={{ fontSize: '36px', fontWeight: 500, marginBottom: '2.5rem', color: 'var(--color-text-primary)' }}>
                  Resources
                </h2>
                
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  <a href="https://beacons.ai/mxnifestdreams" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div style={{ 
                      backgroundColor: 'var(--color-background-secondary)',
                      padding: '2rem',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      border: '2px solid var(--color-border-tertiary)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#f5e6d3';
                      e.currentTarget.style.backgroundColor = 'rgba(245, 230, 211, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border-tertiary)';
                      e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                    }}
                    >
                      <div>
                        <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
                          SP Comeback Blueprint
                        </h3>
                        <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                          Complete ebook on reclaiming your SP and rebuilding the connection
                        </p>
                      </div>
                      <p style={{ fontSize: '18px', fontWeight: 500, color: '#f5e6d3', marginLeft: '1rem', whiteSpace: 'nowrap' }}>€50</p>
                    </div>
                  </a>
                  
                  <a href="https://substack.com/@mxnifestdreams" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div style={{ 
                      backgroundColor: 'var(--color-background-secondary)',
                      padding: '2rem',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      border: '2px solid var(--color-border-tertiary)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#f5e6d3';
                      e.currentTarget.style.backgroundColor = 'rgba(245, 230, 211, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border-tertiary)';
                      e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                    }}
                    >
                      <div>
                        <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
                          Free Substack
                        </h3>
                        <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                          Essays on self-concept, inner conversation, and conscious creation
                        </p>
                      </div>
                      <p style={{ fontSize: '18px', fontWeight: 500, color: '#f5e6d3', marginLeft: '1rem', whiteSpace: 'nowrap' }}>FREE</p>
                    </div>
                  </a>
                  
                  <a href="https://youtube.com/@mxnifestdreams" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div style={{ 
                      backgroundColor: 'var(--color-background-secondary)',
                      padding: '2rem',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      border: '2px solid var(--color-border-tertiary)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#f5e6d3';
                      e.currentTarget.style.backgroundColor = 'rgba(245, 230, 211, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border-tertiary)';
                      e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                    }}
                    >
                      <div>
                        <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
                          YouTube Subliminals
                        </h3>
                        <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                          1-hour loopable subliminals for manifestation and self-concept
                        </p>
                      </div>
                      <p style={{ fontSize: '18px', fontWeight: 500, color: '#f5e6d3', marginLeft: '1rem', whiteSpace: 'nowrap' }}>FREE</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-background-primary)', minHeight: '100vh', fontFamily: 'var(--font-sans)', display: 'flex', flexDirection: 'column' }}>
      {/* Header/Nav */}
      <header style={{ 
        borderBottom: '1px solid var(--color-border-tertiary)',
        backgroundColor: 'var(--color-background-primary)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(8px)'
      }}>
        <nav style={{ maxWidth: '900px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <button 
            onClick={() => setCurrentPage('home')}
            style={{ 
              fontSize: '18px', 
              fontWeight: 500, 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              color: 'var(--color-text-primary)',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#f5e6d3'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-text-primary)'}
          >
            mxnifestdreams
          </button>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {['home', 'about', 'inner-room', 'resources'].map((page) => (
              <button 
                key={page}
                onClick={() => setCurrentPage(page)} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer', 
                  fontSize: '14px', 
                  color: currentPage === page ? '#f5e6d3' : 'var(--color-text-secondary)',
                  transition: 'color 0.2s',
                  fontWeight: currentPage === page ? 500 : 400
                }}
                onMouseEnter={(e) => e.target.style.color = '#f5e6d3'}
                onMouseLeave={(e) => e.target.style.color = currentPage === page ? '#f5e6d3' : 'var(--color-text-secondary)'}
              >
                {page === 'home' ? 'Home' : page === 'about' ? 'About' : page === 'inner-room' ? 'Inner Room' : 'Resources'}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>

      {/* Footer with Email Capture */}
      <footer style={{ 
        borderTop: '1px solid var(--color-border-tertiary)',
        backgroundColor: 'var(--color-background-secondary)',
        marginTop: '4rem'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
            Join the Inner Room
          </h3>
          <form onSubmit={handleEmailSubmit} style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <input 
              type="email" 
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ 
                padding: '0.75rem 1rem', 
                borderRadius: '8px',
                border: '2px solid var(--color-border-tertiary)',
                fontSize: '14px',
                backgroundColor: 'var(--color-background-primary)',
                color: 'var(--color-text-primary)',
                minWidth: '250px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#f5e6d3'}
              onBlur={(e) => e.target.style.borderColor = 'var(--color-border-tertiary)'}
            />
            <button 
              type="submit"
              style={{ 
                padding: '0.75rem 1.5rem', 
                backgroundColor: '#f5e6d3', 
                color: '#2c2c2c', 
                border: 'none', 
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ead9c3';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f5e6d3';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Subscribe
            </button>
          </form>
          {emailError && (
            <p style={{ fontSize: '14px', color: '#d32f2f', marginBottom: '1rem' }}>
              ✗ {emailError}
            </p>
          )}
          {emailSubmitted && (
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
              ✓ Check your email (including spam). Confirmation link will be there.
            </p>
          )}
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem', fontSize: '14px', flexWrap: 'wrap' }}>
            <a href="https://substack.com/@mxnifestdreams" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#f5e6d3'} onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}>Substack</a>
            <a href="https://youtube.com/@mxnifestdreams" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#f5e6d3'} onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}>YouTube</a>
            <a href="https://beacons.ai/mxnifestdreams" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#f5e6d3'} onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}>Beacons</a>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', marginTop: '2rem' }}>
            © 2025 mxnifestdreams. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}