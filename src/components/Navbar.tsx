import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, Sparkles, SlidersHorizontal } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenBag: () => void;
  onOpenTrack: () => void;
  onOpenAdmin: () => void;
  bagCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenSearch,
  onOpenBag,
  onOpenTrack,
  onOpenAdmin,
  bagCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'all', label: 'Shop All' },
    { id: 'funky', label: 'Funky' },
    { id: 'minimal', label: 'Minimal' },
    { id: 'new', label: 'New Arrivals' },
    { id: 'reels', label: 'Spotted on Feed' },
    { id: 'track', label: 'Track Order' },
  ];

  const handleLinkClick = (id: string) => {
    if (id === 'track') {
      onOpenTrack();
    } else {
      onSelectTab(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F4EE]/95 backdrop-blur-md border-b border-[#E8E2D5] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark in display serif */}
        <button
          onClick={() => onSelectTab('home')}
          className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#691728] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 cursor-pointer"
        >
          CAZELLE
        </button>

        {/* Zone 2: Concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#1E1A1B]/80">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#691728] font-semibold'
                    : 'hover:text-[#691728]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#691728] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Search, Admin / Brand Desk, and Bag Drawer CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#1E1A1B]/75 hover:text-[#691728] hover:bg-[#EFE8DC] rounded-full transition-colors cursor-pointer"
            aria-label="Search cases and phone models"
            title="Search collection"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Brand Desk / Studio (PRD Section 14 admin) */}
          <button
            onClick={onOpenAdmin}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#4A5C43] hover:text-[#2E3B29] hover:bg-[#E4EFF8]/70 rounded-md transition-colors cursor-pointer border border-[#CCD8C8]"
            title="Brand Desk: Catalog & Reservation Administration"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Brand Desk</span>
          </button>

          {/* Curated Bag / Lookbook Selection */}
          <button
            onClick={onOpenBag}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#FCE8EC] bg-[#691728] hover:bg-[#541220] rounded-full transition-all shadow-sm hover:shadow cursor-pointer whitespace-nowrap shrink-0"
            aria-label={`Shopping bag containing ${bagCount} items`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Curated Bag</span>
            <span className="bg-[#842337] text-white px-1.5 py-0.2 rounded-full text-[11px] tabular-nums font-bold">
              {bagCount}
            </span>
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1E1A1B] hover:bg-[#EFE8DC] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-Down */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F4EE] border-b border-[#E8E2D5] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                currentTab === link.id
                  ? 'bg-[#FCE8EC] text-[#691728] font-semibold'
                  : 'text-[#1E1A1B] hover:bg-[#EFE8DC]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#E8E2D5] flex gap-2">
            <button
              onClick={() => {
                onOpenAdmin();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 text-center text-xs font-medium text-[#4A5C43] bg-[#E4EFF8]/60 rounded-md border border-[#CCD8C8]"
            >
              Brand Desk (Admin)
            </button>
            <button
              onClick={() => {
                onOpenTrack();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 text-center text-xs font-medium text-[#691728] bg-[#FCE8EC] rounded-md"
            >
              Track Order
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
