import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Sparkles, Tag, Instagram } from 'lucide-react';
import { CREATOR_VIDEOS } from '../data/mockData';
import { CreatorVideo } from '../types';

interface CreatorReelsProps {
  onOpenProductById: (productId: string) => void;
}

export const CreatorReels: React.FC<CreatorReelsProps> = ({ onOpenProductById }) => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const togglePlay = (id: string) => {
    if (activeVideoId === id) {
      setActiveVideoId(null);
    } else {
      setActiveVideoId(id);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F7F4EE] border-b border-[#E8E2D5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#691728] mb-2">
              <span>Creator Collaborations</span>
              <span aria-hidden="true">·</span>
              <span>PR & Real Unboxings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E1A1B] tracking-tight">
              Spotted on <span className="italic font-normal text-[#691728]">Your Feed</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#1E1A1B]/70 max-w-xl">
              From Mumbai coffee runs to Delhi fashion weeks. See how creators, photographers, and indie stylists style Cazelle drops in daily life.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleScroll('left')}
              className="p-2.5 rounded-full border border-[#DDD5C5] bg-white hover:bg-[#EFE8DC] text-[#1E1A1B] transition-colors cursor-pointer shadow-xs"
              aria-label="Scroll left in creator feed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-2.5 rounded-full border border-[#DDD5C5] bg-white hover:bg-[#EFE8DC] text-[#1E1A1B] transition-colors cursor-pointer shadow-xs"
              aria-label="Scroll right in creator feed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Reel Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto no-scrollbar pb-4 pt-1 snap-x snap-mandatory"
        >
          {CREATOR_VIDEOS.map((reel) => {
            const isPlaying = activeVideoId === reel.id;

            return (
              <div
                key={reel.id}
                className="relative w-[280px] sm:w-[310px] h-[520px] rounded-3xl overflow-hidden shrink-0 snap-center shadow-lg border border-[#E2D8C7] flex flex-col justify-between group"
              >
                {/* Background Gradient & Animated Reel Canvas */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reel.gradient} transition-all duration-700`}>
                  
                  {/* Subtle noise/texture overlay */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  {/* Pulsing visual wave when active */}
                  {isPlaying ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full border border-white/30 animate-ping opacity-25" />
                      <div className="text-white/90 text-center px-4 space-y-2">
                        <span className="text-xs uppercase tracking-widest font-semibold">Playing Preview</span>
                        <div className="flex items-center justify-center gap-1">
                          <span className="w-1.5 h-6 bg-[#FCE8EC] rounded-full animate-bounce [animation-delay:0.1s]" />
                          <span className="w-1.5 h-8 bg-[#FCE8EC] rounded-full animate-bounce [animation-delay:0.2s]" />
                          <span className="w-1.5 h-4 bg-[#FCE8EC] rounded-full animate-bounce [animation-delay:0.3s]" />
                          <span className="w-1.5 h-7 bg-[#FCE8EC] rounded-full animate-bounce [animation-delay:0.15s]" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white/90 space-y-3">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-white fill-white ml-1" />
                      </div>
                      <p className="text-xs font-serif italic text-[#FCE8EC] opacity-80 px-4">
                        "{reel.thumbnailAesthetic}"
                      </p>
                    </div>
                  )}

                  {/* Gradient Scrim for readable text overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 pointer-events-none" />
                </div>

                {/* Top Bar inside Reel */}
                <div className="relative z-10 p-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-2">
                    <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full font-semibold flex items-center gap-1 text-[11px]">
                      <Instagram className="w-3 h-3 text-[#FCE8EC]" />
                      <span>{reel.creatorHandle}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors cursor-pointer"
                      aria-label={isMuted ? "Unmute reel" : "Mute reel"}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => togglePlay(reel.id)}
                      className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors cursor-pointer"
                      aria-label={isPlaying ? "Pause reel" : "Play reel"}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                    </button>
                  </div>
                </div>

                {/* Bottom Bar: Caption, Tagged Case and View Details */}
                <div className="relative z-10 p-5 space-y-3">
                  
                  {/* Tagged Case Pill that opens product */}
                  <button
                    onClick={() => onOpenProductById(reel.caseId)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 hover:bg-white text-[#1E1A1B] text-xs font-semibold shadow-md backdrop-blur-xs transition-colors cursor-pointer"
                  >
                    <Tag className="w-3 h-3 text-[#691728]" />
                    <span className="truncate max-w-[170px]">Tagged: {reel.caseTagged}</span>
                  </button>

                  {/* Caption */}
                  <p className="text-xs text-white/95 line-clamp-3 leading-relaxed font-sans">
                    {reel.caption}
                  </p>

                  {/* Creator and views metadata */}
                  <div className="flex items-center justify-between text-[11px] text-white/70 pt-1 border-t border-white/20">
                    <span>{reel.creatorName} · {reel.city}</span>
                    <span className="tabular-nums font-mono">{reel.views} views</span>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Creator Submission Note */}
        <div className="mt-8 text-center text-xs text-[#1E1A1B]/65 font-medium">
          Tag <strong className="text-[#691728]">@CazelleIndia</strong> or use <strong className="text-[#691728]">#CasesThatFeelLikeYou</strong> on Instagram to be featured on our editorial board.
        </div>

      </div>
    </section>
  );
};
