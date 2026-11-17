import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Truck, Check, Smartphone, Sparkles } from 'lucide-react';
import { CartItem, OrderReservation } from '../types';
import { PhoneCaseRenderer } from './PhoneCaseRenderer';

interface BagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, modelId: string, delta: number) => void;
  onRemoveItem: (productId: string, modelId: string) => void;
  onConfirmReservation: (newReservation: OrderReservation) => void;
  onTrackOrder: (orderId: string) => void;
}

export const BagDrawer: React.FC<BagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onConfirmReservation,
  onTrackOrder
}) => {
  const [step, setStep] = useState<'review' | 'details' | 'confirmed'>('review');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [confirmedReservation, setConfirmedReservation] = useState<OrderReservation | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !city) return;

    const reservationId = `CZL-${Math.floor(1000 + Math.random() * 9000)}`;
    const newRes: OrderReservation = {
      orderId: reservationId,
      date: 'Today',
      status: 'Reserved',
      items: items.map(item => ({
        product: item.product,
        phoneModelName: item.selectedModel.name,
        quantity: item.quantity,
        price: item.product.price
      })),
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      shippingAddress: address || 'Standard Residence',
      city,
      pincode: pincode || '400001',
      totalAmount: subtotal,
      trackingNumber: `BD-EXP-${Math.floor(100000 + Math.random() * 900000)}`,
      estimatedDelivery: 'Within 4-5 business days'
    };

    setConfirmedReservation(newRes);
    onConfirmReservation(newRes);
    setStep('confirmed');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
      <div
        className="w-full max-w-md bg-[#F7F4EE] h-full shadow-2xl flex flex-col justify-between border-l border-[#E8E2D5] animate-slideInRight"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bag-drawer-title"
      >
        
        {/* Header */}
        <div className="p-5 border-b border-[#E8E2D5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 id="bag-drawer-title" className="text-xl font-serif font-bold text-[#1E1A1B]">
              {step === 'confirmed' ? 'Reservation Confirmed' : 'Curated Bag'}
            </h2>
            <span className="text-xs bg-[#FCE8EC] text-[#691728] px-2 py-0.5 rounded-full font-bold tabular-nums">
              {items.reduce((acc, i) => acc + i.quantity, 0)} cases
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#1E1A1B]/70 hover:text-[#1E1A1B] hover:bg-[#EFE8DC] rounded-full transition-colors cursor-pointer"
            aria-label="Close bag drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5">
          
          {step === 'confirmed' && confirmedReservation ? (
            <div className="py-8 space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#E4EFF8] text-[#4A5C43] mx-auto flex items-center justify-center">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#4A5C43]">
                  Drop Reservation Received
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#1E1A1B] mt-1">
                  You’re on the Cazelle Studio Register!
                </h3>
                <p className="text-xs text-[#1E1A1B]/70 mt-2 font-sans">
                  We’ve reserved your custom-molded case drop. Your assigned reservation code is:
                </p>
                <div className="mt-3 p-3 bg-white rounded-xl border border-[#DDD5C5] inline-block font-mono text-lg font-bold text-[#691728] tracking-widest">
                  {confirmedReservation.orderId}
                </div>
              </div>

              <div className="bg-white/70 p-4 rounded-2xl border border-[#E8E2D5] text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#1E1A1B]/60">Client:</span>
                  <span className="font-semibold text-[#1E1A1B]">{confirmedReservation.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1E1A1B]/60">Destination:</span>
                  <span className="font-semibold text-[#1E1A1B]">{confirmedReservation.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1E1A1B]/60">Total Value:</span>
                  <span className="font-semibold text-[#1E1A1B] tabular-nums">
                    ₹{confirmedReservation.totalAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onTrackOrder(confirmedReservation.orderId);
                  }}
                  className="w-full py-3 bg-[#691728] hover:bg-[#541220] text-[#FCE8EC] rounded-xl text-xs font-semibold shadow-md transition-colors cursor-pointer"
                >
                  Track This Drop in Real-Time
                </button>
                <button
                  onClick={() => {
                    setStep('review');
                    onClose();
                  }}
                  className="w-full py-2.5 text-xs font-medium text-[#1E1A1B]/70 hover:text-[#1E1A1B] transition-colors cursor-pointer"
                >
                  Continue Exploring Catalogue
                </button>
              </div>
            </div>
          ) : step === 'details' ? (
            <form onSubmit={handleSubmitInquiry} className="space-y-4">
              <div className="text-left mb-2">
                <h3 className="font-serif font-bold text-lg text-[#1E1A1B]">
                  Drop Reservation & Shipping Inquiries
                </h3>
                <p className="text-xs text-[#1E1A1B]/70">
                  Provide your delivery coordinates. Our fulfillment desk will reserve and process your case.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1E1A1B] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Roshni Sen"
                  className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#691728] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1E1A1B] mb-1">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#691728] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1E1A1B] mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#691728] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1E1A1B] mb-1">Delivery Address</label>
                <textarea
                  rows={2}
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Apartment, street name, landmark..."
                  className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#691728] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1E1A1B] mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Bengaluru"
                    className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#691728] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1E1A1B] mb-1">PIN Code</label>
                  <input
                    type="text"
                    required
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="e.g. 560001"
                    className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#691728] focus:outline-none"
                  />
                </div>
              </div>

              <div className="p-3 bg-[#E4EFF8]/60 rounded-xl text-[11px] text-[#4A5C43] space-y-1">
                <p className="font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Editorial Reservation Policy
                </p>
                <p className="text-[#1E1A1B]/75 leading-relaxed">
                  No immediate external payment required. Your case drop will be confirmed by Cazelle Studio with custom print allocation.
                </p>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('review')}
                  className="px-4 py-2.5 rounded-xl border border-[#DDD5C5] bg-white text-xs font-medium text-[#1E1A1B]"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#691728] hover:bg-[#541220] text-[#FCE8EC] text-xs font-semibold rounded-xl transition-colors cursor-pointer shadow-md"
                >
                  Complete Reservation Drop
                </button>
              </div>
            </form>
          ) : items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EFE8DC] flex items-center justify-center text-[#691728]">
                <Smartphone className="w-8 h-8 opacity-40" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-[#1E1A1B]">
                  Your curated bag is empty
                </h3>
                <p className="text-xs text-[#1E1A1B]/60 mt-1 max-w-xs">
                  Discover cases that match your personality across our Funky and Minimal collections.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-[#691728] text-[#FCE8EC] text-xs font-semibold rounded-xl shadow-xs"
              >
                Explore Cases
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedModel.id}`}
                  className="flex gap-4 p-3.5 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs"
                >
                  {/* Visual Case Thumbnail */}
                  <div className="w-16 h-24 bg-[#F7F4EE] rounded-xl flex items-center justify-center shrink-0 p-1 border border-[#E8E2D5]">
                    <PhoneCaseRenderer
                      patternType={item.product.patternType}
                      cameraLayout={item.selectedModel.cameraLayout}
                      showShadow={false}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif font-bold text-sm text-[#1E1A1B]">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.selectedModel.id)}
                          className="text-[#1E1A1B]/40 hover:text-red-600 p-1 transition-colors cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Phone model badge */}
                      <p className="text-xs font-semibold text-[#691728] mt-0.5">
                        Fit: {item.selectedModel.name}
                      </p>
                      <p className="text-[11px] text-[#1E1A1B]/55 capitalize">
                        {item.product.collection} · {item.product.subStyle}
                      </p>
                    </div>

                    {/* Stepper & Price */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#DDD5C5] rounded-lg px-2 py-0.5 text-xs bg-[#F7F4EE]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedModel.id, -1)}
                          className="px-1 text-[#1E1A1B]/70 hover:text-black font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 font-semibold tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedModel.id, 1)}
                          className="px-1 text-[#1E1A1B]/70 hover:text-black font-bold"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#1E1A1B] tabular-nums">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer actions when in review mode with items */}
        {step === 'review' && items.length > 0 && (
          <div className="p-5 border-t border-[#E8E2D5] bg-white/70 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#1E1A1B]/70">
                <span>Subtotal:</span>
                <span className="font-semibold text-[#1E1A1B] tabular-nums">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between text-[#4A5C43]">
                <span>Pan-India Shipping:</span>
                <span className="font-semibold">Complimentary</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#1E1A1B] pt-2 border-t border-[#E8E2D5]">
                <span>Total:</span>
                <span className="text-[#691728] tabular-nums font-sans">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <button
              onClick={() => setStep('details')}
              className="w-full py-3.5 bg-[#691728] hover:bg-[#541220] text-[#FCE8EC] text-xs font-semibold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Reserve Drop / Inquire Case</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-[10px] text-center text-[#1E1A1B]/55">
              Cazelle Studio Lookbook · Direct Model Allocation & QA
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
