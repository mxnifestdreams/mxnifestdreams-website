'use client';

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

  return (
    <div style={{ background: '#faf9f7', color: '#2d2d2d', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ background: 'white', borderBottom: '1px solid #e8e8e8', padding: '24px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '500', letterSpacing: '-0.5px', color: '#1a1a1a', margin: '0 0 8px 0' }}>mxnifestdreams</h1>
          <p style={{ fontSize: '14px', color: '#666', fontWeight: '400', margin: '0 0 20px 0' }}>Conscious manifesting coach</p>
          
          <nav style={{ display: 'flex', justifyContent: 'center', gap: '32px', borderTop: '1px solid #e8e8e8', paddingTop: '16px', marginTop: '20px' }}>
            <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', fontSize: '13px', color: currentPage === 'home' ? '#1a1a1a' : '#666', fontWeight: '500', cursor: 'pointer', borderBottom: currentPage === 'home' ? '2px solid #1a1a1a' : 'none', paddingBottom: '2px' }}>home</button>
            <button onClick={() => setCurrentPage('about')} style={{ background: 'none', border: 'none', fontSize: '13px', color: currentPage === 'about' ? '#1a1a1a' : '#666', fontWeight: '500', cursor: 'pointer', borderBottom: currentPage === 'about' ? '2px solid #1a1a1a' : 'none', paddingBottom: '2px' }}>about</button>
            <button onClick={() => setCurrentPage('inner-room')} style={{ background: 'none', border: 'none', fontSize: '13px', color: currentPage === 'inner-room' ? '#1a1a1a' : '#666', fontWeight: '500', cursor: 'pointer', borderBottom: currentPage === 'inner-room' ? '2px solid #1a1a1a' : 'none', paddingBottom: '2px' }}>inner room</button>
            <button onClick={() => setCurrentPage('resources')} style={{ background: 'none', border: 'none', fontSize: '13px', color: currentPage === 'resources' ? '#1a1a1a' : '#666', fontWeight: '500', cursor: 'pointer', borderBottom: currentPage === 'resources' ? '2px solid #1a1a1a' : 'none', paddingBottom: '2px' }}>resources</button>
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
        {/* Home Page */}
        {currentPage === 'home' && (
          <>
            <div style={{ padding: '48px 0', textAlign: 'center', background: 'white', margin: '32px 0', borderRadius: '12px', border: '1px solid #e8e8e8' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '16px', color: '#1a1a1a', lineHeight: '1.4' }}>Become the version of you who already has what you want</h2>
              <p style={{ fontSize: '15px', color: '#666', marginBottom: '24px', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 24px' }}>Whether it's your specific person, a new life, or anything else — I teach you the exact method to become that person. That's it. And I'm here to help you do it.</p>
              <a href="https://substack.com/@mxnifestdreams" style={{ display: 'inline-block', background: '#1a1a1a', color: 'white', padding: '12px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>start reading on substack</a>
            </div>

            {/* Testimonials */}
            <div style={{ padding: '48px 0' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '500', textAlign: 'center', marginBottom: '32px', color: '#1a1a1a' }}>real results from real clients</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                {[
                  { text: '"He literally just texted me out of nowhere after 3 months of silence. I genuinely thought it was over. Your content changed everything I swear."', author: 'SP comeback' },
                  { text: '"He came back. He already planned everything like he made the reservation himself. I didn\'t even have to think about it."', author: 'No contact rule' },
                  { text: '"She shifted without me doing anything. I stayed in the new story even when my mind tried to spiral. It keeps unfolding in my favor."', author: 'Manifestation shift' },
                  { text: '"Fastest manifestations occurred by me putting myself into calmness and being unmoved. Not detached from the desire, just lived from having it."', author: 'Detachment success' }
                ].map((testimonial, idx) => (
                  <div key={idx} style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #e8e8e8', fontSize: '14px', color: '#555', lineHeight: '1.6' }}>
                    {testimonial.text}
                    <div style={{ fontWeight: '500', color: '#1a1a1a', marginTop: '12px', fontSize: '13px' }}>— {testimonial.author}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div style={{ padding: '48px 0', background: 'white', margin: '32px 0', borderRadius: '12px', border: '1px solid #e8e8e8', textAlign: 'center' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '24px', color: '#1a1a1a' }}>coaching & community</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', padding: '0 20px' }}>
                {[
                  { title: '1:1 coaching', desc: '30 mins to 1 hour sessions. WhatsApp text + optional voice notes.', price: '€50–90' },
                  { title: '5-day sprint', desc: 'Intensive daily coaching. Mon–Fri, WhatsApp text + voice.', price: '€199' },
                  { title: 'the inner room', desc: 'Private community. Weekly assignments, deep teaches, reflections.', price: '€10/month' }
                ].map((service, idx) => (
                  <div key={idx} style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '15px', fontWeight: '500', marginBottom: '8px', color: '#1a1a1a' }}>{service.title}</h4>
                    <p style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>{service.desc}</p>
                    <p style={{ fontWeight: '600', color: '#1a1a1a', fontSize: '14px' }}>{service.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Capture */}
            <div style={{ padding: '32px', background: '#f5f3f0', borderRadius: '12px', textAlign: 'center', margin: '32px 0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '12px', color: '#1a1a1a' }}>join the free community</h3>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>Get weekly essays on conscious manifesting, delivered to your inbox.</p>
              <form onSubmit={handleEmailSubmit} style={{ display: 'flex', gap: '8px', maxWidth: '400px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
                <input type="email" placeholder="your email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ flex: 1, minWidth: '200px', padding: '10px 16px', border: '1px solid #d0d0d0', borderRadius: '6px', fontSize: '14px' }} />
                <button type="submit" style={{ padding: '10px 20px', background: '#1a1a1a', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '500', fontSize: '14px', cursor: 'pointer' }}>subscribe</button>
              </form>
              {emailError && <p style={{ color: '#d32f2f', fontSize: '13px', marginTop: '8px' }}>{emailError}</p>}
              {emailSubmitted && <p style={{ color: '#388e3c', fontSize: '13px', marginTop: '8px' }}>Thanks for subscribing!</p>}
            </div>
          </>
        )}

        {/* About Page */}
        {currentPage === 'about' && (
          <div style={{ padding: '48px 0', background: 'white', margin: '32px 0', borderRadius: '12px', border: '1px solid #e8e8e8', padding: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '16px', color: '#1a1a1a' }}>About Evan</h2>
            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7', marginBottom: '16px' }}>I'm Evan, a conscious manifesting coach based in Marseille. I teach the Law of Assumption through direct application, not theory.</p>
            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>For over 6 years, I've worked with clients to shift their self-concept and manifest everything from specific people to entirely new lives. Every client who's seen results did one thing: they became the person who already had what they wanted.</p>
          </div>
        )}

        {/* Inner Room Page */}
        {currentPage === 'inner-room' && (
          <div style={{ padding: '48px 0', background: 'white', margin: '32px 0', borderRadius: '12px', border: '1px solid #e8e8e8', padding: '32px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '16px', color: '#1a1a1a' }}>The Inner Room</h2>
            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7', marginBottom: '24px' }}>Coming soon. A private community where we go deep into self-concept work together.</p>
            <a href="https://substack.com/@mxnifestdreams" style={{ display: 'inline-block', background: '#1a1a1a', color: 'white', padding: '12px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>join the free substack first</a>
          </div>
        )}

        {/* Resources Page */}
        {currentPage === 'resources' && (
          <div style={{ padding: '48px 0', background: 'white', margin: '32px 0', borderRadius: '12px', border: '1px solid #e8e8e8', padding: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '24px', color: '#1a1a1a' }}>Resources</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              <a href="https://substack.com/@mxnifestdreams" style={{ padding: '20px', border: '1px solid #e8e8e8', borderRadius: '8px', textDecoration: 'none', color: '#1a1a1a' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '500', marginBottom: '8px' }}>Substack</h4>
                <p style={{ fontSize: '13px', color: '#666' }}>Free weekly essays on conscious manifesting</p>
              </a>
              <a href="https://youtube.com/@mxnifestdreams" style={{ padding: '20px', border: '1px solid #e8e8e8', borderRadius: '8px', textDecoration: 'none', color: '#1a1a1a' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '500', marginBottom: '8px' }}>YouTube</h4>
                <p style={{ fontSize: '13px', color: '#666' }}>Subliminals and coaching content</p>
              </a>
              <a href="https://beacons.ai/mxnifestdreams" style={{ padding: '20px', border: '1px solid #e8e8e8', borderRadius: '8px', textDecoration: 'none', color: '#1a1a1a' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '500', marginBottom: '8px' }}>Beacons</h4>
                <p style={{ fontSize: '13px', color: '#666' }}>Digital products & guides</p>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '32px 0', borderTop: '1px solid #e8e8e8', fontSize: '13px', color: '#999', marginTop: '32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <a href="https://substack.com/@mxnifestdreams" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>substack</a>
            <a href="https://youtube.com/@mxnifestdreams" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>youtube</a>
            <a href="https://instagram.com/mxnifestdreams" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>instagram</a>
            <a href="https://tiktok.com/@mxnifestdreams" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>tiktok</a>
          </div>
          <p>© 2026 mxnifestdreams. All rights reserved. | made with clarity and intention 🤍</p>
        </div>
      </footer>
    </div>
  );
}
