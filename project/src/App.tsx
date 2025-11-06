import { BrowserRouter } from 'react-router-dom';
import Header from './components/Dashboard/Header';
import Hero from './components/Dashboard/Hero';
import ProductShowcase from './components/Dashboard/ProductShowcase';
import OldIsNewGold from './components/Dashboard/OldIsNewGold';
import MidBanner from './components/Dashboard/MidBanner';
import GiftSection from './components/Dashboard/GiftSection';
import CollectionBanner from './components/Dashboard/CollectionBanner';
import TripleShowcase from './components/Dashboard/TripleShowcase';
import StrokesSection from './components/Dashboard/StrokesSection';
import GoldMine from './components/Dashboard/GoldMine';
import MultiImageGrid from './components/Dashboard/MultiImageGrid';
import LargeGrid from './components/Dashboard/LargeGrid';
import TryAtHome from './components/Dashboard/TryAtHome';
import PromiseSection from './components/Dashboard/PromiseSection';
import Footer from './components/Dashboard/Footer';
import CategoriesPage from './pages/Dashboard/CategoriesPage';
import CollectionsPage from './pages/Dashboard/CollectionsPage';
import DesignPage from './pages/Dashboard/DesignPage';
import GiftPage from './pages/Dashboard/GiftPage';
import Testimonials from './components/Dashboard/Testimonials';


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <ProductShowcase />
        <OldIsNewGold />
       <CategoriesPage />
       <Testimonials testimonials={[
          {
            id: '1',
            image: 'https://res.cloudinary.com/dczicfhcv/image/upload/v1762411456/te4_blkjjq.webp',
            name: 'Emily R.',
            age: 28,
            quote: 'Precious Craft transformed my old jewelry into stunning new pieces. The craftsmanship is exceptional, and I couldn\'t be happier with the results!'
          },
          {
            id: '2',
            image: 'https://res.cloudinary.com/dczicfhcv/image/upload/v1762411457/Te1_uvvnqe.webp',
            name: 'Michael S.',
            age: 35,
            quote: 'I gifted my wife a custom design from Precious Craft, and she absolutely loved it! The process was smooth, and the final piece exceeded our expectations.'
          },
          {
            id: '3',
            image: 'https://res.cloudinary.com/dczicfhcv/image/upload/v1762411457/Te3_lna0eq.webp',     
            name: 'Sophia L.',
            age: 24,
            quote: 'The team at Precious Craft is incredibly talented. They helped me create a unique piece that perfectly matches my style. Highly recommend their services!'
          },
          {
            id: '4',
            image: 'https://res.cloudinary.com/dczicfhcv/image/upload/v1762411457/Te2_qspzzi.webp',
            name: 'David K.',
            age: 40,
            quote: 'From start to finish, my experience with Precious Craft was fantastic. The attention to detail and quality of work is unmatched. I will definitely be a returning customer.'
          },
          {
            id: '5',
            image: 'https://randomuser.me/api/portraits/women/5.jpg',
            name: 'Olivia M.',
            age: 30,
            quote: 'I had an old family heirloom redesigned by Precious Craft, and the result was breathtaking. They truly brought new life to a cherished piece.'
          }
        ]} />
        <MidBanner />
        <CollectionsPage />
        <DesignPage />
        <GiftPage />
      
        {/* <GiftSection />
        <CollectionBanner />
        <TripleShowcase />
        <StrokesSection />
        <GoldMine />
        <MultiImageGrid />
        <LargeGrid />
        <TryAtHome /> */}
        {/* <PromiseSection /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;