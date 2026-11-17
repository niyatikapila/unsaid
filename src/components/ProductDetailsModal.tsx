import React, { useState } from 'react';
import { X, Check, Star, ShieldCheck, Zap, Truck, RotateCcw, Plus, Minus, Smartphone, Heart } from 'lucide-react';
import { Product, PhoneModelOption, Review } from '../types';
import { SUPPORTED_PHONE_MODELS, CUSTOMER_REVIEWS } from '../data/mockData';
import { PhoneCaseRenderer } from './PhoneCaseRenderer';

interface ProductDetailsModalProps {
  product: Product | null;
  selectedModel: PhoneModelOption;
  onClose: () => void;
  onSelectModel: (model: PhoneModelOption) => void;
  onAddToBag: (product: Product, model: PhoneModelOption, quantity: number) => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  selectedModel,
  onClose,
  onSelectModel,
  onAddToBag
}) => {
  if (!product) return null;

  const [activeBrand, setActiveBrand] = useState<string>(selectedModel.brand);
  const [quantity, setQuantity] = useState(1);
  const [activeViewAngle, setActiveViewAngle] = useState<'back' | 'camera' | 'bumper'>('back');
  const [modalStickers, setModalStickers] = useState<string[]>(['smiley-flower']);
  const [isSaved, setIsSaved] = useState(false);
  const [showAddedBanner, setShowAddedBanner] = useState(false);

  // Filter models by brand
  const brandModels = SUPPORTED_PHONE_MODELS.filter(m => m.brand === activeBrand);

  // Reviews for this product or general
  const productReviews = CUSTOMER_REVIEWS.filter(
    r => r.casePurchased.toLowerCase() === product.name.toLowerCase()
  );

  const handleModelChange = (modelId: string) => {
    const found = SUPPORTED_PHONE_MODELS.find(m => m.id === modelId);
    if (found) {
      onSelectModel(found);
    }
  };

  const handleAdd = () => {
    onAddToBag(product, selectedModel, quantity);
    setShowAddedBanner(true);
    setTimeout(() => setShowAddedBanner(false), 2400);
  };

  const toggleModalSticker = (s: string) => {
    setModalStickers(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-[#F7F4EE] rounded-3xl border border-[#E8E2D5] shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#1E1A1B] shadow-sm transition-colors cursor-pointer"
          aria-label="Close product details dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[580px]">
          
          {/* Left Visual Column */}
          <div className="md:col-span-6 bg-[#EFE8DC]/50 p-6 sm:p-8 flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-[#E8E2D5]">
            
            {/* View angle selector tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#E4DDD0] rounded-xl text-xs font-medium">
              <button
                onClick={() => setActiveViewAngle('back')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeViewAngle === 'back'
                    ? 'bg-white text-[#691728] shadow-xs font-semibold'
                    : 'text-[#1E1A1B]/70 hover:text-[#1E1A1B]'
                }`}
              >
                Device Back
              </button>
              <button
                onClick={() => setActiveViewAngle('camera')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeViewAngle === 'camera'
                    ? 'bg-white text-[#691728] shadow-xs font-semibold'
                    : 'text-[#1E1A1B]/70 hover:text-[#1E1A1B]'
                }`}
              >
                Camera Bevel
              </button>
              <button
                onClick={() => setActiveViewAngle('bumper')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeViewAngle === 'bumper'
                    ? 'bg-white text-[#691728] shadow-xs font-semibold'
                    : 'text-[#1E1A1B]/70 hover:text-[#1E1A1B]'
                }`}
              >
                Dual Bumper
              </button>
            </div>

            {/* Interactive Phone Case Inspection Stage */}
            <div className="relative w-48 sm:w-56 h-[380px] my-4 flex items-center justify-center">
              {activeViewAngle === 'back' && (
                <PhoneCaseRenderer
                  patternType={product.patternType}
                  cameraLayout={selectedModel.cameraLayout}
                  modelName={selectedModel.name}
                  stickers={modalStickers}
                  className="w-full h-full drop-shadow-2xl"
                />
              )}

              {activeViewAngle === 'camera' && (
                <div className="w-full h-full bg-white rounded-2xl border border-[#DDD5C5] p-5 flex flex-col justify-between shadow-inner">
                  <div className="text-center">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#691728]">
                      1.5mm Raised Bevel Cutout
                    </span>
                    <p className="text-xs text-[#1E1A1B]/60 mt-1">
                      Molded specifically for {selectedModel.name}
                    </p>
                  </div>
                  <div className="py-2 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-2xl bg-[#EFE8DC] p-3 border-2 border-[#691728] flex items-center justify-center shadow-lg">
                      <div className="text-center space-y-1">
                        <ShieldCheck className="w-8 h-8 text-[#691728] mx-auto" />
                        <p className="text-xs font-bold text-[#1E1A1B]">Zero Table Scratch</p>
                        <p className="text-[10px] text-[#1E1A1B]/60">Lenses never touch flat surfaces</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] text-[#1E1A1B]/70 text-center bg-[#FCE8EC]/50 p-2 rounded-lg">
                    Precision CNC diamond-cut camera ring with glare hood.
                  </div>
                </div>
              )}

              {activeViewAngle === 'bumper' && (
                <div className="w-full h-full bg-white rounded-2xl border border-[#DDD5C5] p-5 flex flex-col justify-between shadow-inner">
                  <div className="text-center">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#4A5C43]">
                      Dual-Layer Armor Core
                    </span>
                    <p className="text-xs text-[#1E1A1B]/60 mt-1">
                      Shock-absorbing TPU + Rigid Polycarbonate
                    </p>
                  </div>
                  <div className="space-y-3 py-2 text-xs">
                    <div className="flex items-center gap-2 bg-[#F7F4EE] p-2.5 rounded-lg border border-[#E8E2D5]">
                      <div className="w-3 h-3 rounded-full bg-[#691728]" />
                      <span className="font-medium">8ft Drop Certified (MIL-STD-810G)</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#F7F4EE] p-2.5 rounded-lg border border-[#E8E2D5]">
                      <div className="w-3 h-3 rounded-full bg-[#4A5C43]" />
                      <span className="font-medium">Air-Pocket Corner Dampers</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#F7F4EE] p-2.5 rounded-lg border border-[#E8E2D5]">
                      <div className="w-3 h-3 rounded-full bg-[#E4EFF8]" />
                      <span className="font-medium">Velvet interior prevents micro-scuffs</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-[#4A5C43] text-center font-medium bg-[#E4EFF8]/50 p-2 rounded-lg">
                    Full MagSafe magnet array embedded flush.
                  </div>
                </div>
              )}
            </div>

            {/* Sticker Customizer Bar */}
            <div className="w-full pt-1 pb-2">
              <div className="flex items-center justify-between text-[11px] text-[#1E1A1B]/70 font-semibold mb-1.5 px-1">
                <span>Add Sticker Accents:</span>
                <span className="text-[#691728]">The Case Company Style</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-1.5">
                {[
                  { id: 'smiley-flower', label: '🌼 Daisy' },
                  { id: 'drop-shield', label: '🛡️ 8ft Shield' },
                  { id: 'vintage-stamp', label: '📮 Stamp' },
                  { id: 'handle-with-care', label: '★ Style' }
                ].map(stk => (
                  <button
                    key={stk.id}
                    onClick={() => toggleModalSticker(stk.id)}
                    className={`px-2 py-1 rounded-md text-[11px] font-semibold border transition-all cursor-pointer ${
                      modalStickers.includes(stk.id)
                        ? 'bg-[#691728] text-white border-[#691728] shadow-xs'
                        : 'bg-white/80 text-[#1E1A1B]/75 border-[#DDD5C5] hover:bg-white'
                    }`}
                  >
                    {stk.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Model Fit Indicator */}
            <div className="text-center pt-1 border-t border-[#DDD5C5] w-full">
              <span className="text-xs text-[#1E1A1B]/70">
                Fit Preview: <strong className="text-[#691728]">{selectedModel.name}</strong>
              </span>
            </div>

          </div>

          {/* Right Details & Purchase Module */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
            
            <div className="space-y-5">
              
              {/* Collection & Rating */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-[#691728]">
                  {product.collection} · {product.subStyle}
                </span>
                <div className="flex items-center gap-1 text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  <span className="font-bold tabular-nums text-[#1E1A1B]">{product.rating}</span>
                  <span className="text-[#1E1A1B]/50">({product.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Title & Price */}
              <div>
                <h1 id="product-modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1A1B]">
                  {product.name}
                </h1>
                <p className="text-sm text-[#1E1A1B]/70 mt-1">
                  {product.tagline}
                </p>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-[#1E1A1B] tabular-nums font-sans">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#1E1A1B]/40 line-through tabular-nums">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  <span className="text-xs font-medium text-[#4A5C43] bg-[#E4EFF8]/80 px-2 py-0.5 rounded border border-[#CCD8E5]">
                    In Stock · Ready for Dispatch
                  </span>
                </div>
              </div>

              {/* Story / Description */}
              <p className="text-xs sm:text-sm text-[#1E1A1B]/80 leading-relaxed font-sans">
                {product.description}
              </p>

              {/* Phone Model Selector (CRITICAL PRD REQUIREMENT) */}
              <div className="space-y-2 pt-2 border-t border-[#E8E2D5]">
                <div className="flex items-center justify-between">
                  <label htmlFor="phone-model-select" className="text-xs font-bold text-[#1E1A1B] uppercase tracking-wider flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-[#691728]" />
                    <span>Select Your Phone Model:</span>
                  </label>
                  <span className="text-[11px] text-[#4A5C43] font-medium">Guaranteed Snug Fit</span>
                </div>

                {/* Brand Selector Tabs */}
                <div className="flex items-center gap-1 p-1 bg-[#EBE4D8] rounded-lg">
                  {(['Apple', 'Samsung', 'Google', 'OnePlus'] as const).map((b) => (
                    <button
                      key={b}
                      onClick={() => {
                        setActiveBrand(b);
                        const firstForBrand = SUPPORTED_PHONE_MODELS.find(m => m.brand === b);
                        if (firstForBrand) onSelectModel(firstForBrand);
                      }}
                      className={`flex-1 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                        activeBrand === b
                          ? 'bg-white text-[#691728] shadow-xs font-semibold'
                          : 'text-[#1E1A1B]/70 hover:text-[#1E1A1B]'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>

                {/* Model Dropdown */}
                <select
                  id="phone-model-select"
                  value={selectedModel.id}
                  onChange={(e) => handleModelChange(e.target.value)}
                  className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2 text-xs sm:text-sm text-[#1E1A1B] font-medium focus:outline-none focus:ring-2 focus:ring-[#691728] cursor-pointer shadow-xs"
                >
                  {brandModels.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.brand})
                    </option>
                  ))}
                </select>
              </div>

              {/* Material Features List */}
              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-bold text-[#1E1A1B] uppercase tracking-wider">
                  Engineered Specifications
                </span>
                <ul className="space-y-1 text-xs text-[#1E1A1B]/75">
                  {product.materialFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#4A5C43] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Quantity and Primary Add to Bag Action */}
            <div className="pt-6 mt-4 border-t border-[#E8E2D5] space-y-3">
              
              <div className="flex items-center gap-4">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-[#DDD5C5] rounded-xl bg-white px-2 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 hover:text-[#691728] transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs sm:text-sm font-bold tabular-nums text-[#1E1A1B]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 hover:text-[#691728] transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Primary Add Action */}
                <button
                  onClick={handleAdd}
                  className="flex-1 py-3 px-6 bg-[#691728] hover:bg-[#541220] text-[#FCE8EC] text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Add to Curated Bag</span>
                  <span className="tabular-nums">· ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                </button>

                {/* Wishlist toggle */}
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-3 rounded-xl border transition-colors cursor-pointer ${
                    isSaved
                      ? 'bg-[#FCE8EC] border-[#F8C9D3] text-[#691728]'
                      : 'bg-white border-[#DDD5C5] text-[#1E1A1B]/60 hover:text-[#691728]'
                  }`}
                  aria-label="Save to favorites"
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-[#691728]' : ''}`} />
                </button>
              </div>

              {/* Added Feedback Toast */}
              {showAddedBanner && (
                <div className="bg-[#4A5C43] text-white text-xs font-medium py-2 px-3 rounded-lg text-center flex items-center justify-center gap-1.5 animate-fadeIn">
                  <Check className="w-4 h-4" />
                  <span>Added {product.name} ({selectedModel.name}) to your Curated Bag</span>
                </div>
              )}

              {/* Delivery & Dispatch Note */}
              <div className="flex items-center justify-between text-[11px] text-[#1E1A1B]/65 pt-1">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#4A5C43]" />
                  Complimentary Pan-India Delivery
                </span>
                <span className="flex items-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5 text-[#691728]" />
                  7-Day Fit Guarantee
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Product Specific Reviews footer if available */}
        {productReviews.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E8E2D5]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#691728] mb-3">
              Verified Case Experience
            </h4>
            <div className="space-y-3">
              {productReviews.map(r => (
                <div key={r.id} className="text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#1E1A1B]">{r.author} ({r.phoneModel})</span>
                    <span className="text-[#1E1A1B]/50">{r.date}</span>
                  </div>
                  <p className="text-[#1E1A1B]/80 font-sans italic">"{r.text}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
