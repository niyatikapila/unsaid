import React, { useState } from 'react';
import { ArrowRight, Sparkles, Smartphone, ShieldCheck, Zap, Heart, Check, Plus } from 'lucide-react';
import { PhoneCaseRenderer } from './PhoneCaseRenderer';
import { SUPPORTED_PHONE_MODELS } from '../data/mockData';
import { PhoneModelOption } from '../types';

interface HeroBannerProps {
  onExplore: (collection?: 'funky' | 'minimal') => void;
  onOpenProduct: (productId: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExplore, onOpenProduct }) => {
  // Let user switch hero showcase between Funky (Matcha / Mischief Cat) and Minimal (French Riviera)
  const [activePersona, setActivePersona] = useState<'funky' | 'minimal'>('funky');
  // Default display model is iPhone 16 Pro
  const [selectedModel, setSelectedModel] = useState<PhoneModelOption>(SUPPORTED_PHONE_MODELS[0]);
  // Active stickers on the case
  const [activeStickers, setActiveStickers] = useState<string[]>(['smiley-flower', 'drop-shield']);

  const heroShowcase = activePersona === 'funky'
    ? {
        id: 'czl-02',
        name: 'Matcha Club Diner',
        tagline: 'Iced Matcha Latte Mascot & Retro Checkerboard',
        pattern: 'matcha-club',
        accentBg: 'bg-[#FCE8EC]',
        textAccent: 'text-[#691728]',
        collection: 'Funky Collection',
        badge: 'Diner Pop Art Hit',
        description: 'For those who wear their humour on their sleeves and their personality on their devices.'
      }
    : {
        id: 'czl-10',
        name: 'French Riviera Stripe',
        tagline: 'Fine Breton Linework on Warm Sand',
        pattern: 'french-stripes',
        accentBg: 'bg-[#E4EFF8]',
        textAccent: 'text-[#4A5C43]',
        collection: 'Minimal Collection',
        badge: 'Understated Parisian Chic',
        description: 'Precision Breton stripes tailored in burgundy wine over an organic warm sand silhouette.'
      };

  const toggleSticker = (stickerId: string) => {
    setActiveStickers(prev => 
      prev.includes(stickerId)
        ? prev.filter(s => s !== stickerId)
        : [...prev, stickerId]
    );
  };

  const availableStickers = [
    { id: 'smiley-flower', label: '🌼 Smiley Daisy', color: 'bg-[#FCE8EC] text-[#691728] border-[#F8C9D3]' },
    { id: 'drop-shield', label: '🛡️ 8ft Drop Shield', color: 'bg-[#1E1A1B] text-[#E5A93B] border-stone-800' },
    { id: 'vintage-stamp', label: '📮 Paris Air Mail', color: 'bg-[#F7F4EE] text-[#691728] border-[#DDD5C5]' },
    { id: 'handle-with-care', label: '★ Handle With Style', color: 'bg-[#C82845] text-white border-transparent' },
  ];

  // iPhone models filter
  const iphoneModels = SUPPORTED_PHONE_MODELS.filter(m => m.brand === 'Apple');

  return (
    <section className="relative overflow-hidden bg-[#F7F4EE] border-b border-[#E8E2D5] pt-8 pb-16 lg:py-20">
      
      {/* Editorial Decorative Background Accents using the 5 colors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FCE8EC]/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E4EFF8]/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#4A5C43]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Washi-Tape & Sticker Accents on Desktop */}
      <div className="hidden lg:block absolute top-8 left-12 rotate-[-8deg] pointer-events-none z-10">
        <span className="bg-[#691728] text-[#FCE8EC] text-[11px] font-bold px-3 py-1 rounded shadow-md tracking-wider uppercase">
          ★ IPHONE 16 PRO DROP ★
        </span>
      </div>

      <div className="hidden lg:block absolute bottom-12 right-16 rotate-[6deg] pointer-events-none z-10">
        <div className="bg-[#E4EFF8] text-[#4A5C43] border border-[#CCD8E5] text-[11px] font-bold px-3.5 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#691728]" />
          <span>MAGSAFE EMBEDDED</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Color Palette Indicators & Drop Announcement */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-medium">
              <span className="bg-[#691728] text-white px-2.5 py-0.5 rounded-md font-semibold text-[11px] uppercase tracking-wider">
                Burgundy Edition
              </span>
              <span className="bg-[#FCE8EC] text-[#691728] border border-[#F8C9D3] px-2 py-0.5 rounded-md font-semibold text-[11px]">
                Cherry Blossom
              </span>
              <span className="bg-[#4A5C43] text-[#F7F4EE] px-2 py-0.5 rounded-md font-semibold text-[11px]">
                Moss Green
              </span>
              <span className="bg-[#E4EFF8] text-[#1E1A1B] border border-[#CCD8E5] px-2 py-0.5 rounded-md font-semibold text-[11px]">
                Sky Blue
              </span>
              <span className="bg-[#EBE4D8] text-[#1E1A1B]/70 px-2 py-0.5 rounded-md font-semibold text-[11px]">
                Warm Sand
              </span>
            </div>

            {/* Oversized High-Contrast Serif Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1E1A1B] leading-[1.08] tracking-tight">
              Cases That Feel <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#691728]">Like You.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#1E1A1B]/75 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              From playful character stickers to understated Parisian stripes. Cazelle marries fashion-forward iPhone aesthetics with precision-beveled 8ft drop defense.
            </p>

            {/* Persona Switcher Buttons & Display iPhone Selector */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center p-1 bg-[#EBE4D8] rounded-xl border border-[#DDD5C5]">
                <button
                  onClick={() => setActivePersona('funky')}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    activePersona === 'funky'
                      ? 'bg-[#691728] text-[#FCE8EC] shadow-sm font-semibold'
                      : 'text-[#1E1A1B]/70 hover:text-[#1E1A1B]'
                  }`}
                >
                  Funky & Stickers
                </button>
                <button
                  onClick={() => setActivePersona('minimal')}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    activePersona === 'minimal'
                      ? 'bg-[#691728] text-[#FCE8EC] shadow-sm font-semibold'
                      : 'text-[#1E1A1B]/70 hover:text-[#1E1A1B]'
                  }`}
                >
                  Minimal & Stripes
                </button>
              </div>

              {/* iPhone Display Model Selector */}
              <div className="flex items-center gap-2 text-xs text-[#1E1A1B]/80 bg-white border border-[#DDD5C5] rounded-xl px-3 py-1.5 shadow-2xs">
                <Smartphone className="w-4 h-4 text-[#691728]" />
                <span className="font-semibold text-[11px] uppercase tracking-wider text-[#1E1A1B]/60">Display iPhone:</span>
                <select
                  value={selectedModel.id}
                  onChange={(e) => {
                    const found = SUPPORTED_PHONE_MODELS.find(m => m.id === e.target.value);
                    if (found) setSelectedModel(found);
                  }}
                  className="bg-transparent font-bold text-xs text-[#1E1A1B] focus:outline-none cursor-pointer pr-1"
                  aria-label="Select iPhone display model"
                >
                  {iphoneModels.map(model => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Interactive Sticker Bar (Customize your case lookbook!) */}
            <div className="pt-2 text-left">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1E1A1B]/70 mb-2 justify-center lg:justify-start">
                <Sparkles className="w-3.5 h-3.5 text-[#691728]" />
                <span>Tap to pin stickers on iPhone display:</span>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {availableStickers.map(stk => {
                  const isAttached = activeStickers.includes(stk.id);
                  return (
                    <button
                      key={stk.id}
                      onClick={() => toggleSticker(stk.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs ${
                        isAttached
                          ? `${stk.color} ring-2 ring-[#691728] scale-105`
                          : 'bg-white/80 border-[#DDD5C5] text-[#1E1A1B]/70 hover:bg-white'
                      }`}
                    >
                      {isAttached ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3 opacity-60" />}
                      <span>{stk.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onExplore(activePersona)}
                className="px-6 py-3.5 text-sm font-semibold text-[#FCE8EC] bg-[#691728] hover:bg-[#541220] rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer group"
              >
                <span>Explore {activePersona === 'funky' ? 'Funky' : 'Minimal'} Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => onOpenProduct(heroShowcase.id)}
                className="px-5 py-3.5 text-sm font-medium text-[#1E1A1B] bg-white hover:bg-[#F2ECE1] border border-[#DDD5C5] rounded-xl transition-colors cursor-pointer"
              >
                View Case Specs
              </button>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#E8E2D5] max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <p className="text-sm font-bold text-[#691728] font-serif">8-Foot</p>
                <p className="text-xs text-[#1E1A1B]/60">Drop Protection</p>
              </div>
              <div>
                <p className="text-sm font-bold text-[#691728] font-serif">Dual-Layer</p>
                <p className="text-xs text-[#1E1A1B]/60">Shock Armor</p>
              </div>
              <div>
                <p className="text-sm font-bold text-[#691728] font-serif">MagSafe</p>
                <p className="text-xs text-[#1E1A1B]/60">Titanium Fit</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[340px] p-6 rounded-3xl bg-[#EFE8DC]/70 border border-[#E2D8C7] shadow-xl backdrop-blur-xs flex flex-col items-center">
              
              {/* Card Header Tag */}
              <div className="w-full flex items-center justify-between text-xs text-[#1E1A1B]/70 mb-4 px-2">
                <span className="font-semibold text-[#691728]">{heroShowcase.collection}</span>
                <span className="bg-white/90 px-2 py-0.5 rounded text-[11px] font-mono text-[#4A5C43] border border-[#CCD8C8]">
                  {selectedModel.name}
                </span>
              </div>

              {/* Interactive Phone Case View with Stickers */}
              <div
                className="relative w-48 sm:w-56 h-[380px] sm:h-[440px] flex items-center justify-center my-2 cursor-pointer group"
                onClick={() => onOpenProduct(heroShowcase.id)}
              >
                <PhoneCaseRenderer
                  patternType={heroShowcase.pattern}
                  cameraLayout={selectedModel.cameraLayout}
                  modelName={selectedModel.name}
                  stickers={activeStickers}
                  className="w-full h-full drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />

                {/* Subtle Hover Callout */}
                <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-[#1E1A1B]/90 text-white text-[11px] font-medium px-3 py-1 rounded-full shadow-lg">
                    Click for 360° Specs
                  </span>
                </div>
              </div>

              {/* Case Title and Micro Description */}
              <div className="text-center mt-3 pt-3 border-t border-[#DDD5C5] w-full">
                <h2 className="font-serif text-lg font-bold text-[#1E1A1B]">
                  {heroShowcase.name}
                </h2>
                <p className="text-xs text-[#1E1A1B]/65 font-sans mt-0.5">
                  {heroShowcase.tagline}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
