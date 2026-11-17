import React, { useState } from 'react';
import { X, Search, Sparkles, ArrowRight, Smartphone } from 'lucide-react';
import { Product, PhoneModelOption } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  phoneModels: PhoneModelOption[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  phoneModels,
  onSelectProduct
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  if (!isOpen) return null;

  const popularTags = ['Cat', 'Stripes', 'Floral', 'Dino', 'Ghost', 'iPhone 16 Pro', 'Pixel', 'Galaxy'];

  const filteredProducts = products.filter((p) => {
    const term = searchTerm.toLowerCase();
    const matchesTerm =
      p.name.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term) ||
      p.subStyle.toLowerCase().includes(term) ||
      p.collection.toLowerCase().includes(term);

    const matchesTag = selectedTag
      ? p.name.toLowerCase().includes(selectedTag.toLowerCase()) ||
        p.subStyle.toLowerCase().includes(selectedTag.toLowerCase()) ||
        p.collection.toLowerCase().includes(selectedTag.toLowerCase())
      : true;

    return matchesTerm && matchesTag;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs">
      <div
        className="w-full max-w-2xl bg-[#F7F4EE] rounded-3xl border border-[#E8E2D5] shadow-2xl p-6 relative overflow-hidden animate-fadeIn"
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#1E1A1B]/70 hover:text-[#1E1A1B] hover:bg-[#EFE8DC] transition-colors cursor-pointer"
          aria-label="Close search dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 id="search-modal-title" className="text-xl font-serif font-bold text-[#1E1A1B] mb-4">
          Discover Cazelle Designs
        </h2>

        {/* Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-[#691728] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by aesthetic, character, flowers, or case name..."
            className="w-full bg-white border border-[#DDD5C5] rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:ring-2 focus:ring-[#691728] focus:outline-none shadow-xs"
          />
        </div>

        {/* Popular Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-4 text-xs">
          <span className="text-[#1E1A1B]/60 font-medium">Quick keywords:</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                if (selectedTag === tag) {
                  setSelectedTag(null);
                } else {
                  setSelectedTag(tag);
                  setSearchTerm('');
                }
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#691728] text-white'
                  : 'bg-white border border-[#DDD5C5] text-[#1E1A1B]/80 hover:bg-[#EFE8DC]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="mt-6 max-h-[360px] overflow-y-auto divide-y divide-[#E8E2D5]">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-8 text-xs text-[#1E1A1B]/60">
              No matching phone case designs found. Try searching for "Cat", "Floral", or "Stripes".
            </div>
          ) : (
            filteredProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  onSelectProduct(p);
                  onClose();
                }}
                className="py-3 flex items-center justify-between hover:bg-white/60 px-3 rounded-xl transition-colors cursor-pointer group"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-sm text-[#1E1A1B] group-hover:text-[#691728] transition-colors">
                      {p.name}
                    </span>
                    <span className="text-[11px] capitalize text-[#691728] font-semibold">
                      {p.collection}
                    </span>
                  </div>
                  <p className="text-xs text-[#1E1A1B]/60 line-clamp-1 mt-0.5 font-sans">
                    {p.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-bold text-[#1E1A1B] tabular-nums">
                    ₹{p.price.toLocaleString('en-IN')}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#1E1A1B]/40 group-hover:text-[#691728] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
