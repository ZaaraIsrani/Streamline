'use client';

import { useEffect, useState, FormEvent } from 'react'
import { trackPageView, trackFeatureInterest, trackSignup } from '../lib/supabase';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Add smooth scroll behavior to all anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link) {
        const href = link.getAttribute('href');
        if (href?.startsWith('#')) {
          e.preventDefault();
          const element = document.getElementById(href.slice(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            
            // Track feature interest if clicking on a feature link
            if (href === '#features') {
              trackFeatureInterest('general_features');
            }
          }
        }
      }
    };

    // Add font imports
    const playfairLink = document.createElement('link');
    playfairLink.rel = 'stylesheet';
    playfairLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@200;300;400;500;600;700&display=swap';
    document.head.appendChild(playfairLink);

    const montserratLink = document.createElement('link');
    montserratLink.rel = 'stylesheet';
    montserratLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap';
    document.head.appendChild(montserratLink);

    // Track page view
    trackPageView('home');

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubmitMessage('Please enter a valid email address');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('idle');

    try {
      const result = await trackSignup(email);
      
      if (result.success) {
        setSubmitMessage('Thank you for joining our waitlist!');
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Something went wrong. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Fixed Waitlist Button */}
      <a href="#signup" className="fixed-cta">
        Join the Waitlist
      </a>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="site-name">
            Streamline
          </h1>
          <h2 className="tagline">
            Find your perfect sound - Faster!
          </h2>
          <p className="hero-description">
            Tell us what you&apos;re creating, and we&apos;ll recommend the perfect sounds based on your vision, speed, and genre.
          </p>
          <div className="hero-buttons">
            <a 
              href="#signup" 
              className="hero-button primary-button"
              onClick={() => trackFeatureInterest('waitlist_hero_button')}
            >
              Join the Waitlist
            </a>
            <a 
              href="#features" 
              className="hero-button secondary-button"
              onClick={() => trackFeatureInterest('learn_more_button')}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="features-container">
          <h2 className="section-title">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div 
              className="feature-card"
              onClick={() => trackFeatureInterest('share_vision')}
            >
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 16.5V4.5m0 6.553L12.75 12" />
                </svg>
              </div>
              <h3 className="feature-title">Share Your Vision</h3>
              <p className="feature-description">
                Tell us about your project&apos;s mood, genre, and the emotions you want to evoke.
              </p>
            </div>

            <div 
              className="feature-card"
              onClick={() => trackFeatureInterest('define_sound')}
            >
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                </svg>
              </div>
              <h3 className="feature-title">Define Your Sound</h3>
              <p className="feature-description">
                Specify tempo, energy, and any unique sound characteristics you&apos;re looking for.
              </p>
            </div>

            <div 
              className="feature-card"
              onClick={() => trackFeatureInterest('get_matches')}
            >
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="feature-title">Get Perfect Matches</h3>
              <p className="feature-description">
                Receive handpicked sound suggestions that perfectly align with your creative vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section id="signup" className="signup-section">
        <div className="signup-container">
          <h2 className="signup-title">Stay Updated</h2>
          <p className="signup-description">
            Be the first to try our sound recommendation tool—sign up to receive early access and updates.
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
          {submitMessage && (
            <p className={`mt-4 text-sm ${submitStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {submitMessage}
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container mx-auto px-6">
          <div className="social-links">
            <a href="#" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </a>
          </div>
          <p className="disclaimer">© 2024 Streamline. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
} 

