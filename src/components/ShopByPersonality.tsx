import React from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { PhoneCaseRenderer } from './PhoneCaseRenderer';

interface ShopByPersonalityProps {
  onSelectCollection: (collection: 'funky' | 'minimal') => void;
}

export const ShopByPersonality: React.FC<ShopByPersonalityProps> = ({ onSelectCollection }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#F7F4EE] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#691728] mb-2">
            <span>Aesthetic Discovery</span>
            <span aria-hidden="true">·</span>
            <span>Two Core Moods</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E1A1B] tracking-tight">
            Shop by <span className="italic font-normal text-[#691728]">Personality</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1E1A1B]/70 font-sans">
            Whether your mood calls for quirky character charm or timeless Parisian botanical grace, pick your aesthetic universe.
          </p>
        </div>

        {/* 2 Dominant Personality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: FUNKY */}
          <div
            onClick={() => onSelectCollection('funky')}
            className="group relative bg-[#FCE8EC]/60 hover:bg-[#FCE8EC]/90 border border-[#F8C9D3] rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            {/* Playful Sticker Badge in corner */}
            <div className="absolute top-4 right-4 rotate-6 z-10">
              <span className="bg-[#691728] text-[#FCE8EC] text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs uppercase tracking-wider">
                ★ POP STICKERS ★
              </span>
            </div>

            {/* Visual Phone Cases Showcase inside card (iPhone models) */}
            <div className="flex items-center justify-center gap-4 py-6 relative">
              <div className="w-32 sm:w-36 h-56 sm:h-64 -rotate-6 transition-transform group-hover:-rotate-12 duration-300">
                <PhoneCaseRenderer
                  patternType="matcha-club"
                  cameraLayout="iphone-triple"
                  showShadow={false}
                  stickers={['smiley-flower']}
                />
              </div>
              <div className="w-32 sm:w-36 h-56 sm:h-64 rotate-6 transition-transform group-hover:rotate-12 duration-300">
                <PhoneCaseRenderer
                  patternType="lucky-cat"
                  cameraLayout="iphone-triple"
                  showShadow={false}
                />
              </div>
            </div>

            {/* Content info */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-bold text-[#691728]">
                  Collection N°01
                </span>
                <span className="text-xs text-[#1E1A1B]/60 font-medium">
                  9 Signature Designs
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1A1B] group-hover:text-[#691728] transition-colors">
                  The Funky Collection
                </h3>
                <p className="text-sm text-[#1E1A1B]/75 mt-1 leading-relaxed">
                  Retro diner matcha mascots, waving lucky cats, warped checkerboard waves, glossy cherries, and dopamine boosters.
                </p>
              </div>

              {/* Trait Tags (Unboxed inline text) */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#691728] font-medium pt-1">
                <span>Matcha Club</span>
                <span aria-hidden="true">·</span>
                <span>Fortune Kitty</span>
                <span aria-hidden="true">·</span>
                <span>Groovy Checker</span>
                <span aria-hidden="true">·</span>
                <span>Cherry Pop</span>
                <span aria-hidden="true">·</span>
                <span>Mischief Cat</span>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center gap-2 text-sm font-semibold text-[#691728]">
                <span>Discover Funky Drops</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: MINIMAL */}
          <div
            onClick={() => onSelectCollection('minimal')}
            className="group relative bg-[#E4EFF8]/60 hover:bg-[#E4EFF8]/90 border border-[#CCD8E5] rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            {/* Minimalist Seal Badge in corner */}
            <div className="absolute top-4 right-4 -rotate-6 z-10">
              <span className="bg-[#4A5C43] text-[#F7F4EE] text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs uppercase tracking-wider">
                ★ PARISIAN TAILORING ★
              </span>
            </div>

            {/* Visual Phone Cases Showcase inside card (iPhone models) */}
            <div className="flex items-center justify-center gap-4 py-6 relative">
              <div className="w-32 sm:w-36 h-56 sm:h-64 -rotate-6 transition-transform group-hover:-rotate-12 duration-300">
                <PhoneCaseRenderer
                  patternType="french-stripes"
                  cameraLayout="iphone-triple"
                  showShadow={false}
                />
              </div>
              <div className="w-32 sm:w-36 h-56 sm:h-64 rotate-6 transition-transform group-hover:rotate-12 duration-300">
                <PhoneCaseRenderer
                  patternType="matisse-lineart"
                  cameraLayout="iphone-triple"
                  showShadow={false}
                />
              </div>
            </div>

            {/* Content info */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-bold text-[#4A5C43]">
                  Collection N°02
                </span>
                <span className="text-xs text-[#1E1A1B]/60 font-medium">
                  9 Curated Silhouettes
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1A1B] group-hover:text-[#4A5C43] transition-colors">
                  The Minimal Collection
                </h3>
                <p className="text-sm text-[#1E1A1B]/75 mt-1 leading-relaxed">
                  Breton stripes, Matisse contour silhouettes, botanical wild chamomile, Copenhagen grids, and tortoiseshell luxury.
                </p>
              </div>

              {/* Trait Tags (Unboxed inline text) */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#4A5C43] font-medium pt-1">
                <span>French Riviera</span>
                <span aria-hidden="true">·</span>
                <span>Matisse Contour</span>
                <span aria-hidden="true">·</span>
                <span>Tortoiseshell</span>
                <span aria-hidden="true">·</span>
                <span>Copenhagen Grid</span>
                <span aria-hidden="true">·</span>
                <span>Wildflower</span>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center gap-2 text-sm font-semibold text-[#4A5C43]">
                <span>Discover Minimal Drops</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
