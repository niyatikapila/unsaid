import React from 'react';
import { Eye, Plus, Star } from 'lucide-react';
import { Product, PhoneModelOption } from '../types';
import { PhoneCaseRenderer } from './PhoneCaseRenderer';

interface ProductCardProps {
  product: Product;
  selectedPhoneModel: PhoneModelOption;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  selectedPhoneModel,
  onSelectProduct,
  onQuickAdd
}) => {
  return (
    <article className="group bg-[#EFE8DC]/40 hover:bg-[#EFE8DC]/80 rounded-2xl border border-[#E4DCB] transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden p-4 sm:p-5">
      
      {/* Top Metadata Strip (Unboxed text with separators, no pill badges) */}
      <div className="flex items-center justify-between text-xs text-[#1E1A1B]/70 mb-3">
        <div className="flex items-center gap-1.5 font-medium">
          <span className="capitalize font-semibold text-[#691728]">{product.collection}</span>
          <span aria-hidden="true" className="opacity-40">/</span>
          <span>{product.subStyle}</span>
        </div>
        
        {/* Subtle Status Flag */}
        {product.isBestseller && (
          <span className="text-[11px] font-semibold text-[#4A5C43]">
            Bestseller
          </span>
        )}
        {product.isNewArrival && !product.isBestseller && (
          <span className="text-[11px] font-semibold text-[#691728]">
            New Drop
          </span>
        )}
      </div>

      {/* Case Visual Frame */}
      <div
        onClick={() => onSelectProduct(product)}
        className="relative w-full h-64 sm:h-72 flex items-center justify-center bg-white/60 rounded-xl p-4 cursor-pointer overflow-hidden group-hover:bg-white transition-colors"
      >
        <div className="w-32 sm:w-36 h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <PhoneCaseRenderer
            patternType={product.patternType}
            cameraLayout={selectedPhoneModel.cameraLayout}
            modelName={selectedPhoneModel.name}
            className="w-full h-auto drop-shadow-md"
          />
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#1E1A1B]/90 hover:bg-black rounded-full flex items-center gap-1.5 shadow-md backdrop-blur-xs cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Case Specs & Fit</span>
          </button>
        </div>
      </div>

      {/* Bottom Content & Purchase / Reserve Row */}
      <div className="mt-4 pt-1 flex flex-col gap-2">
        
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3
              onClick={() => onSelectProduct(product)}
              className="font-serif font-bold text-base sm:text-lg text-[#1E1A1B] hover:text-[#691728] transition-colors cursor-pointer"
            >
              {product.name}
            </h3>
            <p className="text-xs text-[#1E1A1B]/65 line-clamp-1 mt-0.5">
              {product.tagline}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 text-xs text-[#1E1A1B]/80 font-medium shrink-0 pt-0.5">
            <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
            <span className="tabular-nums font-semibold">{product.rating}</span>
          </div>
        </div>

        {/* Price & Quick Add Button */}
        <div className="mt-2 pt-2 border-t border-[#E2D8C7] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-[#1E1A1B] tabular-nums font-sans">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#1E1A1B]/40 line-through tabular-nums">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <button
            onClick={() => onQuickAdd(product)}
            className="p-2 bg-[#691728] hover:bg-[#541220] text-[#FCE8EC] rounded-lg transition-colors cursor-pointer flex items-center gap-1 text-xs font-medium"
            title={`Add ${product.name} to curated bag`}
            aria-label={`Add ${product.name} to bag`}
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>

      </div>

    </article>
  );
};
