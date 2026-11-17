import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ShopByPersonality } from './components/ShopByPersonality';
import { CatalogSection } from './components/CatalogSection';
import { CreatorReels } from './components/CreatorReels';
import { CustomerReviews } from './components/CustomerReviews';
import { Footer } from './components/Footer';
import { ProductDetailsModal } from './components/ProductDetailsModal';
import { BagDrawer } from './components/BagDrawer';
import { TrackOrderModal } from './components/TrackOrderModal';
import { SearchModal } from './components/SearchModal';
import { AdminDrawer } from './components/AdminDrawer';
import { PolicyModal, PolicyType } from './components/PolicyModal';
import { INITIAL_PRODUCTS, INITIAL_RESERVATIONS, CUSTOMER_REVIEWS, SUPPORTED_PHONE_MODELS } from './data/mockData';
import { Product, PhoneModelOption, CartItem, OrderReservation, Review } from './types';

export default function App() {
  // Brand Data State
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [reservations, setReservations] = useState<OrderReservation[]>(INITIAL_RESERVATIONS);
  const [reviews, setReviews] = useState<Review[]>(CUSTOMER_REVIEWS);
  const [announcementText, setAnnouncementText] = useState(
    'Spring Drop 01 Now Live · Editorial Lookbook & Custom Fit Preview · Complimentary Pan-India Delivery'
  );

  // User Experience State
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedPhoneModel, setSelectedPhoneModel] = useState<PhoneModelOption>(SUPPORTED_PHONE_MODELS[0]); // iPhone 16 Pro default
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: INITIAL_PRODUCTS[1], // Matcha Club Diner
      selectedModel: SUPPORTED_PHONE_MODELS[0], // iPhone 16 Pro
      quantity: 1
    }
  ]);

  // Modal / Drawer visibility
  const [inspectingProduct, setInspectingProduct] = useState<Product | null>(null);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isTrackOpen, setIsTrackOpen] = useState(false);
  const [trackSearchId, setTrackSearchId] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<PolicyType | null>(null);

  // Cart operations
  const handleAddToBag = (product: Product, model: PhoneModelOption, quantity: number) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedModel.id === model.id
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      } else {
        return [...prev, { product, selectedModel: model, quantity }];
      }
    });
  };

  const handleQuickAdd = (product: Product) => {
    handleAddToBag(product, selectedPhoneModel, 1);
    setIsBagOpen(true);
  };

  const handleUpdateQuantity = (productId: string, modelId: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.product.id === productId && item.selectedModel.id === modelId) {
            return { ...item, quantity: Math.max(1, item.quantity + delta) };
          }
          return item;
        })
        .filter(item => item.quantity > 0)
    );
  };

  const handleRemoveCartItem = (productId: string, modelId: string) => {
    setCartItems(prev =>
      prev.filter(item => !(item.product.id === productId && item.selectedModel.id === modelId))
    );
  };

  const handleConfirmReservation = (newRes: OrderReservation) => {
    setReservations(prev => [newRes, ...prev]);
    // Clear bag upon successful reservation
    setCartItems([]);
  };

  const handleOpenProductById = (productId: string) => {
    const found = products.find(p => p.id === productId);
    if (found) {
      setInspectingProduct(found);
    }
  };

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    if (tab === 'reels') {
      const el = document.getElementById('feed-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'all' || tab === 'funky' || tab === 'minimal' || tab === 'new') {
      const el = document.getElementById('catalog-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleExploreHero = (collection?: 'funky' | 'minimal') => {
    if (collection) {
      setCurrentTab(collection);
    } else {
      setCurrentTab('all');
    }
    const el = document.getElementById('catalog-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Admin callbacks
  const handleUpdateProduct = (updated: Product) => {
    setProducts(prev => prev.map(p => (p.id === updated.id ? updated : p)));
  };

  const handleUpdateReservationStatus = (orderId: string, status: OrderReservation['status']) => {
    setReservations(prev =>
      prev.map(r => (r.orderId === orderId ? { ...r, status } : r))
    );
  };

  const handleDeleteReview = (reviewId: string) => {
    setReviews(prev => prev.filter(r => r.id !== reviewId));
  };

  const handleAddReview = (newRev: Review) => {
    setReviews(prev => [newRev, ...prev]);
  };

  const bagCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#1E1A1B] font-sans selection:bg-[#FCE8EC] selection:text-[#691728]">
      
      {/* 1. Announcement Bar */}
      <AnnouncementBar
        announcementText={announcementText}
        onExploreDrop={() => handleSelectTab('all')}
      />

      {/* 2. Top Bar Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBag={() => setIsBagOpen(true)}
        onOpenTrack={() => {
          setTrackSearchId(reservations[0]?.orderId || '');
          setIsTrackOpen(true);
        }}
        onOpenAdmin={() => setIsAdminOpen(true)}
        bagCount={bagCount}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 3. Hero Banner (Cases That Feel Like You) */}
        <HeroBanner
          onExplore={handleExploreHero}
          onOpenProduct={handleOpenProductById}
        />

        {/* 4. Shop by Personality (Funky vs Minimal) */}
        <ShopByPersonality
          onSelectCollection={(col) => {
            setCurrentTab(col);
            const el = document.getElementById('catalog-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. Curated Catalog & Phone Model Fitting Grid */}
        <CatalogSection
          products={products}
          activeCollectionTab={currentTab}
          onSelectCollectionTab={setCurrentTab}
          selectedPhoneModel={selectedPhoneModel}
          onSelectPhoneModel={setSelectedPhoneModel}
          onSelectProduct={(p) => setInspectingProduct(p)}
          onQuickAdd={handleQuickAdd}
        />

        {/* 6. Spotted on Your Feed (Creator Video Reels) */}
        <div id="feed-section">
          <CreatorReels
            onOpenProductById={handleOpenProductById}
          />
        </div>

        {/* 7. Loved by You (Customer Reviews & Authenticity) */}
        <CustomerReviews
          reviews={reviews}
          onAddReview={handleAddReview}
        />

      </main>

      {/* 8. Editorial Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenPolicy={(type) => setActivePolicy(type)}
        onOpenTrack={() => {
          setTrackSearchId(reservations[0]?.orderId || '');
          setIsTrackOpen(true);
        }}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* MODALS & DRAWERS */}

      {/* Product Details Modal with Live 3-Angle View & Model Selector */}
      <ProductDetailsModal
        product={inspectingProduct}
        selectedModel={selectedPhoneModel}
        onClose={() => setInspectingProduct(null)}
        onSelectModel={setSelectedPhoneModel}
        onAddToBag={handleAddToBag}
      />

      {/* Curated Bag / Lookbook Reservation Drawer */}
      <BagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onConfirmReservation={handleConfirmReservation}
        onTrackOrder={(orderId) => {
          setTrackSearchId(orderId);
          setIsTrackOpen(true);
        }}
      />

      {/* Real-Time Drop Tracking Modal */}
      <TrackOrderModal
        isOpen={isTrackOpen}
        onClose={() => setIsTrackOpen(false)}
        reservations={reservations}
        initialSearchId={trackSearchId}
      />

      {/* Fast Aesthetic & Model Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        phoneModels={SUPPORTED_PHONE_MODELS}
        onSelectProduct={(p) => setInspectingProduct(p)}
      />

      {/* Brand Desk (Section 14 Admin Requirements) */}
      <AdminDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        products={products}
        onUpdateProduct={handleUpdateProduct}
        reservations={reservations}
        onUpdateReservationStatus={handleUpdateReservationStatus}
        announcementText={announcementText}
        onUpdateAnnouncement={setAnnouncementText}
        reviews={reviews}
        onDeleteReview={handleDeleteReview}
      />

      {/* Policy & Client Care Modal (Shipping, Returns, Materials, FAQs, Contact, About) */}
      <PolicyModal
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />

    </div>
  );
}
