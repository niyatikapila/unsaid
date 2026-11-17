import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, RotateCcw, Smartphone, Sparkles, Check } from 'lucide-react';
import { Product, PhoneModelOption, CollectionType } from '../types';
import { SUPPORTED_PHONE_MODELS } from '../data/mockData';
import { ProductCard } from './ProductCard';

interface CatalogSectionProps {
  products: Product[];
  activeCollectionTab: string;
  onSelectCollectionTab: (tab: string) => void;
  selectedPhoneModel: PhoneModelOption;
  onSelectPhoneModel: (model: PhoneModelOption) => void;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  products,
  activeCollectionTab,
  onSelectCollectionTab,
  selectedPhoneModel,
  onSelectPhoneModel,
  onSelectProduct,
  onQuickAdd
}) => {
  const [selectedSubStyle, setSelectedSubStyle] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [inStockOnly, setInStockOnly] = useState(false);

  // Derive sub-styles from current products
  const availableSubStyles = useMemo(() => {
    const set = new Set<string>();
    products.forEach(p => {
      if (activeCollectionTab === 'all' || 
          (activeCollectionTab === 'funky' && p.collection === 'funky') ||
          (activeCollectionTab === 'minimal' && p.collection === 'minimal') ||
          (activeCollectionTab === 'new' && p.isNewArrival)) {
        set.add(p.subStyle);
      }
    });
    return Array.from(set);
  }, [products, activeCollectionTab]);

  // Filter & sort products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Collection filter
        if (activeCollectionTab === 'funky' && p.collection !== 'funky') return false;
        if (activeCollectionTab === 'minimal' && p.collection !== 'minimal') return false;
        if (activeCollectionTab === 'new' && !p.isNewArrival) return false;

        // Sub-style filter
        if (selectedSubStyle !== 'all' && p.subStyle !== selectedSubStyle) return false;

        // In-stock filter
        if (inStockOnly && !p.inStock) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        // Default featured: bestsellers first, then rating
        if (a.isBestseller && !b.isBestseller) return -1;
        if (!a.isBestseller && b.isBestseller) return 1;
        return b.rating - a.rating;
      });
  }, [products, activeCollectionTab, selectedSubStyle, inStockOnly, sortBy]);

  const handleResetFilters = () => {
    onSelectCollectionTab('all');
    setSelectedSubStyle('all');
    setSelectedBrand('all');
    setSortBy('featured');
    setInStockOnly(false);
  };

  const isFiltered = activeCollectionTab !== 'all' || selectedSubStyle !== 'all' || inStockOnly || sortBy !== 'featured';

  return (
    <section id="catalog-section" className="py-16 bg-[#F7F4EE] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#691728] mb-2">
              <span>Cazelle Studio Catalog</span>
              <span aria-hidden="true">·</span>
              <span>Drop 01</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E1A1B] tracking-tight">
              {activeCollectionTab === 'funky'
                ? 'The Funky Collection'
                : activeCollectionTab === 'minimal'
                ? 'The Minimal Collection'
                : activeCollectionTab === 'new'
                ? 'New Spring Arrivals'
                : 'All Designer Cases'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#1E1A1B]/70 max-w-xl font-sans">
              Discover phone cases tailored to your aesthetic personality. All designs are precision-molded for your selected phone model with 8ft drop defense.
            </p>
          </div>

          {/* Global Phone Model Switcher for Entire Grid (iPhones as primary display models) */}
          <div className="bg-white p-3.5 rounded-2xl border border-[#DDD5C5] shadow-xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#E4EFF8] text-[#4A5C43]">
              <Smartphone className="w-5 h-5 text-[#691728]" />
            </div>
            <div>
              <span className="text-[10px] text-[#1E1A1B]/60 font-semibold uppercase tracking-wider block">
                Display iPhone Model:
              </span>
              <select
                value={selectedPhoneModel.id}
                onChange={(e) => {
                  const found = SUPPORTED_PHONE_MODELS.find(m => m.id === e.target.value);
                  if (found) onSelectPhoneModel(found);
                }}
                className="font-bold text-xs text-[#691728] bg-transparent focus:outline-none cursor-pointer pr-3"
              >
                <optgroup label="★ Apple iPhone Models ★">
                  {SUPPORTED_PHONE_MODELS.filter(m => m.brand === 'Apple').map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Other Flagship Devices">
                  {SUPPORTED_PHONE_MODELS.filter(m => m.brand !== 'Apple').map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.brand})
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
          </div>
        </div>

        {/* Filter Toolbar (Segmented Controls & Dropdowns) */}
        <div className="bg-[#EFE8DC]/60 p-4 sm:p-5 rounded-3xl border border-[#E2D8C7] mb-8 space-y-4">
          
          {/* Row 1: Collection Segmented Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 p-1 bg-[#E4DDD0] rounded-xl overflow-x-auto text-xs font-medium">
              {[
                { id: 'all', label: 'All Cases' },
                { id: 'funky', label: 'Funky (Characters)' },
                { id: 'minimal', label: 'Minimal (Stripes & Florals)' },
                { id: 'new', label: 'New Arrivals' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    onSelectCollectionTab(tab.id);
                    setSelectedSubStyle('all');
                  }}
                  className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    activeCollectionTab === tab.id
                      ? 'bg-[#691728] text-[#FCE8EC] font-semibold shadow-xs'
                      : 'text-[#1E1A1B]/70 hover:text-[#1E1A1B]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Sort & In Stock */}
            <div className="flex items-center gap-3 text-xs">
              <label className="text-[#1E1A1B]/70 font-medium hidden sm:inline">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-[#DDD5C5] rounded-xl px-3 py-1.5 font-medium text-[#1E1A1B] focus:outline-none focus:ring-1 focus:ring-[#691728] cursor-pointer"
              >
                <option value="featured">Featured / Bestsellers</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              {isFiltered && (
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-1 text-[#691728] font-semibold hover:underline cursor-pointer ml-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Row 2: Sub-style pills */}
          {availableSubStyles.length > 0 && (
            <div className="flex items-center gap-2 pt-2 border-t border-[#DDD5C5]/60 overflow-x-auto text-xs">
              <span className="text-[#1E1A1B]/60 font-medium shrink-0">Sub-aesthetic:</span>
              <button
                onClick={() => setSelectedSubStyle('all')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer shrink-0 ${
                  selectedSubStyle === 'all'
                    ? 'bg-[#1E1A1B] text-white font-medium'
                    : 'bg-white/80 border border-[#DDD5C5] text-[#1E1A1B]/70 hover:bg-white'
                }`}
              >
                All Themes
              </button>
              {availableSubStyles.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedSubStyle(style)}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer shrink-0 ${
                    selectedSubStyle === style
                      ? 'bg-[#691728] text-white font-medium'
                      : 'bg-white/80 border border-[#DDD5C5] text-[#1E1A1B]/70 hover:bg-white'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          )}

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white/50 rounded-3xl border border-[#DDD5C5] p-8 space-y-3">
            <p className="font-serif text-lg text-[#1E1A1B]">No cases matched your selected filters</p>
            <p className="text-xs text-[#1E1A1B]/60">Try clearing your filters or selecting a different aesthetic collection.</p>
            <button
              onClick={handleResetFilters}
              className="mt-2 px-4 py-2 bg-[#691728] text-white text-xs font-semibold rounded-xl"
            >
              Show All Designs
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                selectedPhoneModel={selectedPhoneModel}
                onSelectProduct={onSelectProduct}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
