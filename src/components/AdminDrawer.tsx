import React, { useState } from 'react';
import { X, Check, SlidersHorizontal, Package, Megaphone, ShoppingCart, MessageSquare, AlertCircle } from 'lucide-react';
import { Product, OrderReservation, Review } from '../types';

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onUpdateProduct: (product: Product) => void;
  reservations: OrderReservation[];
  onUpdateReservationStatus: (orderId: string, status: OrderReservation['status']) => void;
  announcementText: string;
  onUpdateAnnouncement: (text: string) => void;
  reviews: Review[];
  onDeleteReview: (reviewId: string) => void;
}

export const AdminDrawer: React.FC<AdminDrawerProps> = ({
  isOpen,
  onClose,
  products,
  onUpdateProduct,
  reservations,
  onUpdateReservationStatus,
  announcementText,
  onUpdateAnnouncement,
  reviews,
  onDeleteReview
}) => {
  const [activeTab, setActiveTab] = useState<'announcement' | 'inventory' | 'orders' | 'reviews'>('announcement');
  const [tempAnnouncement, setTempAnnouncement] = useState(announcementText);
  const [savedBannerSuccess, setSavedBannerSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSaveBanner = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateAnnouncement(tempAnnouncement);
    setSavedBannerSuccess(true);
    setTimeout(() => setSavedBannerSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
      <div
        className="w-full max-w-xl bg-[#F7F4EE] h-full shadow-2xl flex flex-col justify-between border-l border-[#E8E2D5] animate-slideInRight"
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-drawer-title"
      >
        
        {/* Header */}
        <div className="p-5 border-b border-[#E8E2D5] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-[#691728]" />
            <div>
              <h2 id="admin-drawer-title" className="text-lg font-serif font-bold text-[#1E1A1B]">
                Cazelle Brand Desk
              </h2>
              <p className="text-[11px] text-[#1E1A1B]/60 font-sans">
                Internal catalogue, fulfillment & live drop management
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#1E1A1B]/70 hover:text-[#1E1A1B] hover:bg-[#EFE8DC] rounded-full transition-colors cursor-pointer"
            aria-label="Close admin desk"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#E8E2D5] bg-[#EFE8DC]/50 p-2 gap-1 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('announcement')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 ${
              activeTab === 'announcement' ? 'bg-white text-[#691728] font-bold shadow-xs' : 'text-[#1E1A1B]/70'
            }`}
          >
            <Megaphone className="w-3.5 h-3.5" />
            <span>Announcement</span>
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 ${
              activeTab === 'inventory' ? 'bg-white text-[#691728] font-bold shadow-xs' : 'text-[#1E1A1B]/70'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            <span>Inventory ({products.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 ${
              activeTab === 'orders' ? 'bg-white text-[#691728] font-bold shadow-xs' : 'text-[#1E1A1B]/70'
            }`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Reservations ({reservations.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 ${
              activeTab === 'reviews' ? 'bg-white text-[#691728] font-bold shadow-xs' : 'text-[#1E1A1B]/70'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Reviews ({reviews.length})</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-5">
          
          {/* TAB 1: Announcement Bar Manager */}
          {activeTab === 'announcement' && (
            <form onSubmit={handleSaveBanner} className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-[#E8E2D5] shadow-xs space-y-3">
                <h3 className="font-serif font-bold text-base text-[#1E1A1B]">
                  Top Announcement Strip
                </h3>
                <p className="text-xs text-[#1E1A1B]/70">
                  Update the live promotional notice displayed above the main navigation bar.
                </p>
                <div>
                  <label className="block text-xs font-semibold text-[#1E1A1B] mb-1">
                    Banner Copy:
                  </label>
                  <textarea
                    rows={3}
                    value={tempAnnouncement}
                    onChange={(e) => setTempAnnouncement(e.target.value)}
                    className="w-full bg-[#F7F4EE] border border-[#DDD5C5] rounded-xl p-3 text-xs focus:ring-2 focus:ring-[#691728] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 bg-[#691728] hover:bg-[#541220] text-[#FCE8EC] text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Publish Announcement
                </button>

                {savedBannerSuccess && (
                  <p className="text-xs text-[#4A5C43] font-semibold flex items-center gap-1 mt-2">
                    <Check className="w-3.5 h-3.5" />
                    Live announcement updated successfully!
                  </p>
                )}
              </div>
            </form>
          )}

          {/* TAB 2: Inventory & Price Control */}
          {activeTab === 'inventory' && (
            <div className="space-y-3">
              <p className="text-xs text-[#1E1A1B]/70 mb-3">
                Toggle stock availability or modify retail pricing per design:
              </p>
              {products.map((p) => (
                <div
                  key={p.id}
                  className="bg-white p-4 rounded-2xl border border-[#E8E2D5] shadow-xs flex items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1E1A1B]">
                      {p.name}
                    </h4>
                    <p className="text-xs text-[#691728] font-medium capitalize">
                      {p.collection} · {p.subStyle}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-[#1E1A1B]/60">Price (₹):</span>
                      <input
                        type="number"
                        value={p.price}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          onUpdateProduct({ ...p, price: val });
                        }}
                        className="w-20 bg-[#F7F4EE] border border-[#DDD5C5] rounded-lg px-2 py-1 text-xs font-bold tabular-nums"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => onUpdateProduct({ ...p, inStock: !p.inStock })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                        p.inStock
                          ? 'bg-[#E4EFF8] text-[#4A5C43] border border-[#CCD8E5]'
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                    >
                      {p.inStock ? 'In Stock' : 'Sold Out'}
                    </button>
                    <span className="text-[10px] text-[#1E1A1B]/50">
                      ID: {p.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Reservations & Fulfillment Management */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <p className="text-xs text-[#1E1A1B]/70 mb-2">
                Manage live reservation drops and update fulfillment statuses:
              </p>
              {reservations.map((res) => (
                <div
                  key={res.orderId}
                  className="bg-white p-5 rounded-2xl border border-[#E8E2D5] shadow-xs space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-mono text-sm font-bold text-[#691728]">
                        {res.orderId}
                      </span>
                      <p className="text-xs font-semibold text-[#1E1A1B]">{res.customerName}</p>
                      <p className="text-[11px] text-[#1E1A1B]/60">{res.city} · {res.customerPhone}</p>
                    </div>
                    <span className="text-xs font-bold text-[#1E1A1B] tabular-nums">
                      ₹{res.totalAmount.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Items in reservation */}
                  <div className="bg-[#F7F4EE] p-2.5 rounded-xl text-xs space-y-1">
                    {res.items.map((it, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span>{it.product.name} ({it.phoneModelName})</span>
                        <span className="tabular-nums">x{it.quantity}</span>
                      </div>
                    ))}
                  </div>

                  {/* Status Controller */}
                  <div className="pt-2 border-t border-[#F0EAE1] flex items-center justify-between">
                    <label className="text-xs text-[#1E1A1B]/70 font-medium">Status:</label>
                    <select
                      value={res.status}
                      onChange={(e) => onUpdateReservationStatus(res.orderId, e.target.value as OrderReservation['status'])}
                      className="bg-white border border-[#DDD5C5] rounded-lg px-2.5 py-1 text-xs font-semibold text-[#691728] cursor-pointer"
                    >
                      <option value="Reserved">1. Reserved</option>
                      <option value="Printing & QA">2. Printing & QA</option>
                      <option value="Dispatched">3. Dispatched</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: Customer Review Moderation */}
          {activeTab === 'reviews' && (
            <div className="space-y-3">
              <p className="text-xs text-[#1E1A1B]/70 mb-2">
                Moderate published feedback to maintain genuine authenticity:
              </p>
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white p-4 rounded-2xl border border-[#E8E2D5] shadow-xs flex items-start justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <p className="font-bold text-[#1E1A1B]">{rev.author} ({rev.location})</p>
                    <p className="text-[#691728] font-medium">{rev.casePurchased} · {rev.phoneModel}</p>
                    <p className="text-[#1E1A1B]/75 italic">"{rev.text}"</p>
                  </div>
                  <button
                    onClick={() => onDeleteReview(rev.id)}
                    className="text-red-600 hover:text-red-800 text-[11px] font-semibold shrink-0 cursor-pointer p-1"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E8E2D5] text-center text-[11px] text-[#1E1A1B]/60">
          Cazelle Studio Operational Portal · Changes reflect immediately in live preview
        </div>

      </div>
    </div>
  );
};
