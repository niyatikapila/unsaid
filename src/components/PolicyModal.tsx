import React from 'react';
import { X, ShieldCheck, Truck, RotateCcw, HelpCircle, Mail, MapPin, Sparkles } from 'lucide-react';

export type PolicyType = 'shipping' | 'returns' | 'materials' | 'faqs' | 'contact' | 'about';

interface PolicyModalProps {
  type: PolicyType | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap: Record<PolicyType, { title: string; subtitle: string; icon: React.ReactNode; body: React.ReactNode }> = {
    shipping: {
      title: 'Pan-India Shipping & Dispatch',
      subtitle: 'Complimentary standard courier across all Indian pincodes',
      icon: <Truck className="w-6 h-6 text-[#4A5C43]" />,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#1E1A1B]/80 leading-relaxed font-sans">
          <p>
            Every Cazelle phone case is individual to your device's exact camera and button specifications. Once your drop reservation is received, our printing and bevel QA takes 24 hours.
          </p>
          <div className="bg-[#E4EFF8]/60 p-4 rounded-2xl border border-[#CCD8E5] space-y-2">
            <h4 className="font-serif font-bold text-[#1E1A1B]">Delivery Timelines:</h4>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li><strong>Metros (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Kolkata):</strong> 2 to 4 business days.</li>
              <li><strong>Tier 2 & 3 Cities:</strong> 4 to 6 business days.</li>
              <li><strong>Couriers Used:</strong> Bluedart Express, Delhivery Air, and DTDC Priority.</li>
            </ul>
          </div>
          <p>
            You will receive SMS and WhatsApp tracking notifications the moment your package is sealed and scanned.
          </p>
        </div>
      )
    },
    returns: {
      title: '7-Day Fit & Replacement Guarantee',
      subtitle: 'Zero-friction exchanges if you changed or misselected your phone model',
      icon: <RotateCcw className="w-6 h-6 text-[#691728]" />,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#1E1A1B]/80 leading-relaxed font-sans">
          <p>
            We know finding the exact device model (e.g. iPhone 16 Pro vs iPhone 16, or Galaxy S25 vs S25 Ultra) can sometimes be confusing. If your case arrives and does not fit your phone perfectly:
          </p>
          <div className="bg-[#FCE8EC]/60 p-4 rounded-2xl border border-[#F8C9D3] space-y-2">
            <h4 className="font-serif font-bold text-[#691728]">Complimentary Model Swap:</h4>
            <p className="text-xs">
              Notify our WhatsApp concierge within 7 days of receipt. We will dispatch the corrected phone model with zero replacement fees.
            </p>
          </div>
          <p>
            Cases must be returned in their original felt pouch without physical damage or user modifications.
          </p>
        </div>
      )
    },
    materials: {
      title: 'Material Science & Drop Protection',
      subtitle: '8-Foot drop certified without the unsightly rubber bulk',
      icon: <ShieldCheck className="w-6 h-6 text-[#4A5C43]" />,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#1E1A1B]/80 leading-relaxed font-sans">
          <p>
            Cazelle was created to prove that phone cases can look like high-fashion editorial accessories while providing military-standard impact resistance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-white rounded-xl border border-[#DDD5C5]">
              <strong className="text-[#691728] block mb-1">Dual-Layer Armor</strong>
              Rigid outer polycarbonate shell prevents puncture, while an interior shock-absorbing TPU liner dissipates drop shock.
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#DDD5C5]">
              <strong className="text-[#691728] block mb-1">1.5mm Camera Ring</strong>
              Elevated camera lens bevel guarantees zero contact between glass lenses and rough table or asphalt surfaces.
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#DDD5C5]">
              <strong className="text-[#691728] block mb-1">Fade-Proof Inks</strong>
              Sublimated vacuum thermal infusing ensures prints do not peel, flake, or discolor under bright tropical sunlight.
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#DDD5C5]">
              <strong className="text-[#691728] block mb-1">MagSafe Alignment</strong>
              36 embedded NdFeB magnets provide instant snap for car mounts, magnetic wallets, and fast wireless chargers.
            </div>
          </div>
        </div>
      )
    },
    faqs: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about Cazelle cases',
      icon: <HelpCircle className="w-6 h-6 text-[#691728]" />,
      body: (
        <div className="space-y-3 text-xs sm:text-sm text-[#1E1A1B]/80 font-sans">
          <div className="p-3.5 bg-white rounded-xl border border-[#DDD5C5] space-y-1">
            <h4 className="font-bold text-[#1E1A1B]">Will the case work with my MagSafe charger?</h4>
            <p className="text-xs text-[#1E1A1B]/70">
              Yes. All Cazelle flagship cases feature an embedded high-flux magnetic array that locks seamlessly with MagSafe chargers, battery packs, and stands.
            </p>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-[#DDD5C5] space-y-1">
            <h4 className="font-bold text-[#1E1A1B]">Do you support Android flagships?</h4>
            <p className="text-xs text-[#1E1A1B]/70">
              Absolutely. We engineer precision cutouts for the Samsung Galaxy S25 / S24 line, Google Pixel 9 / 8 series, and OnePlus 13 / 12 with customized camera contours.
            </p>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-[#DDD5C5] space-y-1">
            <h4 className="font-bold text-[#1E1A1B]">How do I clean my matte case?</h4>
            <p className="text-xs text-[#1E1A1B]/70">
              Simply wipe gently with a damp microfiber cloth and mild soap. Avoid harsh acetone or alcohol wipes which can degrade the velvety oleophobic touch layer.
            </p>
          </div>
        </div>
      )
    },
    contact: {
      title: 'Contact Cazelle Studio',
      subtitle: 'We are here to help with styling advice, custom device fit and order inquiries',
      icon: <Mail className="w-6 h-6 text-[#691728]" />,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#1E1A1B]/80 font-sans">
          <p>
            Have a question about a design or looking for PR & creator collaboration? Connect with our team directly:
          </p>
          <div className="space-y-2 bg-white p-4 rounded-2xl border border-[#DDD5C5] text-xs">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#691728]" />
              <span>General & Editorial Inquiries: <strong>concierge@cazelle.in</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#4A5C43]" />
              <span>Creator & PR Partnerships: <strong>creators@cazelle.in</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#691728]" />
              <span>Studio: 14 Indiranagar 100ft Road, Bengaluru, KA 560038</span>
            </div>
          </div>
        </div>
      )
    },
    about: {
      title: 'About Cazelle',
      subtitle: 'Where individual personality meets everyday protective design',
      icon: <Sparkles className="w-6 h-6 text-[#691728]" />,
      body: (
        <div className="space-y-3 text-xs sm:text-sm text-[#1E1A1B]/80 font-sans leading-relaxed">
          <p>
            Cazelle was founded on a simple realization: in an era where we look at our phones hundreds of times a day, phone cases shouldn’t feel like utilitarian plastic packaging. They should feel like pieces of personal identity.
          </p>
          <p>
            Our catalog is anchored around two distinct aesthetic philosophies:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs">
            <li><strong>Funky:</strong> For the expressive, quirky, character-loving, pop-culture-fluent souls who find joy in playful graphics.</li>
            <li><strong>Minimal:</strong> For the understated, botanical, Parisian-stripe lovers who prize quiet luxury and delicate line art.</li>
          </ul>
          <p>
            Hand-curated in India, rigorously drop-tested, and built for your everyday confidence.
          </p>
        </div>
      )
    }
  };

  const current = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        className="w-full max-w-xl bg-[#F7F4EE] rounded-3xl border border-[#E8E2D5] shadow-2xl p-6 sm:p-8 relative max-h-[85vh] overflow-y-auto animate-fadeIn"
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-dialog-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#1E1A1B]/70 hover:text-[#1E1A1B] hover:bg-[#EFE8DC] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-white rounded-2xl border border-[#DDD5C5] shadow-xs">
            {current.icon}
          </div>
          <div>
            <h2 id="policy-dialog-title" className="text-xl sm:text-2xl font-serif font-bold text-[#1E1A1B]">
              {current.title}
            </h2>
            <p className="text-xs text-[#1E1A1B]/60 font-sans mt-0.5">
              {current.subtitle}
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E8E2D5]">
          {current.body}
        </div>

        <div className="mt-8 pt-4 border-t border-[#E8E2D5] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#691728] text-[#FCE8EC] text-xs font-semibold rounded-xl hover:bg-[#541220] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
