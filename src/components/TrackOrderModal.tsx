import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, PackageCheck, Truck, ShieldCheck, PhoneCall } from 'lucide-react';
import { OrderReservation } from '../types';

interface TrackOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  reservations: OrderReservation[];
  initialSearchId?: string;
}

export const TrackOrderModal: React.FC<TrackOrderModalProps> = ({
  isOpen,
  onClose,
  reservations,
  initialSearchId = ''
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchId || (reservations[0]?.orderId || ''));
  const [selectedOrder, setSelectedOrder] = useState<OrderReservation | null>(
    reservations.find(r => r.orderId.toLowerCase() === searchQuery.toLowerCase()) || reservations[0] || null
  );

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    const found = reservations.find(
      r => r.orderId.toLowerCase() === query || 
           r.customerPhone.includes(query) || 
           r.customerEmail.toLowerCase().includes(query)
    );
    setSelectedOrder(found || null);
  };

  const steps = [
    { title: 'Drop Reserved', desc: 'Case design & device cutout verified' },
    { title: 'Printing & QA', desc: 'Thermal sublimation & dual-layer inspection' },
    { title: 'Packaging', desc: 'Hand-packed in recycled matte sleeve' },
    { title: 'Dispatched', desc: 'In transit via Bluedart Express' }
  ];

  const getStepIndex = (status: string) => {
    switch (status) {
      case 'Reserved': return 1;
      case 'Printing & QA': return 2;
      case 'Dispatched': return 4;
      default: return 2;
    }
  };

  const currentStep = selectedOrder ? getStepIndex(selectedOrder.status) : 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        className="w-full max-w-2xl bg-[#F7F4EE] rounded-3xl border border-[#E8E2D5] shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="track-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#1E1A1B]/70 hover:text-[#1E1A1B] hover:bg-[#EFE8DC] transition-colors cursor-pointer"
          aria-label="Close track order modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#691728]">
            Cazelle Dispatch & QA Portal
          </span>
          <h2 id="track-modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1A1B] mt-1">
            Track Your <span className="italic font-normal text-[#691728]">Drop</span>
          </h2>
          <p className="text-xs text-[#1E1A1B]/70 mt-1 font-sans">
            Enter your reservation code (e.g. <button onClick={() => { setSearchQuery('CZL-8492'); setSelectedOrder(reservations[0]); }} className="underline font-mono text-[#691728]">CZL-8492</button> or <button onClick={() => { setSearchQuery('CZL-9104'); setSelectedOrder(reservations[1]); }} className="underline font-mono text-[#691728]">CZL-9104</button>) or registered phone number.
          </p>
        </div>

        {/* Search Input */}
        <form onSubmit={handleSearch} className="mt-5 flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#1E1A1B]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. CZL-8492 or +91 98201..."
              className="w-full bg-white border border-[#DDD5C5] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#691728] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 bg-[#691728] hover:bg-[#541220] text-[#FCE8EC] text-xs font-semibold rounded-xl transition-colors cursor-pointer shadow-xs shrink-0"
          >
            Locate Drop
          </button>
        </form>

        {/* Order Details View */}
        {selectedOrder ? (
          <div className="mt-8 space-y-6">
            
            {/* Status Header Box */}
            <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-[#1E1A1B]/60 uppercase tracking-wider font-semibold">
                  Reservation Code
                </span>
                <p className="text-xl font-mono font-bold text-[#691728]">
                  {selectedOrder.orderId}
                </p>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-[#1E1A1B]/60 uppercase tracking-wider font-semibold">
                  Estimated Delivery
                </span>
                <p className="text-sm font-bold text-[#4A5C43]">
                  {selectedOrder.estimatedDelivery}
                </p>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8E2D5] shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E1A1B] mb-6">
                Fulfillment Progress
              </h3>

              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-4 left-4 right-4 h-0.5 bg-[#E8E2D5] -z-0 hidden sm:block" />
                
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative z-10">
                  {steps.map((st, idx) => {
                    const stepNum = idx + 1;
                    const isDone = currentStep >= stepNum;
                    const isCurrent = currentStep === stepNum;

                    return (
                      <div key={idx} className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                            isDone
                              ? 'bg-[#4A5C43] text-white shadow-xs'
                              : 'bg-[#EFE8DC] text-[#1E1A1B]/50 border border-[#DDD5C5]'
                          } ${isCurrent ? 'ring-4 ring-[#E4EFF8]' : ''}`}
                        >
                          {isDone ? <CheckCircle2 className="w-4 h-4" /> : stepNum}
                        </div>
                        <div>
                          <p className={`text-xs font-semibold ${isDone ? 'text-[#1E1A1B]' : 'text-[#1E1A1B]/50'}`}>
                            {st.title}
                          </p>
                          <p className="text-[11px] text-[#1E1A1B]/60 font-sans leading-tight mt-0.5">
                            {st.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Items Summary */}
            <div className="bg-white rounded-2xl p-5 border border-[#E8E2D5] shadow-xs space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E1A1B]">
                Reserved Items & Custom Cutout
              </h3>
              <div className="divide-y divide-[#F0EAE1]">
                {selectedOrder.items.map((it, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-[#1E1A1B]">{it.product.name}</p>
                      <p className="text-[#691728] font-medium text-[11px]">
                        Custom Model: {it.phoneModelName} (Qty: {it.quantity})
                      </p>
                    </div>
                    <span className="font-bold tabular-nums">
                      ₹{(it.price * it.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-[#E8E2D5] flex justify-between text-xs font-bold">
                <span>Shipping Address:</span>
                <span className="text-[#1E1A1B]/75 font-normal text-right">
                  {selectedOrder.shippingAddress}, {selectedOrder.city} ({selectedOrder.pincode})
                </span>
              </div>
            </div>

            {/* Support Note */}
            <div className="text-center text-xs text-[#1E1A1B]/60 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4A5C43]" />
              <span>Need help modifying phone model? Reach Cazelle Studio at support@cazelle.in</span>
            </div>

          </div>
        ) : (
          <div className="mt-8 text-center py-10 bg-white rounded-2xl border border-[#DDD5C5] p-6 space-y-3">
            <Clock className="w-10 h-10 text-[#691728] opacity-40 mx-auto" />
            <h3 className="font-serif font-bold text-base text-[#1E1A1B]">
              No drop reservation found
            </h3>
            <p className="text-xs text-[#1E1A1B]/60 max-w-sm mx-auto">
              Please check the reservation code from your confirmation or review active reservations under Brand Desk.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
