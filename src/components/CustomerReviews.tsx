import React, { useState } from 'react';
import { Star, CheckCircle, ThumbsUp, MessageSquarePlus, X, Filter } from 'lucide-react';
import { Review } from '../types';
import { SUPPORTED_PHONE_MODELS } from '../data/mockData';

interface CustomerReviewsProps {
  reviews: Review[];
  onAddReview: (newReview: Review) => void;
}

export const CustomerReviews: React.FC<CustomerReviewsProps> = ({ reviews, onAddReview }) => {
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  // Form state
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [phoneModel, setPhoneModel] = useState('iPhone 16 Pro');
  const [casePurchased, setCasePurchased] = useState('French Riviera Stripe');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const filteredReviews = filterRating
    ? reviews.filter((r) => r.rating === filterRating)
    : reviews;

  const averageRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
  ).toFixed(1);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !text || !title) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author,
      location: location || 'India',
      rating,
      date: 'Just now',
      verifiedPurchase: true,
      phoneModel,
      casePurchased,
      title,
      text,
      helpfulCount: 1
    };

    onAddReview(newRev);
    setIsWriteModalOpen(false);
    // Reset
    setAuthor('');
    setLocation('');
    setTitle('');
    setText('');
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F7F4EE] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#691728] mb-2">
              <span>Customer Reflections</span>
              <span aria-hidden="true">·</span>
              <span>100% Verified Buyers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E1A1B] tracking-tight">
              Loved by <span className="italic font-normal text-[#691728]">You</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#1E1A1B]/70 max-w-xl">
              Real feedback from individuals across Indian cities who chose Cazelle for its distinct aesthetic personality and rugged daily drop resistance.
            </p>
          </div>

          {/* Review Score Summary & Write Action */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-white border border-[#DDD5C5] rounded-2xl px-5 py-3 shadow-xs flex items-center gap-3">
              <div className="text-2xl font-bold font-serif text-[#691728] tabular-nums">
                {averageRating}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  ))}
                </div>
                <p className="text-[11px] text-[#1E1A1B]/60 font-medium">
                  Based on {reviews.length} genuine reviews
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="px-4 py-3 bg-[#691728] hover:bg-[#541220] text-[#FCE8EC] rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Share Your Case Story</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 text-xs font-medium">
          <span className="text-[#1E1A1B]/60 flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter by Rating:</span>
          </span>
          <button
            onClick={() => setFilterRating(null)}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer shrink-0 ${
              filterRating === null
                ? 'bg-[#1E1A1B] text-white font-semibold'
                : 'bg-white border border-[#DDD5C5] text-[#1E1A1B]/80 hover:bg-[#EFE8DC]'
            }`}
          >
            All Ratings ({reviews.length})
          </button>
          {[5, 4].map((star) => {
            const count = reviews.filter((r) => r.rating === star).length;
            return (
              <button
                key={star}
                onClick={() => setFilterRating(filterRating === star ? null : star)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer shrink-0 flex items-center gap-1 ${
                  filterRating === star
                    ? 'bg-[#691728] text-white font-semibold'
                    : 'bg-white border border-[#DDD5C5] text-[#1E1A1B]/80 hover:bg-[#EFE8DC]'
                }`}
              >
                <span>{star} Stars</span>
                <span className="opacity-60 tabular-nums">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredReviews.map((rev) => (
            <article
              key={rev.id}
              className="bg-white/80 rounded-2xl p-6 border border-[#E4DCB] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                {/* Stars and verified buyer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating
                            ? 'fill-amber-400 text-amber-500'
                            : 'text-stone-300'
                        }`}
                      />
                    ))}
                  </div>
                  {rev.verifiedPurchase && (
                    <span className="text-[11px] font-medium text-[#4A5C43] flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified Buyer</span>
                    </span>
                  )}
                </div>

                {/* Case & Model metadata (Unboxed text with dots) */}
                <div className="text-xs text-[#691728] font-semibold">
                  <span>{rev.casePurchased}</span>
                  <span aria-hidden="true" className="mx-1.5 opacity-40 text-[#1E1A1B]">·</span>
                  <span className="text-[#1E1A1B]/70 font-normal">{rev.phoneModel}</span>
                </div>

                {/* Review Headline & Body */}
                <h3 className="font-serif font-bold text-base text-[#1E1A1B] leading-snug">
                  "{rev.title}"
                </h3>
                <p className="text-xs sm:text-sm text-[#1E1A1B]/75 leading-relaxed font-sans">
                  {rev.text}
                </p>

              </div>

              {/* Author & Location Footer */}
              <div className="mt-5 pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-[11px] text-[#1E1A1B]/60">
                <div>
                  <p className="font-bold text-[#1E1A1B]">{rev.author}</p>
                  <p>{rev.location}</p>
                </div>
                <div className="flex items-center gap-1 text-[#4A5C43]">
                  <ThumbsUp className="w-3 h-3" />
                  <span className="tabular-nums">{rev.helpfulCount} found helpful</span>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Share Your Story Modal */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#F7F4EE] rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#E8E2D5] shadow-2xl relative">
            <button
              onClick={() => setIsWriteModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#1E1A1B] hover:bg-[#EFE8DC] rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-serif font-bold text-[#1E1A1B]">
              Share Your <span className="italic font-normal text-[#691728]">Cazelle</span> Story
            </h3>
            <p className="text-xs text-[#1E1A1B]/70 mt-1">
              Help fellow style enthusiasts discover how your case fits and feels in everyday use.
            </p>

            <form onSubmit={handleSubmitReview} className="space-y-4 mt-6">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1E1A1B] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. Diya Patel"
                    className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#691728] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1E1A1B] mb-1">City</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Mumbai, MH"
                    className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#691728] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1E1A1B] mb-1">Your Device</label>
                  <select
                    value={phoneModel}
                    onChange={(e) => setPhoneModel(e.target.value)}
                    className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#691728] focus:outline-none cursor-pointer"
                  >
                    {SUPPORTED_PHONE_MODELS.map(m => (
                      <option key={m.id} value={m.name}>{m.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1E1A1B] mb-1">Rating</label>
                  <div className="flex items-center gap-1 py-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setRating(s)}
                        className="cursor-pointer"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            s <= rating ? 'fill-amber-400 text-amber-500' : 'text-stone-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1E1A1B] mb-1">Headline</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Surpassed all expectations on texture and drop protection"
                  className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#691728] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1E1A1B] mb-1">Detailed Review</label>
                <textarea
                  required
                  rows={3}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Tell us about the buttons, camera cutout, color vibrancy, and general feel..."
                  className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#691728] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#691728] hover:bg-[#541220] text-[#FCE8EC] text-xs font-semibold rounded-xl transition-colors cursor-pointer shadow-md"
              >
                Publish Genuine Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
