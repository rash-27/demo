import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { MainContent } from '@/components/main/MainContent';

const Index = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <MainContent />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
