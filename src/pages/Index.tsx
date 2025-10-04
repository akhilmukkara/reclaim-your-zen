import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ComingSoon } from "@/components/ComingSoon";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <ComingSoon />
      <Footer />
    </main>
  );
};

export default Index;
