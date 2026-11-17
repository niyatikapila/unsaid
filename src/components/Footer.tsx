import React, { useState } from 'react';
import { ArrowRight, Instagram, Twitter, Mail, Check, Heart, Shield } from 'lucide-react';
import { PolicyType } from './PolicyModal';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenPolicy: (type: PolicyType) => void;
  onOpenTrack: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenPolicy,
  onOpenTrack,
  onOpenAdmin
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSuccess(false), 4000);
  };

  return (
    <footer className="bg-[#EFE8DC]/80 border-t border-[#E2D8C7] text-[#1E1A1B] pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#DDD5C5]">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-3xl font-bold tracking-tight text-[#691728] block">
              CAZELLE
            </span>
            <p className="text-xs sm:text-sm text-[#1E1A1B]/75 leading-relaxed max-w-sm">
              Cases that feel like you. Bridging playful individual expression with military-grade dual layer protection for modern flagship devices.
            </p>
            <div className="pt-1 flex items-center gap-3 text-xs text-[#1E1A1B]/60">
              <span>Handcrafted Curation</span>
              <span aria-hidden="true">·</span>
              <span>Pan-India Delivery</span>
              <span aria-hidden="true">·</span>
              <span>MagSafe Ready</span>
            </div>
          </div>

          {/* Navigation Links Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#691728]">
              Collections
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#1E1A1B]/80">
              <li>
                <button
                  onClick={() => onSelectTab('funky')}
                  className="hover:text-[#691728] transition-colors cursor-pointer"
                >
                  The Funky Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('minimal')}
                  className="hover:text-[#691728] transition-colors cursor-pointer"
                >
                  The Minimal Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('new')}
                  className="hover:text-[#691728] transition-colors cursor-pointer"
                >
                  New Spring Drops
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('all')}
                  className="hover:text-[#691728] transition-colors cursor-pointer"
                >
                  Shop Full Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('reels')}
                  className="hover:text-[#691728] transition-colors cursor-pointer"
                >
                  Spotted on Feed (Reels)
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Policies Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#691728]">
              Client Care
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#1E1A1B]/80">
              <li>
                <button
                  onClick={onOpenTrack}
                  className="hover:text-[#691728] transition-colors cursor-pointer"
                >
                  Track Order / Reservation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('shipping')}
                  className="hover:text-[#691728] transition-colors cursor-pointer"
                >
                  Shipping & Pan-India
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('returns')}
                  className="hover:text-[#691728] transition-colors cursor-pointer"
                >
                  7-Day Fit Guarantee
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('materials')}
                  className="hover:text-[#691728] transition-colors cursor-pointer"
                >
                  Material & 8ft Drop Science
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('faqs')}
                  className="hover:text-[#691728] transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('contact')}
                  className="hover:text-[#691728] transition-colors cursor-pointer"
                >
                  Contact Studio Concierge
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Drops Notification Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#691728]">
              Cazelle Gazette
            </h4>
            <p className="text-xs text-[#1E1A1B]/75 leading-relaxed">
              Receive private invitations for limited edition character artist drops, lookbooks, and phone model releases.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="flex-1 bg-white border border-[#DDD5C5] rounded-xl px-3.5 py-2 text-xs text-[#1E1A1B] focus:ring-2 focus:ring-[#691728] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#691728] hover:bg-[#541220] text-[#FCE8EC] text-xs font-semibold rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  Join
                </button>
              </div>

              {newsletterSuccess && (
                <p className="text-xs text-[#4A5C43] font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Welcome to the Gazette! We’ll notify you of Drop 02.
                </p>
              )}
            </form>

            <div className="pt-2 flex items-center gap-3">
              <span className="text-[11px] text-[#1E1A1B]/60 font-medium">Follow the community:</span>
              <a
                href="#feed"
                onClick={(e) => { e.preventDefault(); onSelectTab('reels'); }}
                className="p-1.5 rounded-full bg-white text-[#691728] hover:bg-[#FCE8EC] transition-colors border border-[#DDD5C5]"
                aria-label="Instagram feed"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenAdmin}
                className="text-[11px] text-[#4A5C43] font-semibold underline underline-offset-2 hover:text-[#2E3B29] cursor-pointer"
              >
                Brand Desk (Internal)
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Quiet Copyright and Studio Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#1E1A1B]/60 gap-4">
          <p>© 2026 Cazelle Studio Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <button onClick={() => onOpenPolicy('about')} className="hover:text-[#691728] cursor-pointer">
              About Cazelle
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => onOpenPolicy('shipping')} className="hover:text-[#691728] cursor-pointer">
              Pan-India Dispatch
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => onOpenPolicy('returns')} className="hover:text-[#691728] cursor-pointer">
              Fit Guarantee
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
